// src/pages/About.tsx

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from '../../animations/scrollReveal';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Award,
} from 'lucide-react';

import { getAboutData } from '../../../service/api';
import type { AboutPageData } from '../../../types';

import './About.scss';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const [data, setData] = useState<AboutPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Fetch data
  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const pageData = await getAboutData();
        if (mounted) {
          setData(pageData);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to load about page data');
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

  // GSAP parallax on image
  useEffect(() => {
    if (loading || !data) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -50,
        rotateY: 3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [data, loading]);

  if (loading) return <section className="about loading">Loading about section...</section>;
  if (error) return <section className="about error">Error: {error}</section>;
  if (!data) return <section className="about">No about data available</section>;

  // ─── Icon mapping for stats cards ──────────────────────────────────────
  const statIconMap = {
    Calendar,
    CheckCircle2,
    Award,
  } as const;

  const getStatIcon = (iconName: string) => {
    const IconComponent = statIconMap[iconName as keyof typeof statIconMap];
    return IconComponent ? <IconComponent className="about-card-icon" /> : <Award className="about-card-icon" />;
  };

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrapper">
            <div ref={imageRef} className="about-image-container">
              <ScrollReveal animation="slideLeft">
                <div className="about-image-box">
                  <img
                    src={data.image || '/images/about-image.jpg'}
                    alt="Our team at work"
                    className="about-image"
                  />
                </div>
              </ScrollReveal>

              {/* Decorative elements */}
              <div className="about-decor about-decor-1" />
              <div className="about-decor about-decor-2" />
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <ScrollReveal animation="fadeUp">
              <span className="about-subtitle">
                {data.subtitle || '// ABOUT US //'}
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="about-title">
                {data.title || 'Innovative IT Solutions for Your Business'}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="about-text about-text-lg">
                {data.descriptionLg ||
                  'With over a decade of experience, we deliver tailored technology ' +
                  'solutions that empower businesses to thrive in the digital age. ' +
                  'Our expert team combines innovation with reliability to help you ' +
                  'achieve your goals.'}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.3}>
              <p className="about-text">
                {data.descriptionSm ||
                  'We specialize in cloud solutions, cybersecurity, data analytics, ' +
                  'and custom software development. Our approach is collaborative, ' +
                  'transparent, and focused on delivering measurable results for your business.'}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.4}>
              <a href="#services" className="about-link">
                {data.linkText || 'Explore Our Services'}
                <ArrowRight className="about-link-icon" />
              </a>
            </ScrollReveal>

            {/* Info Cards / Stats */}
            <div className="about-cards">
              {data.stats?.map?.((card, index) => (
                <ScrollReveal
                  key={index}
                  animation="fadeUp"
                  delay={0.5 + index * 0.1}
                >
                  <div className="about-card">
                    {getStatIcon(card.icon)}
                    <div className="about-card-number">{card.number}</div>
                    <div className="about-card-label">{card.label}</div>
                    <div className="about-card-sublabel">{card.sublabel}</div>
                  </div>
                </ScrollReveal>
              )) || (
                // Minimal fallback if no data
                <div className="about-card-placeholder">No stats available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;