import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Webhook, 
  Lock, 
  Database,
  ArrowRight,
  Quote,
  Server,
  FileJson,
  Shield,
  Zap,
  Globe,
  Terminal,
  Sparkles
} from 'lucide-react';
import './APIDevelopment.scss';

gsap.registerPlugin(ScrollTrigger);

// --- Data Configuration ---

const stats = [
  { value: '99.99%', label: 'API Uptime' },
  { value: '10ms', label: 'Avg Response' },
  { value: '100+', label: 'APIs Delivered' },
  { value: '10M+', label: 'Daily Requests' }
];

const floatingIcons = [
  { Icon: Code, delay: '0s', duration: '6s', pos: { top: '15%', left: '5%' } },
  { Icon: Webhook, delay: '1s', duration: '8s', pos: { top: '25%', right: '10%' } },
  { Icon: Server, delay: '2s', duration: '7s', pos: { bottom: '25%', left: '8%' } },
  { Icon: Database, delay: '0.5s', duration: '9s', pos: { bottom: '15%', right: '5%' } },
  { Icon: Globe, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Terminal, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

const apiFeatures = [
  {
    icon: Code,
    title: 'RESTful Architecture',
    description: 'Clean, resource-oriented API design following industry best practices and standards.',
    description2: 'Proper HTTP methods, status codes, and HATEOAS for intuitive developer experience.',
  },
  {
    icon: FileJson,
    title: 'GraphQL APIs',
    description: 'Flexible query languages that let clients request exactly the data they need.',
    description2: 'Single endpoint efficiency with powerful type systems and real-time subscriptions.',
  },
  {
    icon: Shield,
    title: 'API Security',
    description: 'Enterprise-grade authentication and authorization with OAuth 2.0, JWT, and API keys.',
    description2: 'Rate limiting, CORS policies, input validation, and encryption for complete protection.',
  },
  {
    icon: Zap,
    title: 'Performance & Caching',
    description: 'Lightning-fast responses with intelligent caching strategies and CDN integration.',
    description2: 'Redis caching, ETags, and connection pooling for optimal throughput under load.',
  },
];

const techStack = [
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Python', category: 'Language' },
  { name: 'GraphQL', category: 'Query' },
  { name: 'REST', category: 'Architecture' },
  { name: 'Postman', category: 'Testing' },
  { name: 'Swagger', category: 'Docs' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Docker', category: 'Deploy' },
];

const testimonials = [
  {
    quote: "Their API architecture reduced our integration time from weeks to days. Flawless documentation and support.",
    author: "Michael Torres",
    role: "Lead Developer, SaaS Platform",
    image: "https://i.pravatar.cc/150?u=michael",
  },
  {
    quote: "The GraphQL implementation they built handles millions of requests with sub-10ms response times. Incredible engineering.",
    author: "Lisa Park",
    role: "CTO, E-commerce Giant",
    image: "https://i.pravatar.cc/150?u=lisa",
  },
  {
    quote: "Finally, an API partner that understands security without compromising performance. Our data has never been safer.",
    author: "Ahmed Hassan",
    role: "Security Lead, FinTech Corp",
    image: "https://i.pravatar.cc/150?u=ahmed",
  },
];

// --- Component ---

export function APIDevelopment() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.fromTo(
        '.api-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating Icons
      gsap.to('.api-float-icon', {
        y: -30,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.2, from: 'random' }
      });

      // Stats
      gsap.fromTo(
        '.api-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: { trigger: '.api-stats', start: 'top 85%' },
        }
      );

      // Tech Stack
      gsap.fromTo(
        '.api-tech-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: { trigger: '.api-tech-section', start: 'top 80%' },
        }
      );

      // Feature Cards
      gsap.fromTo(
        '.api-feature-card',
        { y: 40, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: { trigger: '.api-features-grid', start: 'top 75%' },
        }
      );
      
      // Testimonials
      gsap.fromTo(
        '.api-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: { trigger: '.api-testimonials', start: 'top 80%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="api-page">
      {/* --- Hero Section --- */}
      <section ref={heroRef} className="api-hero">
        <div className="api-hero-bg">
          <div className="api-network">
             {/* API request/response flow lines */}
             <div className="api-endpoint api-endpoint-1">GET</div>
             <div className="api-endpoint api-endpoint-2">POST</div>
             <div className="api-endpoint api-endpoint-3">PUT</div>
             <div className="api-endpoint api-endpoint-4">DELETE</div>
             <div className="api-flow api-flow-1"></div>
             <div className="api-flow api-flow-2"></div>
             <div className="api-flow api-flow-3"></div>
             <div className="api-flow api-flow-4"></div>
          </div>
          <div className="api-hero-orb api-orb-1" />
          <div className="api-hero-orb api-orb-2" />
          <div className="api-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="api-particle" />
            ))}
          </div>
        </div>
        
        <div className="api-container">
          <div className="api-hero-content">
            <div className="api-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="api-float-icon"
                  style={{ ...pos, animationDelay: delay, animationDuration: duration }}
                >
                  <Icon size={24} />
                </div>
              ))}
            </div>

            <div className="api-hero-badge">
              <span className="api-hero-dot" />
              <Sparkles size={14} />
              API Solutions
            </div>
            
            <h1 className="api-hero-title">
              API Development &<br />
              <span className="api-gradient-text">Integration</span>
            </h1>
            
            <p className="api-hero-description">
              Build robust, scalable, and secure APIs that power seamless digital experiences 
              and connect your ecosystem with the world.
            </p>
            
            <div className="api-hero-cta">
              <a href="/contact" className="api-btn api-btn-primary">
                Build Your API
                <ArrowRight className="api-btn-icon" />
              </a>
            </div>

            <div className="api-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="api-stat-item">
                  <span className="api-stat-value">{stat.value}</span>
                  <span className="api-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Tech Stack Section --- */}
      <section className="api-tech-section">
        <div className="api-container">
          <div className="api-section-header">
            <span className="api-section-label">API Toolkit</span>
            <h2 className="api-section-title">API Technologies</h2>
            <p className="api-section-subtitle">
              Modern tools for building world-class APIs
            </p>
          </div>

          <div className="api-tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="api-tech-item">
                <div className="api-tech-shine" />
                <span className="api-tech-name">{tech.name}</span>
                <span className="api-tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- API Development Section --- */}
      <section className="api-service">
        <div className="api-container">
          <div className="api-section-header">
            <div className="api-service-badge">
              <Webhook size={28} />
            </div>
            <h2 className="api-section-title">API Development</h2>
            <p className="api-section-subtitle">
              End-to-end API design, development, and deployment for modern applications
            </p>
          </div>

          <div className="api-features-grid">
            {apiFeatures.map((feature, index) => (
              <div key={index} className="api-feature-card">
                <div className="api-feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3 className="api-feature-title">{feature.title}</h3>
                <p className="api-feature-description">{feature.description}</p>
                <p className="api-feature-description2">{feature.description2}</p>
                <div className="api-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="api-testimonials">
        <div className="api-container">
          <div className="api-section-header">
            <span className="api-section-label">Testimonials</span>
            <h2 className="api-section-title">Client Success Stories</h2>
          </div>
          <div className="api-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="api-testimonial-card">
                <Quote className="api-testimonial-quote" size={32} />
                <p className="api-testimonial-text">{testimonial.quote}</p>
                <div className="api-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="api-testimonial-name">{testimonial.author}</div>
                    <div className="api-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="api-cta">
        <div className="api-container">
          <div className="api-cta-box">
            <div className="api-cta-glow" />
            <h2 className="api-cta-title">Ready to Connect Your World?</h2>
            <p className="api-cta-description">
              Let's build APIs that power your digital transformation and unlock new possibilities.
            </p>
            <div className="api-cta-buttons">
              <a href="#contact" className="api-btn api-btn-primary api-btn-lg">
                Start Your API Project
                <ArrowRight className="api-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="api-btn api-btn-outline">
                Call: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default APIDevelopment;