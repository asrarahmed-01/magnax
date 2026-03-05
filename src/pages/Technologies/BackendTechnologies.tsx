import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Server, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Quote,
  Cpu,
  Globe,
  Lock,
  Cloud,
  Terminal,
  Activity,
  GitBranch,
  
  Sparkles,
  Play,
  
  Star
} from 'lucide-react';
import './BackendTechnologies.scss';

gsap.registerPlugin(ScrollTrigger);

const backendTech = [
  {
    name: '.NET',
    category: 'Framework',
    description: 'Build robust, scalable enterprise applications with Microsoft\'s powerful cross-platform framework.',
    features: ['ASP.NET Core', 'Entity Framework', 'Web API', 'Microservices'],
    icon: '/images/tech/dotnet.svg'
  },
  {
    name: 'Java',
    category: 'Language',
    description: 'Enterprise-grade solutions with Spring Boot, Hibernate, and battle-tested Java ecosystem.',
    features: ['Spring Boot', 'Hibernate', 'Maven/Gradle', 'Jakarta EE'],
    icon: '/images/tech/java.svg'
  },
  {
    name: 'Python',
    category: 'Language',
    description: 'Rapid development with Django, Flask, and FastAPI for web services and data processing.',
    features: ['Django', 'FastAPI', 'Flask', 'Celery'],
    icon: '/images/tech/python.svg'
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    description: 'High-performance, event-driven JavaScript runtime for scalable network applications.',
    features: ['Express.js', 'NestJS', 'Socket.io', 'GraphQL'],
    icon: '/images/tech/nodejs.svg'
  },
  {
    name: 'Go',
    category: 'Language',
    description: 'Lightning-fast, concurrent programming for high-performance backend systems.',
    features: ['Gin', 'Goroutines', 'Channels', 'Standard Library'],
    icon: '/images/tech/go.svg'
  }
];

const capabilities = [
  {
    icon: Server,
    title: 'RESTful APIs',
    description: 'Design and implement scalable, versioned APIs with comprehensive documentation.'
  },
  {
    icon: Database,
    title: 'Database Integration',
    description: 'Seamless connectivity with SQL, NoSQL, and in-memory databases.'
  },
  {
    icon: Shield,
    title: 'Security & Auth',
    description: 'OAuth 2.0, JWT, SSO, and enterprise-grade security implementations.'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Caching, load balancing, and optimization for millions of requests.'
  },
  {
    icon: Globe,
    title: 'Microservices',
    description: 'Distributed systems with service mesh, discovery, and containerization.'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Encryption at rest and in transit with compliance (GDPR, HIPAA, SOC2).'
  }
];

const projects = [
  {
    name: 'Enterprise ERP System',
    client: 'ManufacturePro',
    tech: '.NET',
    description: 'Scalable ERP handling 10k+ concurrent users with real-time inventory.',
    results: ['10k+ concurrent users', '99.99% uptime', '40% efficiency gain'],
    image: '/images/projects/erp.jpg'
  },
  {
    name: 'Banking Core System',
    client: 'SecureBank',
    tech: 'Java',
    description: 'Microservices-based banking platform processing 1M+ daily transactions.',
    results: ['1M+ daily transactions', '50ms response time', 'Zero downtime deploys'],
    image: '/images/projects/banking-core.jpg'
  },
  {
    name: 'AI Data Pipeline',
    client: 'DataIntel',
    tech: 'Python',
    description: 'Real-time data processing pipeline for machine learning models.',
    results: ['10TB daily processed', 'Real-time insights', '95% accuracy'],
    image: '/images/projects/ai-pipeline.jpg'
  },
  {
    name: 'Real-time Chat Platform',
    client: 'ConnectApp',
    tech: 'Node.js',
    description: 'WebSocket-based messaging platform with 5M+ active users.',
    results: ['5M+ active users', 'Sub-100ms latency', '99.9% delivery rate'],
    image: '/images/projects/chat-platform.jpg'
  }
];

const testimonials = [
  {
    quote: "Their .NET expertise delivered a rock-solid backend that handles our peak loads effortlessly.",
    author: "Robert Chen",
    role: "CTO, ManufacturePro",
    image: "/images/testimonials/robert.jpg"
  },
  {
    quote: "The Java microservices architecture they built scaled perfectly as we grew 10x.",
    author: "Lisa Park",
    role: "VP Engineering, SecureBank",
    image: "/images/testimonials/lisa.jpg"
  },
  {
    quote: "Python data pipelines process terabytes daily. Exceptional engineering quality.",
    author: "Ahmed Hassan",
    role: "Chief Data Officer, DataIntel",
    image: "/images/testimonials/ahmed.jpg"
  }
];

