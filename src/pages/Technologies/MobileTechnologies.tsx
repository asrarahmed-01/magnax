import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Smartphone, 
  Tablet, 
  Zap, 
  Palette,
  ArrowRight,
  CheckCircle2,
  Quote,
  Wifi,
  Bell,
  MapPin,
  Camera,
  Sparkles,
  Play,
  Star,
  Box,
  Cpu, 
} from 'lucide-react';
import './MobileTechnologies.scss';

gsap.registerPlugin(ScrollTrigger);

const mobileTech = [
  {
    name: 'Flutter',
    category: 'Cross-Platform',
    description: 'Google\'s UI toolkit for building beautiful, natively compiled applications from a single codebase.',
    features: ['Hot Reload', 'Widget Library', 'Dart Language', 'Native Performance']
  },
  {
    name: 'iOS',
    category: 'Native',
    description: 'Native iPhone and iPad applications built with Swift and SwiftUI for optimal Apple ecosystem integration.',
    features: ['Swift', 'SwiftUI', 'UIKit', 'Core Data']
  },
  {
    name: 'Android',
    category: 'Native',
    description: 'Native Android apps with Kotlin and Jetpack Compose for modern, responsive mobile experiences.',
    features: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Room Database']
  },
  {
    name: 'React Native',
    category: 'Cross-Platform',
    description: 'Build native apps using React. Share code between iOS and Android while maintaining native performance.',
    features: ['Native Modules', 'Expo', 'Hermes Engine', 'Code Push']
  },
  {
    name: 'Xamarin',
    category: 'Cross-Platform',
    description: 'Microsoft\'s framework for building native apps with C# and .NET across iOS, Android, and Windows.',
    features: ['C# & .NET', 'Native UI', 'Shared Code', 'Visual Studio']
  }
];

const capabilities = [
  {
    icon: Wifi,
    title: 'Offline Functionality',
    description: 'Apps that work without internet with smart data synchronization.'
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Engage users with targeted notifications and in-app messaging.'
  },
  {
    icon: MapPin,
    title: 'Location Services',
    description: 'GPS tracking, geofencing, and location-based features.'
  },
  {
    icon: Camera,
    title: 'Camera & Media',
    description: 'Photo/video capture, editing, and AR experiences.'
  },
  {
    icon: Zap,
    title: 'Bluetooth & NFC',
    description: 'Connect with wearables, IoT devices, and contactless payments.'
  },
  {
    icon: Palette,
    title: 'Biometric Auth',
    description: 'Face ID, fingerprint, and secure authentication methods.'
  }
];

const projects = [
  {
    name: 'Fitness Tracker',
    client: 'FitLife',
    tech: 'Flutter',
    description: 'Cross-platform fitness app with 10M+ downloads and wearable integration.',
    results: ['10M+ downloads', '4.8★ rating', '5+ wearables supported'],
    image: '/images/projects/fitness-app.jpg'
  },
  {
    name: 'Banking App',
    client: 'SecureBank',
    tech: 'iOS & Android',
    description: 'Native banking apps with biometric security and real-time transactions.',
    results: ['2M+ users', 'Face ID login', '99.99% secure'],
    image: '/images/projects/mobile-banking.jpg'
  },
  {
    name: 'Delivery Platform',
    client: 'QuickDelivery',
    tech: 'React Native',
    description: 'Real-time delivery tracking app for drivers and customers.',
    results: ['1M+ drivers', 'Real-time tracking', '30% faster delivery'],
    image: '/images/projects/delivery-app.jpg'
  },
  {
    name: 'Healthcare Monitor',
    client: 'MediCare',
    tech: 'Xamarin',
    description: 'Patient monitoring app integrated with medical devices.',
    results: ['HIPAA compliant', '50k+ patients', 'FDA approved'],
    image: '/images/projects/healthcare-app.jpg'
  }
];

const testimonials = [
  {
    quote: "Our Flutter app looks and feels native on both platforms. Development was incredibly fast.",
    author: "Jessica Lee",
    role: "Product Manager, FitLife",
    image: "/images/testimonials/jessica.jpg"
  },
  {
    quote: "The native iOS app they built set a new standard for mobile banking in our industry.",
    author: "Mark Thompson",
    role: "Digital Director, SecureBank",
    image: "/images/testimonials/mark.jpg"
  },
  {
    quote: "React Native let us launch on both platforms simultaneously with a small team.",
    author: "Ana Rodriguez",
    role: "CTO, QuickDelivery",
    image: "/images/testimonials/ana.jpg"
  }
];

const stats = [
  { value: '50M+', label: 'App Downloads' },
  { value: '4.8★', label: 'Avg Rating' },
  { value: '100+', label: 'Apps Shipped' },
  { value: '5+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Smartphone, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Tablet, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Box, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Zap, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Camera, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Cpu, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function MobileTechnologies() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.mo-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.mo-float-icon', {
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
        '.mo-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.mo-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech cards animation with 3D tilt
      gsap.fromTo(
        '.mo-tech-card',
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
        '.mo-capability-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.mo-capabilities',
            start: 'top 80%',
          },
        }
      );

      // Projects animation
      gsap.fromTo(
        '.mo-project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.mo-projects',
            start: 'top 75%',
          },
        }
      );

      // Process section animation
      gsap.fromTo(
        '.mo-process-step',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.mo-process',
            start: 'top 70%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.mo-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.mo-testimonials',
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
    <div className="mo-page">
      {/* Hero Section */}
      <section ref={heroRef} className="mo-hero">
        <div className="mo-hero-bg">
          <div className="mo-hero-grid" />
          <div className="mo-hero-glow" ref={glowRef} />
          <div className="mo-hero-orb mo-orb-1" />
          <div className="mo-hero-orb mo-orb-2" />
          <div className="mo-hero-orb mo-orb-3" />
        </div>
        
        <div className="mo-container">
          <div className="mo-hero-content">
            {/* Floating Elements */}
            <div className="mo-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="mo-float-icon"
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

            <div className="mo-hero-badge">
              <span className="mo-hero-dot" />
              <Sparkles size={14} />
              Mobile Development
            </div>
            
            <h1 className="mo-hero-title">
              Build Apps<br />
              <span className="mo-gradient-text">Users Love</span>
            </h1>
            
            <p className="mo-hero-description">
              Create exceptional mobile experiences that users love. From native iOS and Android 
              to cross-platform solutions, we build apps that perform flawlessly on every device.
            </p>
            
            <div className="mo-hero-cta">
              <a href="#contact" className="mo-btn mo-btn-primary">
                Build Your App
                <ArrowRight className="mo-btn-icon" />
              </a>
              <a href="#tech" className="mo-btn mo-btn-secondary">
                <Play size={18} />
                Explore Platforms
              </a>
            </div>

            {/* Stats Bar */}
            <div className="mo-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="mo-stat-item">
                  <span className="mo-stat-value">{stat.value}</span>
                  <span className="mo-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} id="tech" className="mo-tech-section">
        <div className="mo-container">
          <div className="mo-section-header">
            <span className="mo-section-label">Technology Stack</span>
            <h2 className="mo-section-title">Mobile Platforms</h2>
            <p className="mo-section-subtitle">
              Native and cross-platform technologies for every use case
            </p>
          </div>

          <div className="mo-tech-grid">
            {mobileTech.map((tech, index) => (
              <div 
                key={index} 
                className="mo-tech-card"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                <div className="mo-tech-card-inner">
                  <div className="mo-tech-shine" />
                  <div className="mo-tech-header">
                    <div className="mo-tech-icon-wrapper">
                      <Smartphone size={32} />
                    </div>
                    <div className="mo-tech-meta">
                      <span className="mo-tech-category">{tech.category}</span>
                      <h3 className="mo-tech-name">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="mo-tech-description">{tech.description}</p>
                  <div className="mo-tech-features">
                    {tech.features.map((feature, i) => (
                      <span key={i} className="mo-tech-feature">
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
      <section className="mo-capabilities">
        <div className="mo-container">
          <div className="mo-section-header">
            <span className="mo-section-label">What We Do</span>
            <h2 className="mo-section-title">Native Capabilities</h2>
            <p className="mo-section-subtitle">
              Leverage full device potential with native features
            </p>
          </div>

          <div className="mo-capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="mo-capability-card">
                <div className="mo-capability-icon">
                  <cap.icon size={28} />
                </div>
                <h3 className="mo-capability-title">{cap.title}</h3>
                <p className="mo-capability-description">{cap.description}</p>
                <div className="mo-capability-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mo-projects">
        <div className="mo-container">
          <div className="mo-section-header">
            <span className="mo-section-label">Case Studies</span>
            <h2 className="mo-section-title">Featured Apps</h2>
            <p className="mo-section-subtitle">
              Mobile applications we've built for our clients
            </p>
          </div>

          <div className="mo-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="mo-project-card">
                <div className="mo-project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="mo-project-overlay" />
                  <span className="mo-project-tech">{project.tech}</span>
                </div>
                <div className="mo-project-content">
                  <span className="mo-project-client">{project.client}</span>
                  <h3 className="mo-project-name">{project.name}</h3>
                  <p className="mo-project-description">{project.description}</p>
                  <div className="mo-project-results">
                    {project.results.map((result, i) => (
                      <span key={i} className="mo-project-result">
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

      {/* Process Section */}
      <section className="mo-process">
        <div className="mo-container">
          <div className="mo-section-header">
            <span className="mo-section-label">Our Process</span>
            <h2 className="mo-section-title">From Concept to App Store</h2>
            <p className="mo-section-subtitle">
              Four steps to launch your mobile application
            </p>
          </div>

          <div className="mo-process-grid">
            {[
              { num: '01', title: 'Design & Prototype', desc: 'UI/UX design with interactive prototypes for user testing' },
              { num: '02', title: 'Development', desc: 'Agile sprints with continuous integration and testing' },
              { num: '03', title: 'QA & Optimization', desc: 'Rigorous testing, performance tuning, and device compatibility' },
              { num: '04', title: 'Launch & Support', desc: 'App Store submission, ASO, and ongoing maintenance' }
            ].map((step, idx) => (
              <div key={idx} className="mo-process-step">
                <div className="mo-process-number">{step.num}</div>
                <h3 className="mo-process-title">{step.title}</h3>
                <p className="mo-process-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mo-testimonials">
        <div className="mo-container">
          <div className="mo-section-header">
            <span className="mo-section-label">Testimonials</span>
            <h2 className="mo-section-title">Client Reviews</h2>
          </div>
          
          <div className="mo-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mo-testimonial-card">
                <Quote className="mo-testimonial-quote" size={32} />
                <p className="mo-testimonial-text">{testimonial.quote}</p>
                <div className="mo-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="mo-testimonial-name">{testimonial.author}</div>
                    <div className="mo-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mo-cta">
        <div className="mo-container">
          <div className="mo-cta-box">
            <div className="mo-cta-glow" />
            <h2 className="mo-cta-title">Ready to Go Mobile?</h2>
            <p className="mo-cta-description">
              Let's turn your app idea into reality. From concept to launch, 
              we'll guide you through every step of mobile development
            </p>
            <div className="mo-cta-buttons">
              <a href="#contact" className="mo-btn mo-btn-primary mo-btn-lg">
                Get Free Consultation
                <ArrowRight className="mo-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="mo-btn mo-btn-outline">
                Call Us: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileTechnologies;