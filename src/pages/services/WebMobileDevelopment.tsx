import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Zap, 
  Shield,
  ArrowRight,
  Quote,
  Monitor,
  Tablet,
  Layers,
  Wifi,
  Sparkles,
  Play,
  Star,
} from 'lucide-react';
import './WebMobileDevelopment.scss';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Development' },
];

const webTechStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind', category: 'CSS' },
  { name: 'GraphQL', category: 'API' },
  { name: 'AWS', category: 'Cloud' },
];

const mobileTechStack = [
  { name: 'React Native', category: 'Cross-Platform' },
  { name: 'Flutter', category: 'Cross-Platform' },
  { name: 'Swift', category: 'iOS' },
  { name: 'Kotlin', category: 'Android' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'SQLite', category: 'Database' },
  { name: 'Redux', category: 'State' },
  { name: 'Expo', category: 'Tools' },
];

const webFeatures = [
  {
    icon: Monitor,
    title: 'Responsive Web Design',
    description: 'Pixel-perfect websites that look stunning on every device, from mobile to desktop.',
    description2: 'Built with modern frameworks like React and Next.js for dynamic, interactive experiences.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times with optimized code, caching, and CDN delivery.',
    description2: 'We leverage modern build tools and optimization techniques to ensure your web applications are as fast as possible.',
  },
  {
    icon: Shield,
    title: 'Secure Architecture',
    description: 'Enterprise-grade security with HTTPS, authentication, and data protection.',
      description2: 'Our web applications are built with security best practices to protect your data and users.',
  },
  {
    icon: Palette,
    title: 'UI/UX Excellence',
    description: 'Intuitive interfaces designed for conversion and user satisfaction.',
    description2: 'Our design team creates beautiful, functional interfaces that delight users and drive engagement.',
  },
];

const mobileFeatures = [
  {
    icon: Smartphone,
    title: 'Native iOS & Android',
    description: 'Platform-specific apps built with Swift and Kotlin for optimal performance.',
    description2: 'We build apps that feel native to each platform, ensuring the best user experience.',
  },
  {
    icon: Tablet,
    title: 'Cross-Platform Solutions',
    description: 'Single codebase for iOS and Android with React Native or Flutter.',
    description2: 'We build apps that work seamlessly across multiple platforms, saving time and resources.',
  },
  {
    icon: Wifi,
    title: 'Offline Functionality',
    description: 'Apps that work without internet connection with smart sync capabilities.',
    description2: 'Our apps are designed to function offline, with intelligent sync capabilities that ensure data integrity.',
  },
  {
    icon: Layers,
    title: 'Seamless Integration',
    description: 'Deep integration with device features: camera, GPS, push notifications, and more.',
    description2: 'Our mobile apps integrate seamlessly with native device features to provide a richer user experience.',
  },
];

const webClients = [
  {
    name: 'ShopMax',
    industry: 'E-commerce',
    logo: '/images/clients/shopmax.svg',
    project: 'Enterprise E-commerce Platform',
    description: 'Scalable marketplace handling 100k+ daily transactions with real-time inventory.',
    results: ['99.99% uptime', '3x faster checkout', '40% conversion boost'],
    image: '/images/clients/shopmax-project.jpg',
    service: 'Web Development',
  },
  {
    name: 'FinanceHub',
    industry: 'FinTech',
    logo: '/images/clients/financehub.svg',
    project: 'Banking Dashboard',
    description: 'Real-time financial analytics platform serving 500k+ active users.',
    results: ['50ms load time', '2M+ users', '4.9/5 rating'],
    image: '/images/clients/financehub-project.jpg',
    service: 'Web Development',
  },
  {
    name: 'EduLearn',
    industry: 'EdTech',
    logo: '/images/clients/edulearn.svg',
    project: 'Learning Management System',
    description: 'Interactive LMS with video streaming, quizzes, and progress tracking.',
    results: ['1M+ students', '10k+ courses', '95% completion rate'],
    image: '/images/clients/edulearn-project.jpg',
    service: 'Web Development',
  },
  {
    name: 'HealthPlus',
    industry: 'Healthcare',
    logo: '/images/clients/healthplus.svg',
    project: 'Patient Portal',
    description: 'HIPAA-compliant portal for appointment booking and medical records.',
    results: ['500k+ patients', '60% less admin work', '4.8/5 satisfaction'],
    image: '/images/clients/healthplus-project.jpg',
    service: 'Web Development',
  },
];

