// src/components/Services/Services.tsx

import { useEffect, useState } from 'react';
import { ScrollReveal } from '../../animations/scrollReveal';
import {
  Cloud,
  Shield,
  BarChart3,
  Code2,
  MessageSquare,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import { getServicesData } from '../../../service/api';
import type { ServicesData } from '../../../types';

import './Services.scss';

export function Services() {
  const [data, setData] = useState<ServicesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const servicesData = await getServicesData();
        if (mounted) {
          setData(servicesData);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to load services data');
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

  if (loading) return <section className="services-section loading">Loading services...</section>;
  if (error) return <section className="services-section error">Error: {error}</section>;
  if (!data) return <section className="services-section">No services data available</section>;

  // ─── Icon mapping for service cards ────────────────────────────────────
  const serviceIconMap = {
    Cloud,
    Shield,
    BarChart3,
    Code2,
    MessageSquare,
    Headphones,
  } as const;

  const getServiceIcon = (iconName: string) => {
    const IconComponent = serviceIconMap[iconName as keyof typeof serviceIconMap];
    return IconComponent ? <IconComponent className="service-icon" /> : <Code2 className="service-icon" />;
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="section-header">
          <ScrollReveal animation="fadeUp">
            <span className="section-subtitles">
              {data.subtitle || 'OUR SERVICES'}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="section-titles mt-4">
              {data.title || 'Solutions We Provide'}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="section-desc">
              {data.description ||
                'Comprehensive IT services tailored to meet your business needs and drive growth.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {data.services?.map?.((service, index) => (
            <ScrollReveal
              key={index}
              animation="scale"
              delay={0.2 + index * 0.1}
            >
              <div className="service-card">
                <div className="card-inner">
                  {/* Icon */}
                  <div className="service-icon-wrapper">
                    {getServiceIcon(service.icon)}
                  </div>

                  {/* Content */}
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>

                  {/* Link */}
                  <div
                    className="service-link"
                    onClick={() => window.location.href = service.path}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="link-icon" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )) || (
            <div className="services-empty">No services listed yet</div>
          )}
        </div>
      </div>
    </section>
  );
}