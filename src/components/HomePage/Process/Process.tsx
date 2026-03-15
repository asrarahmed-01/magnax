// src/components/Process/Process.tsx

import { ScrollReveal } from '../../animations/scrollReveal';
import { Search, Lightbulb, Rocket, HeartHandshake } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getProcessData } from '../../../service/api';
import type { ProcessData } from '../../../types';

import './Process.scss';

export function Process() {
  const [data, setData] = useState<ProcessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const processData = await getProcessData();
        if (mounted) {
          setData(processData);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to load process data');
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

  if (loading) return <section className="process-section loading">Loading process...</section>;
  if (error) return <section className="process-section error">Error: {error}</section>;
  if (!data) return <section className="process-section">No process data available</section>;

  // ─── Icon mapping for process steps ────────────────────────────────────
  const stepIconMap = {
    Search,
    Lightbulb,
    Rocket,
    HeartHandshake,
  } as const;

  const getStepIcon = (iconName: string) => {
    const IconComponent = stepIconMap[iconName as keyof typeof stepIconMap];
    return IconComponent ? <IconComponent className="step-icon" /> : <Search className="step-icon" />;
  };

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        {/* Header */}
        <div className="section-header">
          <ScrollReveal animation="fadeUp">
            <span className="sections-subtitle">
              {data.subtitle || 'OUR PROCESS'}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="sections-title">
              {data.title || 'How We Work'}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="section-desc">
              {data.description ||
                'Our proven methodology ensures successful project delivery every time.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="process-steps">
          {/* Connecting Line - Desktop */}
          <div className="process-line" />

          <div className="steps-grid">
            {data.steps?.map?.((step, index) => (
              <ScrollReveal
                key={index}
                animation="scale"
                delay={0.2 + index * 0.15}
              >
                <div className="step-card">
                  {/* Icon */}
                  <div className="step-icon-wrapper">
                    {getStepIcon(step.icon)}
                  </div>

                  {/* Number */}
                  <div className="step-number">{step.number}</div>

                  {/* Content */}
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </ScrollReveal>
            )) || (
              <div className="process-empty">No process steps available</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}