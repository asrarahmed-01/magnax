import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Database, 
  Table, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Quote,
  Server,
  BarChart3,
  RefreshCw,
  Lock,
  Sparkles,
  Play,
  Star,
  Terminal,
  HardDrive,
  Cpu,
} from 'lucide-react';
import './DatabaseTechnologies.scss';

gsap.registerPlugin(ScrollTrigger);

const databaseTech = [
  {
    name: 'SQL Server',
    category: 'Relational',
    description: 'Microsoft\'s enterprise RDBMS with advanced analytics, reporting, and Azure integration.',
    features: ['T-SQL', 'SSAS/SSIS/SSRS', 'Always On', 'Columnstore']
  },
  {
    name: 'Oracle',
    category: 'Relational',
    description: 'World\'s leading enterprise database with unmatched scalability and security features.',
    features: ['PL/SQL', 'RAC', 'Data Guard', 'Partitioning']
  },
  {
    name: 'MySQL',
    category: 'Relational',
    description: 'World\'s most popular open-source database powering web applications at scale.',
    features: ['InnoDB', 'Replication', 'Partitioning', 'JSON Support']
  },
  {
    name: 'PostgreSQL',
    category: 'Relational',
    description: 'Advanced open-source database with extensibility and standards compliance.',
    features: ['ACID Compliant', 'JSONB', 'Full-text Search', 'PostGIS']
  },
  {
    name: 'MongoDB',
    category: 'NoSQL',
    description: 'Document-oriented database for flexible, scalable, and high-performance applications.',
    features: ['Document Model', 'Atlas Cloud', 'Aggregation', 'Sharding']
  }
];

const capabilities = [
  {
    icon: Server,
    title: 'Database Design',
    description: 'Normalized schemas, indexing strategies, and query optimization.'
  },
  {
    icon: RefreshCw,
    title: 'Migration & Upgrade',
    description: 'Seamless migration between platforms with zero downtime.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Encryption, auditing, and compliance with GDPR, HIPAA, SOC2.'
  },
  {
    icon: BarChart3,
    title: 'Performance Tuning',
    description: 'Query optimization, partitioning, and caching strategies.'
  },
  {
    icon: Zap,
    title: 'High Availability',
    description: 'Clustering, replication, and disaster recovery solutions.'
  },
  {
    icon: Lock,
    title: 'Backup & Recovery',
    description: 'Automated backups, point-in-time recovery, and testing.'
  }
];

const projects = [
  {
    name: 'Data Warehouse',
    client: 'RetailGiant',
    tech: 'SQL Server',
    description: 'Enterprise data warehouse processing 10TB+ daily with real-time analytics.',
    results: ['10TB+ daily', 'Sub-second queries', '99.99% uptime'],
    image: '/images/projects/data-warehouse.jpg'
  },
  {
    name: 'Core Banking DB',
    client: 'GlobalBank',
    tech: 'Oracle',
    description: 'Mission-critical banking database handling 1M+ transactions per hour.',
    results: ['1M+ TPS', 'Zero data loss', 'Active-active DR'],
    image: '/images/projects/banking-db.jpg'
  },
  {
    name: 'E-commerce Platform',
    client: 'ShopMax',
    tech: 'MySQL',
    description: 'High-traffic e-commerce database with read replicas and caching.',
    results: ['100k QPS', '5x read scaling', '50ms latency'],
    image: '/images/projects/ecommerce-db.jpg'
  },
  {
    name: 'IoT Data Store',
    client: 'SensorNet',
    tech: 'MongoDB',
    description: 'Time-series data storage for 1M+ IoT devices with aggregation pipelines.',
    results: ['1M+ devices', '10B documents', 'Real-time analytics'],
    image: '/images/projects/iot-database.jpg'
  }
];