const mobileClients = [
  {
    name: 'FitTrack',
    industry: 'Fitness',
    logo: '/images/clients/fittrack.svg',
    project: 'Fitness Tracking App',
    description: 'Cross-platform fitness app with workout tracking and nutrition planning.',
    results: ['5M+ downloads', '4.8★ rating', '2M active users'],
    image: '/images/clients/fittrack-project.jpg',
    service: 'Mobile Development',
  },
  {
    name: 'FoodFast',
    industry: 'Food Delivery',
    logo: '/images/clients/foodfast.svg',
    project: 'Delivery Driver App',
    description: 'Real-time delivery tracking app for 50k+ drivers across 30 cities.',
    results: ['50k+ drivers', '30% faster delivery', '99.5% accuracy'],
    image: '/images/clients/foodfast-project.jpg',
    service: 'Mobile Development',
  },
  {
    name: 'TravelEase',
    industry: 'Travel',
    logo: '/images/clients/travelease.svg',
    project: 'Travel Booking App',
    description: 'All-in-one travel app with booking, itinerary, and offline maps.',
    results: ['3M+ downloads', '1M bookings', '4.7★ rating'],
    image: '/images/clients/travelease-project.jpg',
    service: 'Mobile Development',
  },
  {
    name: 'PayQuick',
    industry: 'FinTech',
    logo: '/images/clients/payquick.svg',
    project: 'Mobile Wallet',
    description: 'Secure mobile payment solution with biometric authentication.',
    results: ['10M+ users', '$2B processed', 'Bank-grade security'],
    image: '/images/clients/payquick-project.jpg',
    service: 'Mobile Development',
  },
];

const testimonials = [
  {
    quote: "Our web platform loads in under a second. The team's attention to performance and user experience is exceptional.",
    author: "Jennifer Walsh",
    role: "CTO, ShopMax",
    image: "/images/testimonials/jennifer.jpg",
  },
  {
    quote: "The mobile app they built has a 4.8-star rating with over 5 million downloads. Best investment we ever made.",
    author: "Marcus Chen",
    role: "Founder, FitTrack",
    image: "/images/testimonials/marcus.jpg",
  },
  {
    quote: "Seamless experience from web to mobile. Our users love the consistent, beautiful interface across all devices.",
    author: "Amara Okafor",
    role: "Product Lead, TravelEase",
    image: "/images/testimonials/amara.jpg",
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '50M+', label: 'App Downloads' },
  { value: '4.8★', label: 'Avg Rating' },
  { value: '8+', label: 'Years Experience' }
];

