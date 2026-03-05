// src/components/Process/Process.tsx
import { ScrollReveal } from '../../animations/scrollReveal';
import { Search, Lightbulb, Rocket, HeartHandshake } from 'lucide-react';
import './Process.scss';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'Understanding business needs, goals and challenges through in depth consultation.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description: 'Identifying solution roadmap that meets your goals and budget.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementation',
    description: 'Deploying and integrating with skill and confidence.',
  },
  {
    icon: HeartHandshake,
    number: '04',
    title: 'Support',
    description: 'Maintaining, optimizing and supporting business success.',
  },  
];

export function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-container">
        {/* Header */}
        <div className="section-header">
          <ScrollReveal animation="fadeUp">
            <span className="sections-subtitle"> OUR PROCESS </span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="sections-title">How We Work</h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="section-desc">
              Our proven methodology ensures successful project delivery every time.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="process-steps">
          {/* Connecting Line - Desktop */}
          <div className="process-line" />

          <div className="steps-grid">
            {steps.map((step, index) => (
              <ScrollReveal
                key={index}
                animation="scale"
                delay={0.2 + index * 0.15}
              >
                <div className="step-card">
                  {/* Icon */}
                  <div className="step-icon-wrapper">
                    <step.icon className="step-icon" />
                  </div>

                  {/* Number */}
                  <div className="step-number">{step.number}</div>

                  {/* Content */}
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}