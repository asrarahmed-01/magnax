import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Lightbulb, 
  RefreshCw, 
  Users, 
  Target, 
  Shield,
  ArrowRight,
  Quote,
  BarChart3,
  Cpu,
  Layers,
  Globe,
  Sparkles,
} from 'lucide-react';
import './ITConsultingDigital.scss';

gsap.registerPlugin(ScrollTrigger);

const consultingAreas = [
  { name: 'IT Strategy', category: 'Planning' },
  { name: 'Cloud Migration', category: 'Infrastructure' },
  { name: 'Cybersecurity', category: 'Security' },
  { name: 'Data Analytics', category: 'Insights' },
  { name: 'Process Optimization', category: 'Operations' },
  { name: 'Risk Management', category: 'Compliance' },
  { name: 'Digital Roadmap', category: 'Strategy' },
  { name: 'Tech Assessment', category: 'Audit' },
];

const transformationPillars = [
  { name: 'Customer Experience', category: 'CX' },
  { name: 'Operational Agility', category: 'Ops' },
  { name: 'Culture & Change', category: 'People' },
  { name: 'Digital Technology', category: 'Tech' },
  { name: 'Data & Insights', category: 'Analytics' },
  { name: 'Business Model', category: 'Strategy' },
  { name: 'Ecosystem Integration', category: 'Partners' },
  { name: 'Continuous Innovation', category: 'Growth' },
];

const consultingFeatures = [
  {
    icon: Lightbulb,
    title: 'Strategic IT Planning',
    description: 'Align technology investments with business goals through comprehensive roadmaps and feasibility studies.',
    description2:' Identify opportunities for innovation and competitive advantage in your industry.',
  },
  {
    icon: Target,
    title: 'Technology Assessment',
    description: 'Evaluate your current tech stack, identify gaps, and recommend optimal solutions for growth.',
    description2:' Ensure your technology infrastructure is future-ready and scalable.',
  },
  {
    icon: Shield,
    title: 'Risk & Compliance',
    description: 'Navigate complex regulatory landscapes with robust cybersecurity and compliance frameworks.',
    description2:' Ensure your organization is protected against evolving threats and regulatory requirements.',
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Streamline operations and reduce costs through data-driven process improvements.',
    description2:' Leverage analytics to identify inefficiencies and implement best practices for operational excellence.',
  },
];

const transformationFeatures = [
  {
    icon: RefreshCw,
    title: 'End-to-End Transformation',
    description: 'Reimagine your entire business model with digital-first strategies and modern architectures.',
    description2:' Transform your organization from the ground up with a comprehensive digital strategy.',
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Guide your teams through digital adoption with training, support, and cultural transformation.',
      description2:' Foster a culture of innovation and agility to ensure successful transformation outcomes.',
  },
  {
    icon: Cpu,
    title: 'Legacy Modernization',
    description: 'Migrate from outdated systems to cloud-native platforms without disrupting operations.',
    description2:' Modernize your technology stack to improve performance, scalability, and security.',
  },
  {
    icon: Globe,
    title: 'Ecosystem Integration',
    description: 'Connect with partners, suppliers, and customers through seamless digital platforms.',
    description2:' Build a connected ecosystem that drives collaboration and growth across your value chain.',
  },
];

