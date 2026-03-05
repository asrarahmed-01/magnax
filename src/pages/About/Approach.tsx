import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowUpRight,
  DollarSign, 
  Users, 
  Building, 
  Handshake, 
  Leaf,
  CheckCircle2,
  Target,
  Compass,
  Sparkles,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Shield
} from 'lucide-react';
import './Approach.scss';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'where-to-start', label: 'Where to Start', icon: Compass },
  { id: 'pricing-models', label: 'Pricing Models', icon: DollarSign },
  { id: 'project-management', label: 'Project Management', icon: Users },
  { id: 'architecture', label: 'Architecture CoE', icon: Building },
  { id: 'partnership', label: 'Partnership', icon: Handshake },
  { id: 'sustainability', label: 'Sustainability', icon: Leaf },
];

const pricingModels = [
  {
    title: 'Fixed Price',
    description: 'Best for well-defined projects with clear scope and requirements.',
    features: ['Predictable budget', 'Defined timeline', 'Clear deliverables', 'Milestone payments']
  },
  {
    title: 'Time & Material',
    description: 'Flexible engagement model for evolving project requirements.',
    features: ['Scalable team', 'Pay as you go', 'Agile approach', 'Regular reporting']
  },
  {
    title: 'Dedicated Team',
    description: 'Long-term partnership with a team fully dedicated to your success.',
    features: ['Full control', 'Direct communication', 'Cultural alignment', 'Long-term savings']
  },
];

const heroStats = [
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Retention' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Team' }
];