const testimonials = [
  {
    quote: "Their SQL Server optimization reduced our query time from minutes to seconds.",
    author: "Jennifer Walsh",
    role: "Data Director, RetailGiant",
    image: "/images/testimonials/jennifer.jpg"
  },
  {
    quote: "The Oracle RAC setup they implemented has been bulletproof for 3 years.",
    author: "Robert Kim",
    role: "CTO, GlobalBank",
    image: "/images/testimonials/robert.jpg"
  },
  {
    quote: "MongoDB migration was seamless. Our development velocity increased 3x.",
    author: "Lisa Chen",
    role: "VP Engineering, SensorNet",
    image: "/images/testimonials/lisa.jpg"
  }
];

const stats = [
  { value: '100TB+', label: 'Data Managed' },
  { value: '1M+', label: 'Queries/Sec' },
  { value: '99.999%', label: 'Availability' },
  { value: '5+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Database, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Terminal, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: HardDrive, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Table, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Server, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Cpu, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function DatabaseTechnologies() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.db-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.db-float-icon', {
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
        '.db-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.db-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech cards animation with 3D tilt
      gsap.fromTo(
        '.db-tech-card',
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
        '.db-capability-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.db-capabilities',
            start: 'top 80%',
          },
        }
      );

      // Projects animation
      gsap.fromTo(
        '.db-project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.db-projects',
            start: 'top 75%',
          },
        }
      );

      // Architecture section animation
      gsap.fromTo(
        '.db-arch-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.db-architecture',
            start: 'top 70%',
          },
        }
      );

      // Architecture diagram animation
      gsap.fromTo(
        '.db-arch-diagram',
        { x: 50, opacity: 0, rotateY: -10 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.db-arch-visual',
            start: 'top 70%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.db-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.db-testimonials',
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
    <div className="db-page">
      {/* Hero Section */}
      <section ref={heroRef} className="db-hero">
        <div className="db-hero-bg">
          <div className="db-hero-grid" />
          <div className="db-hero-glow" ref={glowRef} />
          <div className="db-hero-orb db-orb-1" />
          <div className="db-hero-orb db-orb-2" />
          <div className="db-hero-orb db-orb-3" />
        </div>
        
        <div className="db-container">
          <div className="db-hero-content">
            {/* Floating Elements */}
            <div className="db-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="db-float-icon"
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

            <div className="db-hero-badge">
              <span className="db-hero-dot" />
              <Sparkles size={14} />
              Data Management
            </div>
            
            <h1 className="db-hero-title">
              Database<br />
              <span className="db-gradient-text">Excellence</span>
            </h1>
            
            <p className="db-hero-description">
              Design, optimize, and manage high-performance database solutions. 
              From relational engines to modern NoSQL platforms, we ensure your data 
              is secure, available, and lightning-fast.
            </p>
            
            <div className="db-hero-cta">
              <a href="#contact" className="db-btn db-btn-primary">
                Database Assessment
                <ArrowRight className="db-btn-icon" />
              </a>
              <a href="#tech" className="db-btn db-btn-secondary">
                <Play size={18} />
                Explore Platforms
              </a>
            </div>

            {/* Stats Bar */}
            <div className="db-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="db-stat-item">
                  <span className="db-stat-value">{stat.value}</span>
                  <span className="db-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} id="tech" className="db-tech-section">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">Technology Stack</span>
            <h2 className="db-section-title">Database Platforms</h2>
            <p className="db-section-subtitle">
              Relational and NoSQL solutions for every workload
            </p>
          </div>

          <div className="db-tech-grid">
            {databaseTech.map((tech, index) => (
              <div 
                key={index} 
                className="db-tech-card"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                <div className="db-tech-card-inner">
                  <div className="db-tech-shine" />
                  <div className="db-tech-header">
                    <div className="db-tech-icon-wrapper">
                      <Database size={32} />
                    </div>
                    <div className="db-tech-meta">
                      <span className="db-tech-category">{tech.category}</span>
                      <h3 className="db-tech-name">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="db-tech-description">{tech.description}</p>
                  <div className="db-tech-features">
                    {tech.features.map((feature, i) => (
                      <span key={i} className="db-tech-feature">
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
      <section className="db-capabilities">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">What We Do</span>
            <h2 className="db-section-title">Database Services</h2>
            <p className="db-section-subtitle">
              End-to-end data management expertise
            </p>
          </div>

          <div className="db-capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="db-capability-card">
                <div className="db-capability-icon">
                  <cap.icon size={28} />
                </div>
                <h3 className="db-capability-title">{cap.title}</h3>
                <p className="db-capability-description">{cap.description}</p>
                <div className="db-capability-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="db-projects">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">Case Studies</span>
            <h2 className="db-section-title">Database Projects</h2>
            <p className="db-section-subtitle">
              Data solutions we've architected and optimized
            </p>
          </div>

          <div className="db-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="db-project-card">
                <div className="db-project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="db-project-overlay" />
                  <span className="db-project-tech">{project.tech}</span>
                </div>
                <div className="db-project-content">
                  <span className="db-project-client">{project.client}</span>
                  <h3 className="db-project-name">{project.name}</h3>
                  <p className="db-project-description">{project.description}</p>
                  <div className="db-project-results">
                    {project.results.map((result, i) => (
                      <span key={i} className="db-project-result">
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
      <section className="db-architecture">
        <div className="db-container">
          <div className="db-arch-grid">
            <div className="db-arch-content">
              <span className="db-section-label">System Design</span>
              <h2 className="db-section-title">Modern Data Architecture</h2>
              
              <div className="db-arch-list">
                {[
                  { num: '01', title: 'Polyglot Persistence', desc: 'Right database for each workload: relational, document, graph, or cache' },
                  { num: '02', title: 'Data Lakes & Warehouses', desc: 'Centralized analytics with ETL/ELT pipelines and BI integration' },
                  { num: '03', title: 'Real-time Streaming', desc: 'Kafka, Kinesis, and Change Data Capture for event-driven architectures' },
                  { num: '04', title: 'Cloud-Native Databases', desc: 'Managed services with auto-scaling, backups, and global distribution' }
                ].map((item, idx) => (
                  <div key={idx} className="db-arch-item">
                    <div className="db-arch-number">{item.num}</div>
                    <div className="db-arch-text">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="db-arch-visual">
              <div className="db-arch-diagram">
                <div className="db-arch-layer db-arch-apps">
                  <span>Applications</span>
                  <div className="db-arch-nodes">
                    <span>Web</span>
                    <span>Mobile</span>
                    <span>API</span>
                  </div>
                </div>
                <div className="db-arch-arrow">↓</div>
                <div className="db-arch-layer db-arch-cache">
                  <span>Cache Layer</span>
                  <div className="db-arch-nodes">
                    <span>Redis</span>
                    <span>Memcached</span>
                  </div>
                </div>
                <div className="db-arch-arrow">↓</div>
                <div className="db-arch-layer db-arch-primary">
                  <span>Primary Database</span>
                  <div className="db-arch-nodes">
                    <span>SQL</span>
                    <span>NoSQL</span>
                  </div>
                </div>
                <div className="db-arch-arrow">↓</div>
                <div className="db-arch-layer db-arch-replica">
                  <span>Replicas & Analytics</span>
                  <div className="db-arch-nodes">
                    <span>Read Replicas</span>
                    <span>Data Warehouse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="db-testimonials">
        <div className="db-container">
          <div className="db-section-header">
            <span className="db-section-label">Testimonials</span>
            <h2 className="db-section-title">Client Feedback</h2>
          </div>
          
          <div className="db-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="db-testimonial-card">
                <Quote className="db-testimonial-quote" size={32} />
                <p className="db-testimonial-text">{testimonial.quote}</p>
                <div className="db-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="db-testimonial-name">{testimonial.author}</div>
                    <div className="db-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="db-cta">
        <div className="db-container">
          <div className="db-cta-box">
            <div className="db-cta-glow" />
            <h2 className="db-cta-title">Optimize Your Data Infrastructure</h2>
            <p className="db-cta-description">
              Get a free database health check and performance assessment 
              from our certified experts
            </p>
            <div className="db-cta-buttons">
              <a href="#contact" className="db-btn db-btn-primary db-btn-lg">
                Schedule Assessment
                <ArrowRight className="db-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="db-btn db-btn-outline">
                Call Us: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DatabaseTechnologies;