const stats = [
  { value: '10M+', label: 'API Requests/Day' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '50ms', label: 'Avg Response' },
  { value: '5+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Cloud, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Terminal, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Database, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: GitBranch, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Activity, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Cpu, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function BackendTechnologies() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.be-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.be-float-icon', {
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

      // Mouse glow effect
      const handleMouseMove = (e: MouseEvent) => {
        if (glowRef.current) {
          const rect = heroRef.current?.getBoundingClientRect();
          if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glowRef.current.style.setProperty('--mouse-x', `${x}px`);
            glowRef.current.style.setProperty('--mouse-y', `${y}px`);
          }
        }
      };

      heroRef.current?.addEventListener('mousemove', handleMouseMove);

      // Stats animation
      gsap.fromTo(
        '.be-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.be-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech cards animation with 3D tilt
      gsap.fromTo(
        '.be-tech-card',
        { y: 40, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 75%',
          },
        }
      );

      // Capabilities animation
      gsap.fromTo(
        '.be-capability-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.be-capabilities',
            start: 'top 80%',
          },
        }
      );

      // Projects animation
      gsap.fromTo(
        '.be-project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.be-projects',
            start: 'top 75%',
          },
        }
      );

      // Architecture section animation
      gsap.fromTo(
        '.be-arch-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.be-architecture',
            start: 'top 70%',
          },
        }
      );

      // Architecture diagram animation
      gsap.fromTo(
        '.be-arch-diagram',
        { x: 50, opacity: 0, rotateY: -10 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.be-arch-visual',
            start: 'top 70%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.be-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.be-testimonials',
            start: 'top 80%',
          },
        }
      );

      return () => {
        heroRef.current?.removeEventListener('mousemove', handleMouseMove);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="be-page">
      {/* Hero Section */}
      <section ref={heroRef} className="be-hero">
        <div className="be-hero-bg">
          <div className="be-hero-grid" />
          <div className="be-hero-glow" ref={glowRef} />
          <div className="be-hero-orb be-orb-1" />
          <div className="be-hero-orb be-orb-2" />
          <div className="be-hero-orb be-orb-3" />
        </div>
        
        <div className="be-container">
          <div className="be-hero-content">
            {/* Floating Elements */}
            <div className="be-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="be-float-icon"
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

            <div className="be-hero-badge">
              <span className="be-hero-dot" />
              <Sparkles size={14} />
              Backend Development
            </div>
            
            <h1 className="be-hero-title">
              Powering Systems<br />
              <span className="be-gradient-text">That Scale</span>
            </h1>
            
            <p className="be-hero-description">
              Build powerful, scalable server-side solutions with our expert backend development. 
              From .NET to Python, we architect systems that handle millions of requests 
              with reliability and performance.
            </p>
            
            <div className="be-hero-cta">
              <a href="#contact" className="be-btn be-btn-primary">
                Discuss Your Architecture
                <ArrowRight className="be-btn-icon" />
              </a>
              <a href="#tech" className="be-btn be-btn-secondary">
                <Play size={18} />
                Explore Technologies
              </a>
            </div>

            {/* Stats Bar */}
            <div className="be-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="be-stat-item">
                  <span className="be-stat-value">{stat.value}</span>
                  <span className="be-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} id="tech" className="be-tech-section">
        <div className="be-container">
          <div className="be-section-header">
            <span className="be-section-label">Technology Stack</span>
            <h2 className="be-section-title">Backend Technologies</h2>
            <p className="be-section-subtitle">
              Robust frameworks and languages powering enterprise applications
            </p>
          </div>

          <div className="be-tech-grid">
            {backendTech.map((tech, index) => (
              <div 
                key={index} 
                className="be-tech-card"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                <div className="be-tech-card-inner">
                  <div className="be-tech-shine" />
                  <div className="be-tech-header">
                    <div className="be-tech-icon-wrapper">
                      <Server size={32} />
                    </div>
                    <div className="be-tech-meta">
                      <span className="be-tech-category">{tech.category}</span>
                      <h3 className="be-tech-name">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="be-tech-description">{tech.description}</p>
                  <div className="be-tech-features">
                    {tech.features.map((feature, i) => (
                      <span key={i} className="be-tech-feature">
                        <CheckCircle2 size={14} />
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="be-capabilities">
        <div className="be-container">
          <div className="be-section-header">
            <span className="be-section-label">What We Build</span>
            <h2 className="be-section-title">Our Capabilities</h2>
            <p className="be-section-subtitle">
              Comprehensive backend solutions for enterprise-scale applications
            </p>
          </div>

          <div className="be-capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="be-capability-card">
                <div className="be-capability-icon">
                  <cap.icon size={28} />
                </div>
                <h3 className="be-capability-title">{cap.title}</h3>
                <p className="be-capability-description">{cap.description}</p>
                <div className="be-capability-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="be-projects">
        <div className="be-container">
          <div className="be-section-header">
            <span className="be-section-label">Case Studies</span>
            <h2 className="be-section-title">Featured Projects</h2>
            <p className="be-section-subtitle">
              Real-world backend systems we've architected and deployed
            </p>
          </div>

          <div className="be-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="be-project-card">
                <div className="be-project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="be-project-overlay" />
                  <span className="be-project-tech">{project.tech}</span>
                </div>
                <div className="be-project-content">
                  <span className="be-project-client">{project.client}</span>
                  <h3 className="be-project-name">{project.name}</h3>
                  <p className="be-project-description">{project.description}</p>
                  <div className="be-project-results">
                    {project.results.map((result, i) => (
                      <span key={i} className="be-project-result">
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
      </section>

      {/* Architecture Section */}
      <section className="be-architecture">
        <div className="be-container">
          <div className="be-arch-grid">
            <div className="be-arch-content">
              <span className="be-section-label">System Design</span>
              <h2 className="be-section-title">Scalable Architecture</h2>
              
              <div className="be-arch-list">
                {[
                  { num: '01', title: 'Microservices', desc: 'Distributed systems with independent, deployable services and service mesh' },
                  { num: '02', title: 'Event-Driven', desc: 'Async processing with message queues, event sourcing, and CQRS patterns' },
                  { num: '03', title: 'Serverless', desc: 'Cost-effective scaling with FaaS, managed services, and auto-scaling' },
                  { num: '04', title: 'API Gateway', desc: 'Unified entry point with rate limiting, caching, and request routing' }
                ].map((item, idx) => (
                  <div key={idx} className="be-arch-item">
                    <div className="be-arch-number">{item.num}</div>
                    <div className="be-arch-text">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="be-arch-visual">
              <div className="be-arch-diagram">
                <div className="be-arch-layer be-arch-client">
                  <span>Clients</span>
                  <div className="be-arch-nodes">
                    <span>Web</span>
                    <span>Mobile</span>
                    <span>IoT</span>
                  </div>
                </div>
                <div className="be-arch-arrow">↓</div>
                <div className="be-arch-layer be-arch-gateway">
                  <span>API Gateway</span>
                  <div className="be-arch-nodes">
                    <span>Auth</span>
                    <span>Rate Limit</span>
                  </div>
                </div>
                <div className="be-arch-arrow">↓</div>
                <div className="be-arch-layer be-arch-services">
                  <span>Microservices</span>
                  <div className="be-arch-nodes">
                    <span>Orders</span>
                    <span>Payments</span>
                    <span>Inventory</span>
                    <span>Users</span>
                  </div>
                </div>
                <div className="be-arch-arrow">↓</div>
                <div className="be-arch-layer be-arch-data">
                  <span>Data Layer</span>
                  <div className="be-arch-nodes">
                    <span>PostgreSQL</span>
                    <span>Redis</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="be-testimonials">
        <div className="be-container">
          <div className="be-section-header">
            <span className="be-section-label">Testimonials</span>
            <h2 className="be-section-title">Client Feedback</h2>
          </div>
          
          <div className="be-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="be-testimonial-card">
                <Quote className="be-testimonial-quote" size={32} />
                <p className="be-testimonial-text">{testimonial.quote}</p>
                <div className="be-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="be-testimonial-name">{testimonial.author}</div>
                    <div className="be-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="be-cta">
        <div className="be-container">
          <div className="be-cta-box">
            <div className="be-cta-glow" />
            <h2 className="be-cta-title">Ready to Architect Your Backend?</h2>
            <p className="be-cta-description">
              Let's build a scalable, secure backend that powers your applications 
              and grows with your business
            </p>
            <div className="be-cta-buttons">
              <a href="#contact" className="be-btn be-btn-primary be-btn-lg">
                Start Your Project
                <ArrowRight className="be-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="be-btn be-btn-outline">
                Call Us: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BackendTechnologies;