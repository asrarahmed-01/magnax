import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cloud, 
  Server, 
  Container, 
  GitBranch, 
  Shield, 
  // Zap,
  ArrowRight,
  CheckCircle2,
  Quote,
  Monitor,
  // Lock,
  Scale,
  RefreshCw,
  Code,
  Sparkles,
  Play,
  Star,
  Terminal,
  // Box,
  Cpu,
  // Globe
} from 'lucide-react';
import './CloudDevOpsTechnologies.scss';

gsap.registerPlugin(ScrollTrigger);

const cloudTech = [
  {
    name: 'AWS',
    category: 'Cloud Platform',
    description: 'Comprehensive cloud services with 200+ offerings for compute, storage, ML, and IoT.',
    features: ['EC2 & Lambda', 'S3 & RDS', 'EKS & ECS', 'CloudFormation']
  },
  {
    name: 'Azure',
    category: 'Cloud Platform',
    description: 'Microsoft\'s enterprise cloud with seamless Microsoft 365 and hybrid cloud integration.',
    features: ['Azure VMs', 'AKS', 'Azure DevOps', 'Active Directory']
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Platform',
    description: 'Data analytics and machine learning leader with Kubernetes-native infrastructure.',
    features: ['Compute Engine', 'GKE', 'BigQuery', 'Cloud Functions']
  },
  {
    name: 'Docker',
    category: 'Containerization',
    description: 'Standard container platform for packaging applications with dependencies.',
    features: ['Container Runtime', 'Docker Compose', 'Docker Hub', 'Multi-stage Builds']
  },
  {
    name: 'Kubernetes',
    category: 'Orchestration',
    description: 'Production-grade container orchestration with auto-scaling and self-healing.',
    features: ['Auto-scaling', 'Service Mesh', 'Ingress Control', 'StatefulSets']
  }
];

const capabilities = [
  {
    icon: Cloud,
    title: 'Multi-Cloud Strategy',
    description: 'Avoid vendor lock-in with portable architectures across AWS, Azure, and GCP.'
  },
  {
    icon: Container,
    title: 'Container Orchestration',
    description: 'Kubernetes-native deployments with Helm, Istio, and GitOps workflows.'
  },
  {
    icon: RefreshCw,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deploy with Jenkins, GitHub Actions, and ArgoCD.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'DevSecOps with automated scanning, secrets management, and compliance.'
  },
  {
    icon: Scale,
    title: 'Auto-scaling',
    description: 'Dynamic resource allocation based on demand with cost optimization.'
  },
  {
    icon: Monitor,
    title: 'Observability',
    description: 'Full-stack monitoring with Prometheus, Grafana, and distributed tracing.'
  }
];

const projects = [
  {
    name: 'Cloud Migration',
    client: 'EnterpriseCorp',
    tech: 'AWS',
    description: 'Lift-and-shift migration of 500+ workloads to AWS with zero downtime.',
    results: ['500+ workloads', '40% cost reduction', '99.99% uptime'],
    image: '/images/projects/cloud-migration.jpg'
  },
  {
    name: 'Kubernetes Platform',
    client: 'ScaleUp',
    tech: 'Kubernetes',
    description: 'Managed K8s platform serving 1000+ microservices across 3 regions.',
    results: ['1000+ services', '3 regions', 'Auto-scaling enabled'],
    image: '/images/projects/k8s-platform.jpg'
  },
  {
    name: 'DevOps Automation',
    client: 'FinTech Pro',
    tech: 'Azure DevOps',
    description: 'End-to-end CI/CD with automated security scanning and compliance.',
    results: ['10min deploy time', '100% traceability', 'SOC2 compliant'],
    image: '/images/projects/devops-automation.jpg'
  },
  {
    name: 'Multi-Cloud Setup',
    client: 'GlobalRetail',
    tech: 'AWS + GCP',
    description: 'Hybrid cloud architecture with workload portability and disaster recovery.',
    results: ['99.999% availability', '50% faster DR', 'Vendor independence'],
    image: '/images/projects/multi-cloud.jpg'
  }
];

