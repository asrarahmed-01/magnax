import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Building2, 
  Wallet, 
  HeartPulse, 
  Users, 
  Gamepad2, 
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Filter,
  Sparkles,
  //Play,
  Briefcase,
  TrendingUp,
  Globe,
  Award,
  Zap
} from 'lucide-react';
import './KeyProjects.scss';

gsap.registerPlugin(ScrollTrigger);

const industries = ['All', 'Banking & Fintech', 'Healthcare', 'Staffing & Recruitment', 'Gaming & Entertainment', 'Media & Social'];

const projects = [
  {
    id: 1,
    title: 'Riyadh Bank – Digital Banking Solutions',
    industry: 'Banking & Fintech',
    icon: Building2,
    solution: 'Frontend UI/UX development for digital banking platform',
    description: 'We partnered with Riyadh Bank to design and develop a modern, high-performance frontend interface for their digital banking platform, focusing on intuitive user experience, responsive design, and seamless customer journeys across web and mobile devices.',
    highlights: [
      'Responsive and user-friendly UI design',
      'Real-time transaction display and notifications',
      'Secure session handling and authentication flows',
      'Optimized performance across devices and browsers'
    ],
    color: '#2b4dff',
    stats: { value: '40%', label: 'Faster Load Times' }
  },
  {
    id: 2,
    title: 'Western Union – Money Transfer Platform Enhancement',
    industry: 'Banking & Fintech',
    icon: Wallet,
    solution: 'Frontend & feature-level enhancements for money transfer systems',
    description: 'As part of a larger development team, we worked on enhancing core user-facing modules of Western Union\'s payment platform, delivering optimized interfaces and seamless transaction experiences that supported high-volume global transfers.',
    highlights: [
      'Development of high-traffic transaction UI modules',
      'Performance optimization for key customer flows',
      'Integration-ready frontend components',
      'API-driven architecture',
      'Improved usability and responsiveness'
    ],
    color: '#2b4dff',
    stats: { value: '99.9%', label: 'Uptime Achieved' }
  },
  {
    id: 3,
    title: 'Banfield Pet Hospital – Healthcare Management System',
    industry: 'Healthcare',
    icon: HeartPulse,
    solution: 'Clinic operations & patient care platform',
    description: 'We developed a comprehensive healthcare management solution for Banfield Pet Hospital to streamline appointments, patient records, billing, and staff coordination. The platform improved operational efficiency and enhanced the overall pet care experience.',
    highlights: [
      'Electronic medical records (EMR)',
      'Appointment scheduling system',
      'Billing & reporting dashboards'
    ],
    color: '#0a165e',
    stats: { value: '60%', label: 'Efficiency Gain' }
  },
  {
    id: 4,
    title: 'Golden Manpower International Consultants – Recruitment Portal',
    industry: 'Staffing & Recruitment',
    icon: Users,
    solution: 'Talent management & job placement platform',
    description: 'We built a secure digital system to manage candidate documents, contracts, and compliance records, helping Golden Manpower reduce manual paperwork and ensure faster processing for international placements.',
    highlights: [
      'Secure document storage',
      'Automated verification workflows',
      'Status tracking',
      'Reduced processing time'
    ],
    color: '#0a165e',
    stats: { value: '75%', label: 'Faster Processing' }
  },
  {
    id: 5,
    title: 'KBombay – Number Gaming Web App',
    industry: 'Gaming & Entertainment',
    icon: Gamepad2,
    solution: 'Mobile gaming application',
    description: 'KBombay is an engaging number-based gaming app designed to deliver fast-paced entertainment with secure gameplay and real-time scoring. The app offers smooth user experience, reward mechanisms, and scalable backend support.',
    highlights: [
      'Real-time gameplay logic',
      'Leaderboards & rewards system',
      'High-performance backend',
      'Mobile-first UI design'
    ],
    color: '#2b4dff',
    stats: { value: '50K+', label: 'Active Users' }
  },
  {
    id: 6,
    title: 'BIX Mobile App – Earn While You Engage',
    industry: 'Media & Social',
    icon: Smartphone,
    solution: 'Reward-based social engagement platform',
    description: 'BiX is an innovative mobile application that allows users to earn rewards by watching trending videos, creating content, sharing posts, and growing their social presence. The platform combines entertainment with monetization.',
    highlights: [
      'Video streaming & content creation tools',
      'Reward & wallet system',
      'Social networking features',
      'Secure payout integrations'
    ],
    color: '#0a165e',
    stats: { value: '100K+', label: 'Downloads' }
  }
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '15+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Countries Reached' }
];