const testimonials = [
  {
    quote: "Their strategic guidance helped us navigate a complex digital transformation. We emerged stronger and more competitive.",
    author: "Patricia Williams",
    role: "CEO, GlobalBank",
    image: "/images/testimonials/patricia.jpg",
  },
  {
    quote: "The digital transformation roadmap they created was our blueprint for success. Every milestone was hit on time.",
    author: "Robert Zhang",
    role: "CTO, FinanceHub",
    image: "/images/testimonials/robert.jpg",
  },
  {
    quote: "From assessment to implementation, their consulting team was exceptional. Best ROI we've seen on any project.",
    author: "Elena Rodriguez",
    role: "COO, ManufacturePro",
    image: "/images/testimonials/elena.jpg",
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '40%', label: 'Avg Cost Reduction' },
  { value: '10+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Lightbulb, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: RefreshCw, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Cpu, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Globe, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: BarChart3, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Layers, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

const sections = [
  { id: 'consulting', label: 'IT Consulting' },
  { id: 'transformation', label: 'Digital Transformation' },
];

export function ITConsultingDigital() {
  const heroRef = useRef<HTMLDivElement>(null);
  const consultingClientsRef = useRef<HTMLDivElement>(null);
  const transformationClientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.icd-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.icd-float-icon', {
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

      // Stats animation
      gsap.fromTo(
        '.icd-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.icd-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech stack animations
      gsap.fromTo(
        '.icd-pillar-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.icd-pillars-section',
            start: 'top 80%',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        '.icd-feature-card',
        { y: 40, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.icd-features-grid',
            start: 'top 75%',
          },
        }
      );

      // Client cards animations
      gsap.fromTo(
        '.icd-client-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: consultingClientsRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.icd-transformation-client-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: transformationClientsRef.current,
            start: 'top 75%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.icd-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.icd-testimonials',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="icd-page">
      {/* Hero Section */}
      <section ref={heroRef} className="icd-hero">
        <div className="icd-hero-bg">
          <div className="icd-hero-grid" />
          <div className="icd-hero-orb icd-orb-1" />
          <div className="icd-hero-orb icd-orb-2" />
          <div className="icd-hero-orb icd-orb-3" />
          <div className="icd-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="icd-particle" />
            ))}
          </div>
          {/* <div className="icd-scan-line" /> */}
        </div>
        
        <div className="icd-container">
          <div className="icd-hero-content">
            {/* Floating Elements */}
            <div className="icd-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="icd-float-icon"
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

            <div className="icd-hero-badge">
              <span className="icd-hero-dot" />
              <Sparkles size={14} />
              Strategic Solutions
            </div>
            
            <h1 className="icd-hero-title">
              IT Consulting &<br />
             Digital Transformation
            </h1>
            
            <p className="icd-hero-description">
              Navigate the complexities of modern technology with expert guidance. 
              We help organizations reimagine their future through strategic IT consulting 
              and comprehensive digital transformation programs.
            </p>
            
            <div className="icd-hero-cta">
              <a href="/contact" className="icd-btn icd-btn-primary">
                Book Consultation
                <ArrowRight className="icd-btn-icon" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="icd-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="icd-stat-item">
                  <span className="icd-stat-value">{stat.value}</span>
                  <span className="icd-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Pillars */}
      <section id="consulting" className="icd-pillars-section icd-pillars-consulting">
        <div className="icd-container">
          <div className="icd-section-header">
            <span className="icd-section-label">Consulting Expertise</span>
            <h2 className="icd-section-title">Consulting Areas</h2>
            <p className="icd-section-subtitle">
              Comprehensive IT consulting across all domains
            </p>
          </div>

          <div className="icd-pillars-grid">
            {consultingAreas.map((area, index) => (
              <div key={index} className="icd-pillar-item icd-pillar-item-consulting">
                <div className="icd-pillar-shine" />
                <span className="icd-pillar-name">{area.name}</span>
                <span className="icd-pillar-category">{area.category}</span>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Consulting Section */}
      <section className="icd-service icd-service-consulting">
        <div className="icd-container">
          <div className="icd-section-header">
            <div className="icd-service-badge icd-service-badge-consulting">
              <Lightbulb size={28} />
            </div>
            <h2 className="icd-section-title">IT Consulting</h2>
            <p className="icd-section-subtitle">
              Expert guidance to optimize your technology investments and align IT with business strategy
            </p>
          </div>

          <div className="icd-features-grid">
            {consultingFeatures.map((feature, index) => (
              <div key={index} className="icd-feature-card icd-feature-card-consulting">
                <div className="icd-feature-icon icd-feature-icon-consulting">
                  <feature.icon size={28} />
                </div>
                <h3 className="icd-feature-title">{feature.title}</h3>
                <p className="icd-feature-description">{feature.description}</p>
                <p className="icd-feature-description">{feature.description2}</p>
                <div className="icd-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Clients */}
      {/* <section ref={consultingClientsRef} className="icd-clients icd-clients-consulting">
        <div className="icd-container">
          <div className="icd-section-header">
            <span className="icd-clients-label icd-clients-label-consulting">IT Consulting</span>
            <h2 className="icd-section-title">Strategic Consulting Success</h2>
          </div>
          <div className="icd-clients-grid">
            {consultingClients.map((client, index) => (
              <div key={index} className="icd-client-card">
                <div className="icd-client-image">
                  <img src={client.image} alt={client.project} />
                  <div className="icd-client-overlay" />
                  <span className="icd-client-service-tag icd-client-service-tag-consulting">{client.service}</span>
                </div>
                <div className="icd-client-content">
                  <span className="icd-client-industry">{client.industry}</span>
                  <h3 className="icd-client-project">{client.project}</h3>
                  <p className="icd-client-description">{client.description}</p>
                  <div className="icd-client-results">
                    {client.results.map((result, i) => (
                      <span key={i} className="icd-client-result icd-client-result-consulting">
                        <Star size={12} />
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Transformation Pillars */}
      <section id="transformation" className="icd-pillars-section icd-pillars-transformation">
        <div className="icd-container">
          <div className="icd-section-header">
            <span className="icd-section-label">Transformation Pillars</span>
            <h2 className="icd-section-title">Digital Pillars</h2>
            <p className="icd-section-subtitle">
              Eight pillars of comprehensive digital transformation
            </p>
          </div>

          <div className="icd-pillars-grid">
            {transformationPillars.map((pillar, index) => (
              <div key={index} className="icd-pillar-item icd-pillar-item-transformation">
                <div className="icd-pillar-shine" />
                <span className="icd-pillar-name">{pillar.name}</span>
                <span className="icd-pillar-category">{pillar.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Section */}
      <section className="icd-service icd-service-transformation">
        <div className="icd-container">
          <div className="icd-section-header">
            <div className="icd-service-badge icd-service-badge-transformation">
              <RefreshCw size={28} />
            </div>
            <h2 className="icd-section-title">Digital Transformation</h2>
            <p className="icd-section-subtitle">
              Comprehensive business reinvention through technology, culture, and process innovation
            </p>
          </div>

          <div className="icd-features-grid">
            {transformationFeatures.map((feature, index) => (
              <div key={index} className="icd-feature-card icd-feature-card-transformation">
                <div className="icd-feature-icon icd-feature-icon-transformation">
                  <feature.icon size={28} />
                </div>
                <h3 className="icd-feature-title">{feature.title}</h3>
                <p className="icd-feature-description">{feature.description}</p>
                <p className="icd-feature-description">{feature.description2}</p>
                <div className="icd-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Clients
      <section ref={transformationClientsRef} className="icd-clients icd-clients-transformation">
        <div className="icd-container">
          <div className="icd-section-header">
            <span className="icd-clients-label icd-clients-label-transformation">Digital Transformation</span>
            <h2 className="icd-section-title">Transformation Stories</h2>
          </div>
          <div className="icd-clients-grid">
            {transformationClients.map((client, index) => (
              <div key={index} className="icd-client-card icd-transformation-client-card">
                <div className="icd-client-image">
                  <img src={client.image} alt={client.project} />
                  <div className="icd-client-overlay" />
                  <span className="icd-client-service-tag icd-client-service-tag-transformation">{client.service}</span>
                </div>
                <div className="icd-client-content">
                  <span className="icd-client-industry">{client.industry}</span>
                  <h3 className="icd-client-project">{client.project}</h3>
                  <p className="icd-client-description">{client.description}</p>
                  <div className="icd-client-results">
                    {client.results.map((result, i) => (
                      <span key={i} className="icd-client-result icd-client-result-transformation">
                        <Star size={12} />
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="icd-process">
        <div className="icd-container">
          <div className="icd-section-header">
            <span className="icd-section-label">Our Approach</span>
            <h2 className="icd-section-title">From Concept to Reality</h2>
            <p className="icd-section-subtitle">
              Four steps to transform your business
            </p>
          </div>

          <div className="icd-process-grid">
            {[
              { num: '01', title: 'Discover', desc: 'Deep dive into your business, technology, and goals' },
              { num: '02', title: 'Strategize', desc: 'Develop tailored roadmap with clear milestones' },
              { num: '03', title: 'Transform', desc: 'Execute with agile methodology and change management' },
              { num: '04', title: 'Optimize', desc: 'Continuous improvement and performance monitoring' }
            ].map((step, idx) => (
              <div key={idx} className="icd-process-step">
                <div className="icd-process-number">{step.num}</div>
                <h3 className="icd-process-title">{step.title}</h3>
                <p className="icd-process-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="icd-testimonials">
        <div className="icd-container">
          <div className="icd-section-header">
            <span className="icd-section-label">Testimonials</span>
            <h2 className="icd-section-title">Client Perspectives</h2>
          </div>
          <div className="icd-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="icd-testimonial-card">
                <Quote className="icd-testimonial-quote" size={32} />
                <p className="icd-testimonial-text">{testimonial.quote}</p>
                <div className="icd-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="icd-testimonial-name">{testimonial.author}</div>
                    <div className="icd-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="icd-cta">
        <div className="icd-container">
          <div className="icd-cta-box">
            <div className="icd-cta-glow" />
            <h2 className="icd-cta-title">Ready to Transform Your Business?</h2>
            <p className="icd-cta-description">
              Let's discuss how our consulting and transformation expertise 
              can unlock new opportunities for your organization.
            </p>
            <div className="icd-cta-buttons">
              <a href="#contact" className="icd-btn icd-btn-primary icd-btn-lg">
                Schedule Strategy Session
                <ArrowRight className="icd-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="icd-btn icd-btn-outline">
                Call: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ITConsultingDigital;