const testimonials = [
  {
    quote: "Their AWS expertise saved us 40% on cloud costs while improving performance.",
    author: "David Kim",
    role: "Cloud Director, EnterpriseCorp",
    image: "/images/testimonials/david.jpg"
  },
  {
    quote: "The Kubernetes platform they built scales effortlessly during our peak traffic.",
    author: "Sarah Chen",
    role: "VP Engineering, ScaleUp",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    quote: "DevOps automation reduced our deployment time from days to minutes.",
    author: "Michael Torres",
    role: "CTO, FinTech Pro",
    image: "/images/testimonials/michael.jpg"
  }
];

const stats = [
  { value: '500+', label: 'Cloud Migrations' },
  { value: '10K+', label: 'Containers Managed' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '5+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Cloud, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Terminal, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Container, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: GitBranch, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Server, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Cpu, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function CloudDevOpsTechnologies() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.cd-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.cd-float-icon', {
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
        '.cd-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.cd-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech cards animation with 3D tilt
      gsap.fromTo(
        '.cd-tech-card',
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
        '.cd-capability-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.cd-capabilities',
            start: 'top 80%',
          },
        }
      );

      // Projects animation
      gsap.fromTo(
        '.cd-project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.cd-projects',
            start: 'top 75%',
          },
        }
      );

      // Lifecycle section animation
      gsap.fromTo(
        '.cd-lifecycle-step',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.cd-lifecycle',
            start: 'top 70%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.cd-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.cd-testimonials',
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
    <div className="cd-page">
      {/* Hero Section */}
      <section ref={heroRef} className="cd-hero">
        <div className="cd-hero-bg">
          <div className="cd-hero-grid" />
          <div className="cd-hero-glow" ref={glowRef} />
          <div className="cd-hero-orb cd-orb-1" />
          <div className="cd-hero-orb cd-orb-2" />
          <div className="cd-hero-orb cd-orb-3" />
        </div>
        
        <div className="cd-container">
          <div className="cd-hero-content">
            {/* Floating Elements */}
            <div className="cd-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="cd-float-icon"
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

            <div className="cd-hero-badge">
              <span className="cd-hero-dot" />
              <Sparkles size={14} />
              Infrastructure & DevOps
            </div>
            
            <h1 className="cd-hero-title">
              Cloud Native<br />
              <span className="cd-gradient-text">DevOps Excellence</span>
            </h1>
            
            <p className="cd-hero-description">
              Modernize your infrastructure with cloud-native architectures and DevOps automation. 
              We design, migrate, and manage scalable, secure, and cost-effective cloud solutions.
            </p>
            
            <div className="cd-hero-cta">
              <a href="#contact" className="cd-btn cd-btn-primary">
                Cloud Assessment
                <ArrowRight className="cd-btn-icon" />
              </a>
              <a href="#tech" className="cd-btn cd-btn-secondary">
                <Play size={18} />
                Explore Platforms
              </a>
            </div>

            {/* Stats Bar */}
            <div className="cd-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="cd-stat-item">
                  <span className="cd-stat-value">{stat.value}</span>
                  <span className="cd-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} id="tech" className="cd-tech-section">
        <div className="cd-container">
          <div className="cd-section-header">
            <span className="cd-section-label">Technology Stack</span>
            <h2 className="cd-section-title">Cloud & DevOps Platforms</h2>
            <p className="cd-section-subtitle">
              Leading platforms and tools for modern infrastructure
            </p>
          </div>

          <div className="cd-tech-grid">
            {cloudTech.map((tech, index) => (
              <div 
                key={index} 
                className="cd-tech-card"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                <div className="cd-tech-card-inner">
                  <div className="cd-tech-shine" />
                  <div className="cd-tech-header">
                    <div className="cd-tech-icon-wrapper">
                      <Cloud size={32} />
                    </div>
                    <div className="cd-tech-meta">
                      <span className="cd-tech-category">{tech.category}</span>
                      <h3 className="cd-tech-name">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="cd-tech-description">{tech.description}</p>
                  <div className="cd-tech-features">
                    {tech.features.map((feature, i) => (
                      <span key={i} className="cd-tech-feature">
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
      <section className="cd-capabilities">
        <div className="cd-container">
          <div className="cd-section-header">
            <span className="cd-section-label">What We Do</span>
            <h2 className="cd-section-title">Our DevOps Capabilities</h2>
            <p className="cd-section-subtitle">
              End-to-end infrastructure and automation services
            </p>
          </div>

          <div className="cd-capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="cd-capability-card">
                <div className="cd-capability-icon">
                  <cap.icon size={28} />
                </div>
                <h3 className="cd-capability-title">{cap.title}</h3>
                <p className="cd-capability-description">{cap.description}</p>
                <div className="cd-capability-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="cd-projects">
        <div className="cd-container">
          <div className="cd-section-header">
            <span className="cd-section-label">Case Studies</span>
            <h2 className="cd-section-title">Infrastructure Projects</h2>
            <p className="cd-section-subtitle">
              Cloud transformations we've delivered
            </p>
          </div>

          <div className="cd-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="cd-project-card">
                <div className="cd-project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="cd-project-overlay" />
                  <span className="cd-project-tech">{project.tech}</span>
                </div>
                <div className="cd-project-content">
                  <span className="cd-project-client">{project.client}</span>
                  <h3 className="cd-project-name">{project.name}</h3>
                  <p className="cd-project-description">{project.description}</p>
                  <div className="cd-project-results">
                    {project.results.map((result, i) => (
                      <span key={i} className="cd-project-result">
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

      {/* Lifecycle Section */}
      <section className="cd-lifecycle">
        <div className="cd-container">
          <div className="cd-section-header">
            <span className="cd-section-label">DevOps Lifecycle</span>
            <h2 className="cd-section-title">Continuous Integration & Delivery</h2>
            <p className="cd-section-subtitle">
              From code commit to production deployment
            </p>
          </div>

          <div className="cd-lifecycle-grid">
            {[
              { num: '01', icon: Code, title: 'Plan', desc: 'Agile planning with Jira and backlog management' },
              { num: '02', icon: GitBranch, title: 'Code', desc: 'Version control with Git and branch strategies' },
              { num: '03', icon: Container, title: 'Build', desc: 'Automated builds and containerization' },
              { num: '04', icon: Shield, title: 'Test', desc: 'Automated testing and security scanning' },
              { num: '05', icon: Server, title: 'Deploy', desc: 'Continuous deployment with blue-green releases' },
              { num: '06', icon: Monitor, title: 'Operate', desc: 'Monitoring, logging, and incident response' }
            ].map((step, idx) => (
              <div key={idx} className="cd-lifecycle-step">
                <div className="cd-lifecycle-number">{step.num}</div>
                <div className="cd-lifecycle-icon">
                  <step.icon size={24} />
                </div>
                <h3 className="cd-lifecycle-title">{step.title}</h3>
                <p className="cd-lifecycle-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="cd-testimonials">
        <div className="cd-container">
          <div className="cd-section-header">
            <span className="cd-section-label">Testimonials</span>
            <h2 className="cd-section-title">Client Success</h2>
          </div>
          
          <div className="cd-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cd-testimonial-card">
                <Quote className="cd-testimonial-quote" size={32} />
                <p className="cd-testimonial-text">{testimonial.quote}</p>
                <div className="cd-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="cd-testimonial-name">{testimonial.author}</div>
                    <div className="cd-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cd-cta">
        <div className="cd-container">
          <div className="cd-cta-box">
            <div className="cd-cta-glow" />
            <h2 className="cd-cta-title">Ready for Cloud Native?</h2>
            <p className="cd-cta-description">
              Get a free cloud assessment and roadmap for your infrastructure transformation
            </p>
            <div className="cd-cta-buttons">
              <a href="#contact" className="cd-btn cd-btn-primary cd-btn-lg">
                Schedule Assessment
                <ArrowRight className="cd-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="cd-btn cd-btn-outline">
                Call Us: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudDevOpsTechnologies;