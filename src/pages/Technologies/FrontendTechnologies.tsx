import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2,  
  Zap, 
  Palette, 
  ArrowRight,
  CheckCircle2,
  Quote,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  Sparkles,
  Play,
  Star,
  Terminal,
  Box,
  GitBranch,
  Figma
} from 'lucide-react';
import './FrontendTechnologies.scss';

gsap.registerPlugin(ScrollTrigger);

const frontendTech = [
  {
    name: 'React',
    category: 'Library',
    description: 'Build dynamic user interfaces with the most popular JavaScript library. Component-based architecture for scalable applications.',
    features: ['Virtual DOM', 'Component-Based', 'Huge Ecosystem', 'React Native'],
    icon: '/images/tech/react.svg',
    gradient: 'from-[#2b4dff] to-[#0a165e]'
  },
  {
    name: 'Vue.js',
    category: 'Framework',
    description: 'Progressive framework for building user interfaces. Approachable, versatile, and performant.',
    features: ['Reactive Data', 'Component System', 'Single File', 'Gentle Learning'],
    icon: '/images/tech/vue.svg',
    gradient: 'from-[#2b4dff] to-[#0a165e]'
  },
  {
    name: 'Angular',
    category: 'Framework',
    description: 'Platform for building mobile and desktop web applications. Complete solution with TypeScript.',
    features: ['TypeScript', 'Dependency Injection', 'RxJS', 'Angular CLI'],
    icon: '/images/tech/angular.svg',
    gradient: 'from-[#2b4dff] to-[#0a165e]'
  },
  {
    name: 'JavaScript',
    category: 'Language',
    description: 'The programming language of the web. Powers interactive experiences across all modern browsers.',
    features: ['Universal Support', 'Async/Await', 'ES6+ Features', 'Vast Libraries'],
    icon: '/images/tech/javascript.svg',
    gradient: 'from-[#2b4dff] to-[#0a165e]'
  },
  {
    name: 'TypeScript',
    category: 'Language',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript. Catch errors early and improve maintainability.',
    features: ['Static Typing', 'IntelliSense', 'Refactoring', 'Enterprise Scale'],
    icon: '/images/tech/typescript.svg',
    gradient: 'from-[#2b4dff] to-[#0a165e]'
  }
];

const capabilities = [
  {
    icon: Monitor,
    title: 'Responsive Web Apps',
    description: 'Pixel-perfect applications that work flawlessly across all devices and screen sizes.'
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'Installable apps with offline capabilities, push notifications, and native-like experience.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times with code splitting, lazy loading, and advanced caching strategies.'
  },
  {
    icon: Palette,
    title: 'Modern UI/UX',
    description: 'Stunning interfaces with smooth animations, micro-interactions, and accessibility compliance.'
  },
  {
    icon: Globe,
    title: 'Internationalization',
    description: 'Multi-language support with RTL, localization, and region-specific content delivery.'
  },
  {
    icon: Layers,
    title: 'State Management',
    description: 'Complex application state handled with Redux, Vuex, NgRx, or Context API.'
  }
];

const projects = [
  {
    name: 'E-Commerce Platform',
    client: 'RetailMax',
    tech: 'React',
    description: 'High-performance shopping platform with 100k+ daily users.',
    results: ['40% faster checkout', '25% conversion boost', '99.9% uptime'],
    image: '/images/projects/ecommerce.jpg'
  },
  {
    name: 'Dashboard Analytics',
    client: 'DataCorp',
    tech: 'Vue.js',
    description: 'Real-time data visualization dashboard for enterprise clients.',
    results: ['50+ data sources', 'Sub-second updates', '4.9/5 user rating'],
    image: '/images/projects/dashboard.jpg'
  },
  {
    name: 'Banking Portal',
    client: 'SecureBank',
    tech: 'Angular',
    description: 'Enterprise banking application serving 2M+ customers.',
    results: ['2M+ active users', 'Bank-grade security', '60% faster transactions'],
    image: '/images/projects/banking.jpg'
  },
  {
    name: 'SaaS Platform',
    client: 'CloudTech',
    tech: 'TypeScript',
    description: 'Scalable SaaS solution with complex business logic.',
    results: ['Zero type errors', '80% faster debugging', 'Enterprise adoption'],
    image: '/images/projects/saas.jpg'
  }
];