const floatingIcons = [
  { Icon: Target, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Compass, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Zap, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Award, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Globe, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Sparkles, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function Approach() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(
        '.approach-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons
      gsap.to('.approach-float-icon', {
        y: -30,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.2,
          from: 'random'
        }
      });

      // Hero stats animation
      gsap.fromTo(
        '.approach-hero-stat',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: 'back.out(1.7)'
        }
      );

      // Circular nav animation
      gsap.fromTo(
        '.approach-nav-orbit',
        { scale: 0.8, opacity: 0, rotation: -180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.4
        }
      );

      // Section animations
      gsap.fromTo(
        '.approach-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.approach-main',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string, index: number) => {
    setActiveSection(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="approach-page">
      {/* Hero - Unique Circular Navigation Design */}
      <section ref={heroRef} className="approach-hero">
        <div className="approach-hero-bg">
          <div className="approach-hero-grid" />
          <div className="approach-hero-orb approach-orb-1" />
          <div className="approach-hero-orb approach-orb-2" />
          <div className="approach-hero-orb approach-orb-3" />
          <div className="approach-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="approach-particle" />
            ))}
          </div>
          {/* <div className="approach-scan-line" /> */}
        </div>
        
        <div className="approach-container">
          <div className="approach-hero-wrapper">
            <div className="approach-hero-content">
              {/* Floating Elements */}
              <div className="approach-floating-elements">
                {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                  <div 
                    key={idx} 
                    className="approach-float-icon"
                    style={{ 
                      ...pos,
                      animationDelay: delay,
                      animationDuration: duration
                    }}
                  >
                    <Icon size={24} />
                  </div>
                ))}
              </div>

              <div className="approach-hero-badge">
                <span className="approach-hero-dot" />
                <Sparkles size={14} />
                Our Methodology
              </div>
              
              <h1 className="approach-hero-title">
                Strategic<br />
                <span className="approach-gradient-text">Approach</span>
              </h1>
              
              <p className="approach-hero-description">
                We combine industry best practices with innovative methodologies to 
                deliver exceptional results. Discover how we partner with clients 
                to turn vision into reality through structured excellence.
              </p>

              <div className="approach-hero-info">
                <div className="approach-info-item">
                  <Shield size={18} />
                  <span>Enterprise Security</span>
                </div>
                <div className="approach-info-item">
                  <TrendingUp size={18} />
                  <span>Scalable Growth</span>
                </div>
                <div className="approach-info-item">
                  <Zap size={18} />
                  <span>Rapid Delivery</span>
                </div>
              </div>
              
              {/* Hero Stats */}
              <div className="approach-hero-stats">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="approach-hero-stat">
                    <span className="approach-stat-value">{stat.value}</span>
                    <span className="approach-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular Navigation Orbit */}
            <div className="approach-nav-orbit-container">
              <div className="approach-nav-orbit">
                <div className="approach-orbit-center">
                  <div className="approach-center-icon">
                    <Target size={40} />
                  </div>
                  <span className="approach-center-text">Explore</span>
                </div>
                {sections.map((section, index) => {
                  const angle = (index * 60) - 90; // Start from top
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id, index)}
                      className={`approach-orbit-node ${activeSection === index ? 'active' : ''}`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                    >
                      <div className="approach-node-icon">
                        <section.icon size={20} />
                      </div>
                      <span className="approach-node-label">{section.label}</span>
                      {activeSection === index && (
                        <span className="approach-node-pulse" />
                      )}
                    </button>
                  );
                })}
                {/* Orbit rings */}
                <div className="approach-orbit-ring ring-1" />
                <div className="approach-orbit-ring ring-2" />
                <div className="approach-orbit-ring ring-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="approach-main">
        {/* Where to Start */}
        <section id="where-to-start" className="approach-section">
          <div className="approach-container">
            <div className="approach-section-header">
              <span className="approach-section-label">Phase 01</span>
              <div className="approach-section-title-wrap">
                <Compass className="approach-section-icon" size={32} />
                <h2>Where to Start</h2>
              </div>
            </div>
            <div className="approach-start-grid">
              <div className="approach-start-step">
                <div className="approach-step-glow" />
                <span className="approach-step-number">01</span>
                <h3>Discovery</h3>
                <p>We begin with understanding your business, goals, and challenges through in-depth consultations.</p>
                <div className="approach-step-line" />
              </div>
              <div className="approach-start-step">
                <div className="approach-step-glow" />
                <span className="approach-step-number">02</span>
                <h3>Assessment</h3>
                <p>Our experts analyze your current state and identify opportunities for improvement and innovation.</p>
                <div className="approach-step-line" />
              </div>
              <div className="approach-start-step">
                <div className="approach-step-glow" />
                <span className="approach-step-number">03</span>
                <h3>Strategy</h3>
                <p>We develop a tailored roadmap with clear milestones, deliverables, and success metrics.</p>
                <div className="approach-step-line" />
              </div>
              <div className="approach-start-step">
                <div className="approach-step-glow" />
                <span className="approach-step-number">04</span>
                <h3>Execution</h3>
                <p>Agile development with regular check-ins ensures we stay aligned with your evolving needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Models */}
        <section id="pricing-models" className="approach-section approach-section-alt">
          <div className="approach-container">
            <div className="approach-section-header">
              <span className="approach-section-label">Engagement</span>
              <div className="approach-section-title-wrap">
                <DollarSign className="approach-section-icon" size={32} />
                <h2>Pricing Models</h2>
              </div>
            </div>
            <div className="approach-pricing-grid">
              {pricingModels.map((model, idx) => (
                <div key={idx} className="approach-pricing-card">
                  <div className="approach-pricing-glow" />
                  <div className="approach-pricing-header">
                    <h3>{model.title}</h3>
                  </div>
                  <p>{model.description}</p>
                  <ul>
                    {model.features.map((feature, fidx) => (
                      <li key={fidx}>
                        <CheckCircle2 size={16} /> 
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Management Office */}
        <section id="project-management" className="approach-section">
          <div className="approach-container">
            <div className="approach-section-header">
              <span className="approach-section-label">Delivery</span>
              <div className="approach-section-title-wrap">
                <Users className="approach-section-icon" size={32} />
                <h2>Project Management Office</h2>
              </div>
            </div>
            <div className="approach-pmo-content">
              <div className="approach-pmo-intro">
                <p>
                  Our PMO ensures every project is delivered on time, within budget, 
                  and to the highest quality standards. We combine agile methodologies 
                  with robust governance frameworks.
                </p>
              </div>
              <div className="approach-pmo-features">
                <div className="approach-pmo-feature">
                  <div className="approach-pmo-icon">
                    <TrendingUp size={24} />
                  </div>
                  <h4>Agile Methodology</h4>
                  <p>Scrum and Kanban frameworks for iterative development</p>
                </div>
                <div className="approach-pmo-feature">
                  <div className="approach-pmo-icon">
                    <Globe size={24} />
                  </div>
                  <h4>Transparent Reporting</h4>
                  <p>Real-time dashboards and regular status updates</p>
                </div>
                <div className="approach-pmo-feature">
                  <div className="approach-pmo-icon">
                    <Shield size={24} />
                  </div>
                  <h4>Risk Management</h4>
                  <p>Proactive identification and mitigation of project risks</p>
                </div>
                <div className="approach-pmo-feature">
                  <div className="approach-pmo-icon">
                    <Award size={24} />
                  </div>
                  <h4>Quality Assurance</h4>
                  <p>Continuous testing and quality gates at every stage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture CoE */}
        <section id="architecture" className="approach-section approach-section-alt">
          <div className="approach-container">
            <div className="approach-section-header">
              <span className="approach-section-label">Foundation</span>
              <div className="approach-section-title-wrap">
                <Building className="approach-section-icon" size={32} />
                <h2>Architecture Center of Excellence</h2>
              </div>
            </div>
            <div className="approach-arch-content">
              <p className="approach-arch-intro">
                Our Architecture CoE defines standards, best practices, and reference 
                architectures that ensure scalable, secure, and maintainable solutions.
              </p>
              <div className="approach-arch-areas">
                <div className="approach-arch-area">
                  <div className="approach-arch-icon">
                    <ArrowUpRight size={24} />
                  </div>
                  <h4>Cloud Architecture</h4>
                  <p>Multi-cloud and hybrid cloud solutions</p>
                </div>
                <div className="approach-arch-area">
                  <div className="approach-arch-icon">
                    <ArrowUpRight size={24} />
                  </div>
                  <h4>Microservices</h4>
                  <p>Scalable, decoupled system design</p>
                </div>
                <div className="approach-arch-area">
                  <div className="approach-arch-icon">
                    <ArrowUpRight size={24} />
                  </div>
                  <h4>Data Architecture</h4>
                  <p>Modern data platforms and pipelines</p>
                </div>
                <div className="approach-arch-area">
                  <div className="approach-arch-icon">
                    <ArrowUpRight size={24} />
                  </div>
                  <h4>Security Architecture</h4>
                  <p>Security-first design principles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Partnership */}
        <section id="partnership" className="approach-section">
          <div className="approach-container">
            <div className="approach-section-header">
              <span className="approach-section-label">Collaboration</span>
              <div className="approach-section-title-wrap">
                <Handshake className="approach-section-icon" size={32} />
                <h2>Technology Partnership</h2>
              </div>
            </div>
            <div className="approach-partnership-content">
              <p>
                We don't just deliver projects; we build lasting partnerships. Our 
                collaborative approach ensures we understand your business deeply 
                and evolve with your needs.
              </p>
              <div className="approach-partnership-benefits">
                <div className="approach-benefit">
                  <CheckCircle2 size={20} />
                  <span>Dedicated account management</span>
                </div>
                <div className="approach-benefit">
                  <CheckCircle2 size={20} />
                  <span>Strategic technology consulting</span>
                </div>
                <div className="approach-benefit">
                  <CheckCircle2 size={20} />
                  <span>Continuous improvement programs</span>
                </div>
                <div className="approach-benefit">
                  <CheckCircle2 size={20} />
                  <span>Knowledge transfer and training</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Policy */}
        <section id="sustainability" className="approach-section approach-section-alt">
          <div className="approach-container">
            <div className="approach-section-header">
              <span className="approach-section-label">Responsibility</span>
              <div className="approach-section-title-wrap">
                <Leaf className="approach-section-icon" size={32} />
                <h2>Sustainability Policy</h2>
              </div>
            </div>
            <div className="approach-sustain-content">
              <p className="approach-sustain-intro">
                We are committed to sustainable business practices that minimize 
                environmental impact while maximizing social value.
              </p>
              <div className="approach-sustain-pillars">
                <div className="approach-sustain-pillar">
                  <div className="approach-pillar-icon">
                    <Leaf size={24} />
                  </div>
                  <h4>Environmental</h4>
                  <p>Carbon-neutral operations, green cloud practices, and sustainable office spaces.</p>
                </div>
                <div className="approach-sustain-pillar">
                  <div className="approach-pillar-icon">
                    <Users size={24} />
                  </div>
                  <h4>Social</h4>
                  <p>Diverse and inclusive workplace, community engagement, and ethical sourcing.</p>
                </div>
                <div className="approach-sustain-pillar">
                  <div className="approach-pillar-icon">
                    <Shield size={24} />
                  </div>
                  <h4>Governance</h4>
                  <p>Transparent business practices, data privacy, and compliance with regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="approach-cta">
        <div className="approach-container">
          <div className="approach-cta-box">
            <div className="approach-cta-glow" />
            <h2 className="approach-cta-title">Ready to Start Your Project?</h2>
            <p className="approach-cta-description">Let's discuss the best approach for your business needs.</p>
            <a href="/contact" className="approach-btn approach-btn-primary approach-btn-lg">
              Get Started
              <ArrowRight className="approach-btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Approach;