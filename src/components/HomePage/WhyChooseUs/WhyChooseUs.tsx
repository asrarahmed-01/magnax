// src/components/WhyChooseUs/WhyChooseUs.tsx

import { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '../../animations/scrollReveal';
import { Check, Users, Trophy, Clock } from 'lucide-react';
import { getWhyChooseUsData } from '../../../service/api';
import type { WhyChooseUsData } from '../../../types';

import './WhyChooseUs.scss';

function Counter({ end, suffix, isInView }: { end: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const duration = 3000;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  const [data, setData] = useState<WhyChooseUsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Fetch data
  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const whyData = await getWhyChooseUsData();
        if (mounted) {
          console.log("WHY DATA:", whyData);
          setData(whyData);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to load why choose us data');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  // Intersection observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (loading) return <section className="why-choose-us loading">Loading why choose us...</section>;
  if (error) return <section className="why-choose-us error">Error: {error}</section>;
  if (!data) return <section className="why-choose-us">No data available</section>;

  // ─── Icon mapping for features ─────────────────────────────────────────
  const featureIconMap = {
  Check,
  Users,
  Trophy,
  Clock,
} as const;

const getFeatureIcon = (iconName?: string) => {
  if (!iconName) return <Check />;

  const IconComponent = featureIconMap[iconName as keyof typeof featureIconMap];
  return IconComponent ? <IconComponent /> : <Check />;
};

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-grid">
          {/* Left: Features */}
          <div className="features-column">
            <ScrollReveal animation="fadeUp">
              <span className="section-subtitle">
                {data.subtitle || 'WHY CHOOSE US'}
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="section-title">
                {data.title || 'What Makes Us Different'}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="why-desc">
                {data.description ||
                  'We combine technical expertise with a customer-first approach to ' +
                  'deliver solutions that truly make a difference for your business.'}
              </p>
            </ScrollReveal>

            <div className="features-grid">
              {data.features?.map?.((feature, index) => (
                <ScrollReveal
                  key={index}
                  animation="slideLeft"
                  delay={0.3 + index * 0.1}
                >
                  <div className="feature-item">
                    <div className="feature-icon">
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )) || (
                <div className="features-empty">No features listed</div>
              )}
            </div>
          </div>

          {/* Right: Stats */}
          <div ref={sectionRef} className="stats-column">
            <div className="stats-grid">
              {data.stats?.map?.((stat, index) => (
                <ScrollReveal
                  key={index}
                  animation="scale"
                  delay={0.4 + index * 0.1}
                >
                  <div className="stat-card">
                    <div className="stat-number">
                      <Counter end={stat.number} suffix={stat.suffix} isInView={isInView} />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </ScrollReveal>
              )) || <div className="stats-empty">No stats available</div>}
            </div>

            {/* Decorative elements */}
            <div className="decor-circle top-right" />
            <div className="decor-circle bottom-left" />
          </div>
        </div>
      </div>
    </section>
  );
}