const testimonials = [
  {
    quote: "Their React expertise transformed our legacy application into a modern, blazing-fast platform.",
    author: "Michael Chen",
    role: "CTO, RetailMax",
    image: "/images/testimonials/michael.jpg"
  },
  {
    quote: "The Vue.js implementation was flawless. Our users love the smooth, responsive interface.",
    author: "Sarah Williams",
    role: "Product Lead, DataCorp",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    quote: "TypeScript adoption reduced our bugs by 70%. The code quality is now enterprise-grade.",
    author: "David Park",
    role: "Engineering Manager, CloudTech",
    image: "/images/testimonials/david.jpg"
  }
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Frontend Experts' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Code2, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Terminal, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Box, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: GitBranch, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Figma, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Cpu, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function FrontendTechnologies() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.fe-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.fe-float-icon', {
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
        '.fe-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.fe-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech cards animation with 3D tilt
      gsap.fromTo(
        '.fe-tech-card',
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
        '.fe-capability-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.fe-capabilities',
            start: 'top 80%',
          },
        }
      );

      // Projects animation
      gsap.fromTo(
        '.fe-project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.fe-projects',
            start: 'top 75%',
          },
        }
      );

      // Why section animation
      gsap.fromTo(
        '.fe-why-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.fe-why',
            start: 'top 70%',
          },
        }
      );

      // Code window animation
      gsap.fromTo(
        '.fe-code-window',
        { x: 50, opacity: 0, rotateY: -10 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.fe-why-visual',
            start: 'top 70%',
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
    <div className="fe-page">
      {/* Hero Section */}
      <section ref={heroRef} className="fe-hero">
        <div className="fe-hero-bg">
          <div className="fe-hero-grid" />
          <div className="fe-hero-glow" ref={glowRef} />
          <div className="fe-hero-orb fe-orb-1" />
          <div className="fe-hero-orb fe-orb-2" />
          <div className="fe-hero-orb fe-orb-3" />
        </div>
        
        <div className="fe-container">
          <div className="fe-hero-content">
            {/* Floating Elements */}
            <div className="fe-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="fe-float-icon"
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

            <div className="fe-hero-badge">
              <span className="fe-hero-dot" />
              <Sparkles size={14} />
              Frontend Development
            </div>
            
            <h1 className="fe-hero-title">
              Build Modern<br />
              <span className="fe-gradient-text">Web Experiences</span>
            </h1>
            
            <p className="fe-hero-description">
              We craft exceptional user interfaces with cutting-edge frontend technologies. 
              From React to Angular, we deliver performant, scalable, and beautiful applications.
            </p>
            
            <div className="fe-hero-cta">
              <a href="#contact" className="fe-btn fe-btn-primary">
                Start Your Project
                <ArrowRight className="fe-btn-icon" />
              </a>
              <a href="#tech" className="fe-btn fe-btn-secondary">
                <Play size={18} />
                View Technologies
              </a>
            </div>

            {/* Stats Bar */}
            <div className="fe-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="fe-stat-item">
                  <span className="fe-stat-value">{stat.value}</span>
                  <span className="fe-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} id="tech" className="fe-tech-section">
        <div className="fe-container">
          <div className="fe-section-header">
            <span className="fe-section-label">Technology Stack</span>
            <h2 className="fe-section-title">Frontend Technologies</h2>
            <p className="fe-section-subtitle">
              Modern tools and frameworks we master to build exceptional digital experiences
            </p>
          </div>

          <div className="fe-tech-grid">
            {frontendTech.map((tech, index) => (
              <div 
                key={index} 
                className="fe-tech-card"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                <div className="fe-tech-card-inner">
                  <div className="fe-tech-shine" />
                  <div className="fe-tech-header">
                    <div className="fe-tech-icon-wrapper">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <div className="fe-tech-meta">
                      <span className="fe-tech-category">{tech.category}</span>
                      <h3 className="fe-tech-name">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="fe-tech-description">{tech.description}</p>
                  <div className="fe-tech-features">
                    {tech.features.map((feature, i) => (
                      <span key={i} className="fe-tech-feature">
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
      <section className="fe-capabilities">
        <div className="fe-container">
          <div className="fe-section-header">
            <span className="fe-section-label">What We Do</span>
            <h2 className="fe-section-title">Our Capabilities</h2>
            <p className="fe-section-subtitle">
              Comprehensive frontend solutions for every business need
            </p>
          </div>

          <div className="fe-capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="fe-capability-card">
                <div className="fe-capability-icon">
                  <cap.icon size={28} />
                </div>
                <h3 className="fe-capability-title">{cap.title}</h3>
                <p className="fe-capability-description">{cap.description}</p>
                <div className="fe-capability-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="fe-projects">
        <div className="fe-container">
          <div className="fe-section-header">
            <span className="fe-section-label">Case Studies</span>
            <h2 className="fe-section-title">Featured Projects</h2>
            <p className="fe-section-subtitle">
              Real-world applications built with modern frontend technologies
            </p>
          </div>

          <div className="fe-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="fe-project-card">
                <div className="fe-project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="fe-project-overlay" />
                  <span className="fe-project-tech">{project.tech}</span>
                </div>
                <div className="fe-project-content">
                  <span className="fe-project-client">{project.client}</span>
                  <h3 className="fe-project-name">{project.name}</h3>
                  <p className="fe-project-description">{project.description}</p>
                  <div className="fe-project-results">
                    {project.results.map((result, i) => (
                      <span key={i} className="fe-project-result">
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

      {/* Why Choose Us */}
      <section className="fe-why">
        <div className="fe-container">
          <div className="fe-why-grid">
            <div className="fe-why-content">
              <span className="fe-section-label">Why Choose Us</span>
              <h2 className="fe-section-title">The Magnax Advantage</h2>
              
              <div className="fe-why-list">
                {[
                  { title: 'Modern Stack', desc: 'We stay current with the latest frontend technologies and best practices' },
                  { title: 'Performance First', desc: 'Core Web Vitals optimization for speed, accessibility, and SEO' },
                  { title: 'Component Libraries', desc: 'Custom design systems and reusable component architectures' },
                  { title: 'Testing Coverage', desc: 'Unit, integration, and E2E testing for reliable applications' }
                ].map((item, idx) => (
                  <div key={idx} className="fe-why-item">
                    <div className="fe-why-number">0{idx + 1}</div>
                    <div className="fe-why-text">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fe-why-visual">
              <div className="fe-code-window">
                <div className="fe-code-header">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fe-code-title">App.tsx</span>
                </div>
                <pre className="fe-code-content">
                  <code>{`import { Component } from 'react';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};`}</code>
                </pre>
                <div className="fe-code-cursor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="fe-testimonials">
        <div className="fe-container">
          <div className="fe-section-header">
            <span className="fe-section-label">Testimonials</span>
            <h2 className="fe-section-title">Client Feedback</h2>
          </div>
          
          <div className="fe-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="fe-testimonial-card">
                <Quote className="fe-testimonial-quote" size={32} />
                <p className="fe-testimonial-text">{testimonial.quote}</p>
                <div className="fe-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="fe-testimonial-name">{testimonial.author}</div>
                    <div className="fe-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fe-cta">
        <div className="fe-container">
          <div className="fe-cta-box">
            <div className="fe-cta-glow" />
            <h2 className="fe-cta-title">Ready to Build Something Amazing?</h2>
            <p className="fe-cta-description">
              Let's discuss how our frontend expertise can bring your vision to life
            </p>
            <div className="fe-cta-buttons">
              <a href="#contact" className="fe-btn fe-btn-primary fe-btn-lg">
                Get Started
                <ArrowRight className="fe-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="fe-btn fe-btn-outline">
                Call Us: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FrontendTechnologies;