const floatingIcons = [
  { Icon: Briefcase, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: TrendingUp, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Globe, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Award, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Zap, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Sparkles, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function KeyProjects() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterSticky, setIsFilterSticky] = useState(false);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.industry === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        setIsFilterSticky(rect.top <= 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.kp-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons
      gsap.to('.kp-float-icon', {
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
        '.kp-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.kp-stats',
            start: 'top 85%',
          },
        }
      );

      // Filter buttons animation
      gsap.fromTo(
        '.kp-filter-btn',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          scrollTrigger: {
            trigger: '.kp-filter-section',
            start: 'top 85%',
          },
        }
      );

      // Projects animation with flip effect
      gsap.fromTo(
        '.kp-project-card',
        { y: 60, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 75%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [activeFilter]);

  // Animate filter change
  useEffect(() => {
    gsap.fromTo(
      '.kp-project-card',
      { scale: 0.9, opacity: 0, y: 30 },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.08,
        ease: 'back.out(1.7)'
      }
    );
  }, [activeFilter]);

  return (
    <div className="kp-page">
      {/* Hero Section */}
      <section ref={heroRef} className="kp-hero">
        <div className="kp-hero-bg">
          <div className="kp-hero-grid" />
          <div className="kp-hero-orb kp-orb-1" />
          <div className="kp-hero-orb kp-orb-2" />
          <div className="kp-hero-orb kp-orb-3" />
          <div className="kp-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="kp-particle" />
            ))}
          </div>
          {/* <div className="kp-scan-line" /> */}
        </div>
        
        <div className="kp-container">
          <div className="kp-hero-content">
            {/* Floating Elements */}
            <div className="kp-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="kp-float-icon"
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

            <div className="kp-hero-badge">
              <span className="kp-hero-dot" />
              <Sparkles size={14} />
              Portfolio
            </div>
            
            <h1 className="kp-hero-title">
              Key Projects &<br />
              <span className="kp-gradient-text">Case Studies</span>
            </h1>
            
            <p className="kp-hero-description">
              Explore our portfolio of successful digital transformations across banking, 
              healthcare, fintech, and entertainment industries. Each project showcases 
              our commitment to delivering innovative, scalable, and user-centric solutions.
            </p>
            
            <div className="kp-hero-cta">
              <a href="#projects" className="kp-btn kp-btn-primary">
                View Projects
                <ArrowRight className="kp-btn-icon" />
              </a>
              <a href="#contact" className="kp-btn kp-btn-secondary">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="kp-stats">
        <div className="kp-container">
          <div className="kp-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="kp-stat-item">
                <span className="kp-stat-value">{stat.value}</span>
                <span className="kp-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Enhanced with Sticky and Glow Effects */}
      <section ref={filterRef} className={`kp-filter-section ${isFilterSticky ? 'kp-filter-sticky' : ''}`}>
        <div className="kp-container">
          <div className="kp-filter-wrapper">
            <div className="kp-filter-header">
              <div className="kp-filter-icon-wrapper">
                <Filter size={18} />
              </div>
              <span>Filter by Industry</span>
            </div>
            <div className="kp-filter-buttons">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className={`kp-filter-btn ${activeFilter === industry ? 'active' : ''}`}
                  onClick={() => setActiveFilter(industry)}
                >
                  <span className="kp-filter-text">{industry}</span>
                  {activeFilter === industry && (
                    <span className="kp-filter-glow" />
                  )}
                  <span className="kp-filter-particles">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="kp-filter-particle" />
                    ))}
                  </span>
                </button>
              ))}
            </div>
            <div className="kp-filter-active-indicator">
              <span className="kp-filter-count">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} id="projects" className="kp-projects">
        <div className="kp-container">
          <div className="kp-projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="kp-project-card"
                style={{ '--project-color': project.color } as React.CSSProperties}
              >
                <div className="kp-project-glow" />
                <div className="kp-project-content">
                  <div className="kp-project-header">
                    <div className="kp-project-icon-wrapper">
                      <project.icon size={32} />
                    </div>
                    <div className="kp-project-meta">
                      <span className="kp-project-industry">{project.industry}</span>
                      <div className="kp-project-stat">
                        <TrendingUp size={14} />
                        <span>{project.stats.value}</span>
                        <small>{project.stats.label}</small>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="kp-project-title">{project.title}</h3>
                  <p className="kp-project-solution">{project.solution}</p>
                  <p className="kp-project-description">{project.description}</p>
                  
                  <div className="kp-project-highlights">
                    <h4>Key Highlights</h4>
                    <ul>
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="kp-project-footer">
                    <button className="kp-project-btn">
                      <span>View Case Study</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <div className="kp-project-shine" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="kp-cta">
        <div className="kp-container">
          <div className="kp-cta-box">
            <div className="kp-cta-glow" />
            <h2 className="kp-cta-title">Ready to Build Your Next Success Story?</h2>
            <p className="kp-cta-description">
              Let's discuss how we can help transform your ideas into powerful digital solutions.
            </p>
            <div className="kp-cta-buttons">
              <a href="#contact" className="kp-btn kp-btn-primary kp-btn-lg">
                Start a Project
                <ArrowRight className="kp-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="kp-btn kp-btn-outline">
                Call: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KeyProjects;