const floatingIcons = [
  { Icon: Globe, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Smartphone, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Code, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Zap, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Monitor, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Layers, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function WebMobileDevelopment() {
  const heroRef = useRef<HTMLDivElement>(null);
  const webClientsRef = useRef<HTMLDivElement>(null);
  const mobileClientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.wm-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.wm-float-icon', {
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
        '.wm-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.wm-stats',
            start: 'top 85%',
          },
        }
      );

      // Tech stack animations
      gsap.fromTo(
        '.wm-tech-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.wm-tech-section',
            start: 'top 80%',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        '.wm-feature-card',
        { y: 40, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.wm-features-grid',
            start: 'top 75%',
          },
        }
      );

      // Client cards animations
      gsap.fromTo(
        '.wm-client-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: webClientsRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.wm-mobile-client-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: mobileClientsRef.current,
            start: 'top 75%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.wm-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.wm-testimonials',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="wm-page">
      {/* Hero Section */}
      <section ref={heroRef} className="wm-hero">
        <div className="wm-hero-bg">
          <div className="wm-hero-grid" />
          <div className="wm-hero-orb wm-orb-1" />
          <div className="wm-hero-orb wm-orb-2" />
          <div className="wm-hero-orb wm-orb-3" />
          <div className="wm-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="wm-particle" />
            ))}
          </div>
          {/* <div className="wm-scan-line" /> */}
        </div>
        
        <div className="wm-container">
          <div className="wm-hero-content">
            {/* Floating Elements */}
            <div className="wm-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="wm-float-icon"
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

            <div className="wm-hero-badge">
              <span className="wm-hero-dot" />
              <Sparkles size={14} />
              Digital Solutions
            </div>
            
            <h1 className="wm-hero-title">
              Web & Mobile<br />
             Development
            </h1>
            
            <p className="wm-hero-description">
              Create stunning digital experiences that engage users across every device. 
              From responsive websites to native mobile apps, we build solutions that 
              drive results and delight your customers.
            </p>
            
            <div className="wm-hero-cta">
              <a href="/contact" className="wm-btn wm-btn-primary">
                Start Your Project
                <ArrowRight className="wm-btn-icon" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="wm-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="wm-stat-item">
                  <span className="wm-stat-value">{stat.value}</span>
                  <span className="wm-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Web Tech Stack */}
      <section id="web-tech-stack" className="wm-tech-section wm-tech-web">
        <div className="wm-container">
          <div className="wm-section-header">
            <span className="wm-section-label">Web Technologies</span>
            <h2 className="wm-section-title">Web Stack</h2>
            <p className="wm-section-subtitle">
              Modern frameworks for scalable web applications
            </p>
          </div>

          <div className="wm-tech-grid">
            {webTechStack.map((tech, index) => (
              <div key={index} className="wm-tech-item wm-tech-item-web">
                <div className="wm-tech-shine" />
                <span className="wm-tech-name">{tech.name}</span>
                <span className="wm-tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="wm-service wm-service-web">
        <div className="wm-container">
          <div className="wm-section-header">
            <div className="wm-service-badge wm-service-badge-web">
              <Globe size={28} />
            </div>
            <h2 className="wm-section-title">Web Development</h2>
            <p className="wm-section-subtitle">
              Modern, responsive, and high-performance websites built with cutting-edge technologies
            </p>
          </div>

          <div className="wm-features-grid">
            {webFeatures.map((feature, index) => (
              <div key={index} className="wm-feature-card wm-feature-card-web">
                <div className="wm-feature-icon wm-feature-icon-web">
                  <feature.icon size={28} />
                </div>
                <h3 className="wm-feature-title">{feature.title}</h3>
                <p className="wm-feature-description">{feature.description}</p>
                <p className="wm-feature-description2">{feature.description2}</p>
                <div className="wm-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Clients */}
      {/* <section ref={webClientsRef} className="wm-clients wm-clients-web">
        <div className="wm-container">
          <div className="wm-section-header">
            <span className="wm-clients-label wm-clients-label-web">Web Development</span>
            <h2 className="wm-section-title">Featured Web Projects</h2>
          </div>
          <div className="wm-clients-grid">
            {webClients.map((client, index) => (
              <div key={index} className="wm-client-card">
                <div className="wm-client-image">
                  <img src={client.image} alt={client.project} />
                  <div className="wm-client-overlay" />
                  <span className="wm-client-service-tag wm-client-service-tag-web">{client.service}</span>
                </div>
                <div className="wm-client-content">
                  <span className="wm-client-industry">{client.industry}</span>
                  <h3 className="wm-client-project">{client.project}</h3>
                  <p className="wm-client-description">{client.description}</p>
                  <div className="wm-client-results">
                    {client.results.map((result, i) => (
                      <span key={i} className="wm-client-result wm-client-result-web">
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

      {/* Mobile Tech Stack */}
      <section className="wm-tech-section wm-tech-mobile">
        <div className="wm-container">
          <div className="wm-section-header">
            <span className="wm-section-label">Mobile Technologies</span>
            <h2 className="wm-section-title">Mobile Stack</h2>
            <p className="wm-section-subtitle">
              Native and cross-platform mobile solutions
            </p>
          </div>

          <div className="wm-tech-grid">
            {mobileTechStack.map((tech, index) => (
              <div key={index} className="wm-tech-item wm-tech-item-mobile">
                <div className="wm-tech-shine" />
                <span className="wm-tech-name">{tech.name}</span>
                <span className="wm-tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Development Section */}
      <section id="mobile-development" className="wm-service wm-service-mobile">
        <div className="wm-container">
          <div className="wm-section-header">
            <div className="wm-service-badge wm-service-badge-mobile">
              <Smartphone size={28} />
            </div>
            <h2 className="wm-section-title">Mobile Development</h2>
            <p className="wm-section-subtitle">
              Native and cross-platform mobile apps that deliver exceptional user experiences
            </p>
          </div>

          <div className="wm-features-grid">
            {mobileFeatures.map((feature, index) => (
              <div key={index} className="wm-feature-card wm-feature-card-mobile">
                <div className="wm-feature-icon wm-feature-icon-mobile">
                  <feature.icon size={28} />
                </div>
                <h3 className="wm-feature-title">{feature.title}</h3>
                <p className="wm-feature-description">{feature.description}</p>
                <p className="wm-feature-description2">{feature.description2}</p>
                <div className="wm-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Clients */}
      {/* <section ref={mobileClientsRef} className="wm-clients wm-clients-mobile">
        <div className="wm-container">
          <div className="wm-section-header">
            <span className="wm-clients-label wm-clients-label-mobile">Mobile Development</span>
            <h2 className="wm-section-title">Featured Mobile Apps</h2>
          </div>
          <div className="wm-clients-grid">
            {mobileClients.map((client, index) => (
              <div key={index} className="wm-client-card wm-mobile-client-card">
                <div className="wm-client-image">
                  <img src={client.image} alt={client.project} />
                  <div className="wm-client-overlay" />
                  <span className="wm-client-service-tag wm-client-service-tag-mobile">{client.service}</span>
                </div>
                <div className="wm-client-content">
                  <span className="wm-client-industry">{client.industry}</span>
                  <h3 className="wm-client-project">{client.project}</h3>
                  <p className="wm-client-description">{client.description}</p>
                  <div className="wm-client-results">
                    {client.results.map((result, i) => (
                      <span key={i} className="wm-client-result wm-client-result-mobile">
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

      {/* Testimonials */}
      <section className="wm-testimonials">
        <div className="wm-container">
          <div className="wm-section-header">
            <span className="wm-section-label">Testimonials</span>
            <h2 className="wm-section-title">Client Success Stories</h2>
          </div>
          <div className="wm-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="wm-testimonial-card">
                <Quote className="wm-testimonial-quote" size={32} />
                <p className="wm-testimonial-text">{testimonial.quote}</p>
                <div className="wm-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="wm-testimonial-name">{testimonial.author}</div>
                    <div className="wm-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wm-cta">
        <div className="wm-container">
          <div className="wm-cta-box">
            <div className="wm-cta-glow" />
            <h2 className="wm-cta-title">Ready to Go Digital?</h2>
            <p className="wm-cta-description">
              Whether you need a stunning website or a powerful mobile app, 
              we'll bring your vision to life with cutting-edge technology.
            </p>
            <div className="wm-cta-buttons">
              <a href="#contact" className="wm-btn wm-btn-primary wm-btn-lg">
                Get Free Consultation
                <ArrowRight className="wm-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="wm-btn wm-btn-outline">
                Call: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebMobileDevelopment;