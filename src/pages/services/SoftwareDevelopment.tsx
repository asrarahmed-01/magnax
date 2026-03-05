import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, 
  Rocket, 
  Users, 
  Zap, 
  Shield, 
  LineChart,
  ArrowRight,
  Quote,
  Sparkles,
  Terminal,
  Box,
  Cpu,
  Globe
} from 'lucide-react';
import './SoftwareDevelopment.scss';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: 'Software Development', label: 'Software Development', icon: Code2, description: 'Custom-built solutions that fit your business operations and business processes. We build software that accelerates your business, from idea to launch.'
  },
  {
    id: 'MVP Development', label: 'MVP Solutions', icon: Rocket, description: 'Rapid validation of your product idea with market-ready minimum viable products. We rapidly develop working prototypes that validate and test your ideas.'
  },
];

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI/ML' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'SQL', category: 'Database' },
  { name: 'Java', category: 'Language' },
  { name: 'React Native', category: 'Mobile' },
];

const softwareFeatures = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Custom-built solutions that fit your business operations and business processes',
    description2: 'We build software that accelerates your business, from idea to launch.'
  },
  {
    icon: Shield,
    title: 'Enterprise Solutions',
    description: 'Scalable, secure, and powerful applications for large enterprises.',
    description2: 'Enterprise-ready applications that run on enterprise-grade security.'
  },
  {
    icon: Zap,
    title: 'System Integration',
    description: 'Integrate legacy systems with new APIs and microservices architecture.',
    description2: 'We make all systems talk to each other.'
  },
  {
    icon: LineChart,
    title: 'Legacy Modernization',
    description: 'Modernize legacy systems with cloud-native, microservices applications seamlessly.',
    description2: 'Upgrade your legacy systems without losing the business value.'
  },
];

const mvpFeatures = [
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'Click through prototype in weeks, not months. Validate your ideas.',
    description2: 'We rapidly develop working prototypes that validate and test your ideas.'
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Development from day 1 meant for user testing and iterations',
    description2: 'We strive for an experience that your product MVP is centered around users.'
  },
  {
    icon: Zap,
    title: 'Speed to Market',
    description: 'MVP in 4-8 weeks, lose no time to market, we help you win the market share.',
    description2: 'Fast and agile development techniques help us deliver quicker than the competition.'
  },
  {
    icon: LineChart,
    title: 'Scalable Architecture',
    description: 'Your MVP should start small and grow from there. We help you build an MVP that can handle millions of users.',
    description2: 'We understand the needs of building MVPs that can grow with no limits.'
  },
];



const testimonials = [
  {
    quote: "They transformed our vision into a working product in record time. The MVP helped us secure our Series A funding.",
    author: "Sarah Chen",
    role: "CEO, EduSpark",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    quote: "The team's technical expertise and commitment to quality is unmatched. Our platform handles millions of transactions flawlessly.",
    author: "Michael Torres",
    role: "CTO, TechVenture Inc.",
    image: "/images/testimonials/michael.jpg",
  },
  {
    quote: "From idea to launch in 8 weeks. They understood our market and delivered beyond expectations.",
    author: "David Kim",
    role: "Founder, GreenEnergy Co.",
    image: "/images/testimonials/david.jpg",
  },
];

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'MVPs Launched' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '6+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Code2, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Terminal, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Box, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Zap, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Cpu, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Globe, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function SoftwareDevelopment() {
  const heroRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.sd-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.sd-float-icon', {
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
        '.sd-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.sd-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech stack animation
      gsap.fromTo(
        '.sd-tech-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.sd-tech-stack',
            start: 'top 80%',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        '.sd-feature-card',
        { y: 40, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.sd-features-grid',
            start: 'top 75%',
          },
        }
      );

      // Client cards animation
      gsap.fromTo(
        '.sd-client-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: clientsRef.current,
            start: 'top 75%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.sd-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.sd-testimonials',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);



  return (
    <div className="sd-page">
      {/* Hero Section */}
      <section ref={heroRef} className="sd-hero">
        <div className="sd-hero-bg">
          <div className="sd-hero-grid" />
          <div className="sd-hero-orb sd-orb-1" />
          <div className="sd-hero-orb sd-orb-2" />
          <div className="sd-hero-orb sd-orb-3" />
          <div className="sd-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="sd-particle" />
            ))}
          </div>
          {/* <div className="sd-scan-line" /> */}
        </div>
        
        <div className="sd-container">
          <div className="sd-hero-content">
            {/* Floating Elements */}
            <div className="sd-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="sd-float-icon"
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

            <div className="sd-hero-badge">
              <span className="sd-hero-dot" />
              <Sparkles size={14} />
              Our Services
            </div>
            
            <h1 className="sd-hero-title">
              Software Development &<br />
              MVP Solutions
            </h1>
            
            <p className="sd-hero-description">
              From concept to market-ready product, we build custom software solutions 
              that drive growth. Whether you need a full-scale enterprise platform 
              or a rapid MVP to validate your idea, our expert team delivers excellence.
            </p>
            
            <div className="sd-hero-cta">
              <a href="/contact" className="sd-btn sd-btn-primary">
                Start Your Project
                <ArrowRight className="sd-btn-icon" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="sd-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="sd-stat-item">
                  <span className="sd-stat-value">{stat.value}</span>
                  <span className="sd-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="sd-tech-stack">
        <div className="sd-container">
          <div className="sd-section-header">
            <span className="sd-section-label">Technology Stack</span>
            <h2 className="sd-section-title">Technologies We Master</h2>
            <p className="sd-section-subtitle">
              Modern tools and frameworks for scalable solutions
            </p>
          </div>
          <div className="sd-tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="sd-tech-item">
                <div className="sd-tech-shine" />
                <span className="sd-tech-name">{tech.name}</span>
                <span className="sd-tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section id="software-development" className="sd-service sd-service-software software-development">
        <div className="sd-container">
          <div className="sd-section-header">
            {/* <div className="sd-service-badge sd-service-badge-software">
              <Code2 size={28} />
            </div> */}
            <h2 className="sd-section-title">Custom Software Development</h2>
            <p className="sd-section-subtitle">
              End-to-end development of scalable, secure, and high-performance software solutions
            </p>
          </div>

          <div className="sd-features-grid">
            {softwareFeatures.map((feature, index) => (
              <div key={index} className="sd-feature-card sd-feature-card-software">
                <div className="sd-feature-icon sd-feature-icon-software">
                  <feature.icon size={28} />
                </div>
                <h3 className="sd-feature-title">{feature.title}</h3>
                <p className="sd-feature-description">{feature.description}</p>
                 <p className="sd-feature-description2">{feature.description2}</p>
                <div className="sd-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MVP Development Section */}
      <section id="mvp-development" className="sd-service sd-service-mvp">
        <div className="sd-container">
          <div className="sd-section-header">
            <div className="sd-service-badge sd-service-badge-mvp">
              <Rocket size={28} />
            </div>
            <h2 className="sd-section-title">MVP Development</h2>
            <p className="sd-section-subtitle">
              Rapid validation of your product idea with market-ready minimum viable products
            </p>
          </div>

          <div className="sd-features-grid">
            {mvpFeatures.map((feature, index) => (
              <div key={index} className="sd-feature-card sd-feature-card-mvp">
                <div className="sd-feature-icon sd-feature-icon-mvp">
                  <feature.icon size={28} />
                </div>
                <h3 className="sd-feature-title">{feature.title}</h3>
                <p className="sd-feature-description">{feature.description}</p>
                 <p className="sd-feature-description2">{feature.description2}</p>
                <div className="sd-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sd-testimonials">
        <div className="sd-container">
          <div className="sd-section-header">
            <span className="sd-section-label">Testimonials</span>
            <h2 className="sd-section-title">What Our Clients Say</h2>
          </div>
          <div className="sd-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="sd-testimonial-card">
                <Quote className="sd-testimonial-quote" size={32} />
                <p className="sd-testimonial-text">{testimonial.quote}</p>
                <div className="sd-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="sd-testimonial-name">{testimonial.author}</div>
                    <div className="sd-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sd-cta">
        <div className="sd-container">
          <div className="sd-cta-box">
            <div className="sd-cta-glow" />
            <h2 className="sd-cta-title">Ready to Build Your Next Big Thing?</h2>
            <p className="sd-cta-description">
              Let's discuss how we can turn your vision into reality. 
              From MVPs to enterprise solutions, we've got you covered.
            </p>
            <div className="sd-cta-buttons">
              <a href="#contact" className="sd-btn sd-btn-primary sd-btn-lg">
                Schedule a Consultation
                <ArrowRight className="sd-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="sd-btn sd-btn-outline">
                Call Us: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoftwareDevelopment;