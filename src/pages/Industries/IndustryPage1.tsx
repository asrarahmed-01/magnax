import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Landmark,
  HeartPulse,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import './IndustryPage.scss';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 'fintech',
    title: 'Fintech & Banking',
    description: 'We collaborate with financial technology and banking organizations to develop secure, trustworthy, user-friendly digital solutions. From mobile banking to payment platforms to financial operating systems, we assist firms in resolving the challenges associated with financial transaction processing through innovative technologies.',
    image: '/images/industries/fintech-banking.jpg',
    icon: Landmark,
    features: [
      'Digital banking platforms',
      'Payment gateway / wallet technologies',
      'Loan / credit management solutions',
      'Financial dashboards / reporting tools',
      'Secure API integrations',
      'Compliant / scalable solutions'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'We help hospitals, health clinics, and health technology start-ups by creating systems that can help them operate more efficiently on a daily basis. We have developed systems for tracking patients and managing patient appointment schedules to creating systems for providing telemedicine and developing mobile health applications.',
    image: '/images/industries/healthcare.jpg',
    icon: HeartPulse,
    features: [
      'Hospital management systems',
      'Telemedicine platforms',
      'Patient tracking & scheduling',
      'Mobile health applications',
      'Secure medical data systems',
      'Healthcare analytics'
    ]
  }
];

export function IndustryPage1() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.industry-hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.industry-section',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.industry-main',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="industry-page">
      {/* Hero Section */}
      <section ref={heroRef} className="industry-hero">
        <div className="industry-hero-bg">
          <div className="industry-hero-grid" />
          <div className="industry-hero-orb industry-orb-1" />
          <div className="industry-hero-orb industry-orb-2" />
        </div>
        
        <div className="industry-container">
          <div className="industry-hero-content">
            <div className="industry-hero-badge">
              <Sparkles size={14} />
              Industries We Serve
            </div>
            
            <h1 className="industry-hero-title">
              Fintech &<br />
              <span className="industry-gradient-text">Healthcare</span>
            </h1>
            
            <p className="industry-hero-description">
              Delivering secure, innovative technology solutions for financial services and healthcare organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Content */}
      <main className="industry-main">
        <div className="industry-container">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <section key={industry.id} className="industry-section">
                <div className="industry-content-grid">
                  <div className="industry-image-wrapper">
                    <img src={industry.image} alt={industry.title} />
                    <div className="industry-image-overlay" />
                    <div className="industry-image-icon">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <div className="industry-content">
                    <div className="industry-label">Industry</div>
                    <h2 className="industry-title">{industry.title}</h2>
                    <p className="industry-description">{industry.description}</p>
                    <div className="industry-features">
                      <h4>What We Support:</h4>
                      <ul>
                        {industry.features.map((feature, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={18} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="industry-container">
          <div className="industry-cta-box">
            <div className="industry-cta-glow" />
            <h2 className="industry-cta-title">Ready to Transform Your Industry?</h2>
            <p className="industry-cta-description">
              Let's discuss how our technology solutions can help your business grow and succeed.
            </p>
            <a href="/contact" className="industry-btn industry-btn-primary industry-btn-lg">
              Contact Us
              <ArrowRight className="industry-btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndustryPage1;