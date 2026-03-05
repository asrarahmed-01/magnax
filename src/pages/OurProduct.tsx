import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Smartphone, 
  GraduationCap, 
  Users, 
  BookOpen, 
  LayoutDashboard,
  Bell,
  ShieldCheck,
  TrendingUp,
  CalendarCheck,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Quote,
  Sparkles,
  //Zap,
  Globe,
  Award,
  Play,
  Download,
  Star,
  Cpu,
  Lock,
  Clock
} from 'lucide-react';
import './OurProduct.scss';

gsap.registerPlugin(ScrollTrigger);

const studentFeatures = [
  { icon: BookOpen, text: "Course access & learning materials" },
  { icon: CalendarCheck, text: "Attendance tracking" },
  { icon: FileText, text: "Exam results & progress reports" },
];

const teacherFeatures = [
  { icon: Users, text: "Class management" },
  { icon: CalendarCheck, text: "Attendance & grading" },
  { icon: TrendingUp, text: "Student performance tracking" },
];

const parentFeatures = [
  { icon: TrendingUp, text: "Student progress monitoring" },
  { icon: Bell, text: "Notifications & announcements" },
  { icon: FileText, text: "Attendance & academic updates" },
];

const adminFeatures = [
  { icon: Users, text: "User management" },
  { icon: BarChart3, text: "Reports & analytics" },
  { icon: CalendarCheck, text: "Scheduling & academic planning" },
];

const benefits = [
  { icon: Smartphone, title: "Mobile-first convenience", desc: "Access everything on the go" },
  { icon: Bell, title: "Real-time updates", desc: "Instant alerts & notifications" },
  { icon: Users, title: "Improved engagement", desc: "Better transparency for all" },
  { icon: ShieldCheck, title: "Secure data handling", desc: "Enterprise-grade security" },
  { icon: LayoutDashboard, title: "Scalable solution", desc: "Fits any institution size" },
];

const testimonials = [
  {
    quote: "DREMS transformed how we manage our school. Parents are more engaged than ever.",
    author: "Dr. Sarah Johnson",
    role: "Principal, Lincoln High School",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    quote: "The attendance tracking alone saved us 20 hours of manual work per week.",
    author: "Michael Chen",
    role: "Admin Director, Global Academy",
    image: "/images/testimonials/michael.jpg"
  },
  {
    quote: "Finally, a system that actually works for teachers, not against them.",
    author: "Emma Rodriguez",
    role: "Head Teacher, Westside Elementary",
    image: "/images/testimonials/emma.jpg"
  }
];

const heroStats = [
  { value: '500+', label: 'Institutions' },
  { value: '1M+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9', label: 'App Rating' }
];

const floatingIcons = [
  { Icon: GraduationCap, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: BookOpen, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Users, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Award, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Bell, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Sparkles, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function OurProduct() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(
        '.drems-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.drems-float-icon', {
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

      // Phone mockup animation
      gsap.fromTo(
        '.drems-phone-container',
        { y: 100, opacity: 0, rotateY: -15 },
        { 
          y: 0, 
          opacity: 1, 
          rotateY: 0,
          duration: 1.2, 
          ease: 'power3.out',
          delay: 0.3 
        }
      );

      // Stats animation
      gsap.fromTo(
        '.drems-hero-stat',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: 'back.out(1.7)'
        }
      );

      // Feature cards animation
      gsap.fromTo(
        '.drems-feature-card',
        { y: 40, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%',
          },
        }
      );

      // Benefits animation
      gsap.fromTo(
        '.drems-benefit-item',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.drems-benefits',
            start: 'top 80%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.drems-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.drems-testimonials',
            start: 'top 75%',
          },
        }
      );

      // Phone screen content animation
      gsap.to('.drems-phone-screen-content', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="drems-page">
      {/* Hero Section - Completely Redesigned */}
      <section ref={heroRef} className="drems-hero">
        <div className="drems-hero-bg">
          <div className="drems-hero-grid" />
          <div className="drems-hero-orb drems-orb-1" />
          <div className="drems-hero-orb drems-orb-2" />
          <div className="drems-hero-orb drems-orb-3" />
          <div className="drems-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="drems-particle" />
            ))}
          </div>
          {/* <div className="drems-scan-line" /> */}
        </div>
        
        <div className="drems-container">
          <div className="drems-hero-wrapper">
            <div className="drems-hero-content">
              {/* Floating Elements */}
              <div className="drems-floating-elements">
                {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                  <div 
                    key={idx} 
                    className="drems-float-icon"
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

              <div className="drems-hero-badge">
                <span className="drems-hero-dot" />
                <Sparkles size={14} />
                Education Reimagined
              </div>
              
              <h1 className="drems-hero-title">
                DREMS<br />
                <span className="drems-gradient-text">Digital Campus</span>
              </h1>
              
              <p className="drems-hero-description">
                The next-generation education management system that connects students, 
                teachers, parents, and administrators in one seamless digital ecosystem. 
                Experience real-time collaboration, intelligent analytics, and 
                institutional excellence.
              </p>

              <div className="drems-hero-info">
                <div className="drems-info-item">
                  <Cpu size={18} />
                  <span>AI-Powered Insights</span>
                </div>
                <div className="drems-info-item">
                  <Lock size={18} />
                  <span>Bank-Grade Security</span>
                </div>
                <div className="drems-info-item">
                  <Clock size={18} />
                  <span>24/7 Support</span>
                </div>
              </div>
              
              <div className="drems-hero-cta">
                <a href="#contact" className="drems-btn drems-btn-primary">
                  <Play size={18} />
                  Watch Demo
                </a>
                <a href="#features" className="drems-btn drems-btn-secondary">
                  <Download size={18} />
                  Download App
                </a>
              </div>

              {/* Hero Stats */}
              <div className="drems-hero-stats">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="drems-hero-stat">
                    <span className="drems-stat-value">{stat.value}</span>
                    <span className="drems-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Phone Mockup */}
            <div className="drems-phone-container" ref={phoneRef}>
              <div className="drems-phone-glow" />
              <div className="drems-phone-mockup">
                <div className="drems-phone-notch" />
                <div className="drems-phone-screen">
                  <div className="drems-phone-header">
                    <div className="drems-phone-status">
                      <span>9:41</span>
                      <div className="drems-phone-icons">
                        <span className="drems-signal" />
                        <span className="drems-wifi" />
                        <span className="drems-battery" />
                      </div>
                    </div>
                  </div>
                  <div className="drems-phone-screen-content">
                    <div className="drems-phone-card drems-profile-card">
                      <div className="drems-phone-avatar" />
                      <div className="drems-phone-info">
                        <div className="drems-phone-name">Welcome back, Alex</div>
                        <div className="drems-phone-subtitle">Computer Science • Year 3</div>
                      </div>
                      <div className="drems-phone-badge">Pro</div>
                    </div>
                    
                    <div className="drems-phone-stats">
                      <div className="drems-phone-stat">
                        <span className="drems-stat-num">85%</span>
                        <span className="drems-stat-text">Attendance</span>
                      </div>
                      <div className="drems-phone-stat">
                        <span className="drems-stat-num">3.8</span>
                        <span className="drems-stat-text">GPA</span>
                      </div>
                    </div>

                    <div className="drems-phone-card drems-course-card">
                      <div className="drems-course-icon">
                        <BookOpen size={20} />
                      </div>
                      <div className="drems-course-info">
                        <div className="drems-course-title">Data Structures</div>
                        <div className="drems-course-time">Today, 10:00 AM</div>
                      </div>
                      <div className="drems-course-arrow">→</div>
                    </div>

                    <div className="drems-phone-menu">
                      <div className="drems-menu-item active">
                        <LayoutDashboard size={20} />
                        <span>Home</span>
                      </div>
                      <div className="drems-menu-item">
                        <CalendarCheck size={20} />
                        <span>Schedule</span>
                      </div>
                      <div className="drems-menu-item">
                        <FileText size={20} />
                        <span>Grades</span>
                      </div>
                      <div className="drems-menu-item">
                        <Users size={20} />
                        <span>Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="drems-phone-reflection" />
              </div>
              <div className="drems-phone-float-card drems-float-1">
                <Bell size={16} />
                <span>New Assignment</span>
              </div>
              <div className="drems-phone-float-card drems-float-2">
                <Star size={16} />
                <span>A+ Grade!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Info */}
      <section className="drems-platform">
        <div className="drems-container">
          <div className="drems-platform-grid">
            <div className="drems-platform-card">
              <Smartphone size={32} />
              <div>
                <h4>Platform</h4>
                <p>Android & iOS Native Apps</p>
              </div>
            </div>
            <div className="drems-platform-card">
              <Globe size={32} />
              <div>
                <h4>Deployment</h4>
                <p>Cloud & On-Premise</p>
              </div>
            </div>
            <div className="drems-platform-card">
              <ShieldCheck size={32} />
              <div>
                <h4>Compliance</h4>
                <p>GDPR & FERPA Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} id="features" className="drems-features-section">
        <div className="drems-container">
          <div className="drems-section-header">
            <span className="drems-section-label">Capabilities</span>
            <h2 className="drems-section-title">Core Features</h2>
            <p className="drems-section-subtitle">
              Tailored solutions for every stakeholder in your institution
            </p>
          </div>

          <div className="drems-features-grid">
            {/* Students */}
            <div className="drems-feature-card drems-student">
              <div className="drems-feature-shine" />
              <div className="drems-feature-header">
                <div className="drems-feature-icon-wrapper">
                  <GraduationCap size={28} />
                </div>
                <h4>For Students</h4>
              </div>
              <ul className="drems-feature-list">
                {studentFeatures.map((feature, idx) => (
                  <li key={idx}>
                    <feature.icon size={18} />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Teachers */}
            <div className="drems-feature-card drems-teacher">
              <div className="drems-feature-shine" />
              <div className="drems-feature-header">
                <div className="drems-feature-icon-wrapper">
                  <BookOpen size={28} />
                </div>
                <h4>For Teachers</h4>
              </div>
              <ul className="drems-feature-list">
                {teacherFeatures.map((feature, idx) => (
                  <li key={idx}>
                    <feature.icon size={18} />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Parents */}
            <div className="drems-feature-card drems-parent">
              <div className="drems-feature-shine" />
              <div className="drems-feature-header">
                <div className="drems-feature-icon-wrapper">
                  <Users size={28} />
                </div>
                <h4>For Parents</h4>
              </div>
              <ul className="drems-feature-list">
                {parentFeatures.map((feature, idx) => (
                  <li key={idx}>
                    <feature.icon size={18} />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Administration */}
            <div className="drems-feature-card drems-admin">
              <div className="drems-feature-shine" />
              <div className="drems-feature-header">
                <div className="drems-feature-icon-wrapper">
                  <LayoutDashboard size={28} />
                </div>
                <h4>For Administration</h4>
              </div>
              <ul className="drems-feature-list">
                {adminFeatures.map((feature, idx) => (
                  <li key={idx}>
                    <feature.icon size={18} />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="drems-benefits">
        <div className="drems-container">
          <div className="drems-section-header">
            <span className="drems-section-label">Advantages</span>
            <h2 className="drems-section-title">Key Benefits</h2>
            <p className="drems-section-subtitle">
              Why institutions choose DREMS
            </p>
          </div>

          <div className="drems-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div className="drems-benefit-item" key={idx}>
                <div className="drems-benefit-icon">
                  <benefit.icon size={28} />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DREMS Section */}
      <section className="drems-why">
        <div className="drems-container">
          <div className="drems-why-grid">
            <div className="drems-why-content">
              <span className="drems-section-label">Why Choose Us</span>
              <h2 className="drems-section-title">The DREMS Advantage</h2>
              <ul className="drems-why-list">
                <li>
                  <CheckCircle2 className="drems-why-check" size={20} />
                  <div>
                    <strong>Easy Interface</strong>
                    <p>Intuitive design requiring minimal training for all users</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="drems-why-check" size={20} />
                  <div>
                    <strong>Personalized Access</strong>
                    <p>Role-based dashboards for students, parents, teachers, and admins</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="drems-why-check" size={20} />
                  <div>
                    <strong>Data Security</strong>
                    <p>Enterprise-grade encryption and compliance with educational standards</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="drems-why-check" size={20} />
                  <div>
                    <strong>Cost Saving</strong>
                    <p>Reduce administrative overhead and paper-based processes</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="drems-why-check" size={20} />
                  <div>
                    <strong>SMS & Email Integration</strong>
                    <p>Automated notifications keep everyone informed instantly</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="drems-why-check" size={20} />
                  <div>
                    <strong>Multi-User Friendly</strong>
                    <p>Handles thousands of concurrent users without performance issues</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="drems-why-visual">
              <div className="drems-dashboard-preview">
                <div className="drems-dashboard-header">
                  <div className="drems-dashboard-avatar" />
                  <div className="drems-dashboard-info">
                    <div className="drems-dashboard-title">Admin Dashboard</div>
                    <div className="drems-dashboard-status">
                      <span className="drems-status-dot" />
                      Live Data
                    </div>
                  </div>
                </div>
                <div className="drems-dashboard-stats">
                  <div className="drems-dstat">
                    <span className="drems-dstat-value">2,847</span>
                    <span className="drems-dstat-label">Students</span>
                  </div>
                  <div className="drems-dstat">
                    <span className="drems-dstat-value">156</span>
                    <span className="drems-dstat-label">Teachers</span>
                  </div>
                  <div className="drems-dstat">
                    <span className="drems-dstat-value">98%</span>
                    <span className="drems-dstat-label">Attendance</span>
                  </div>
                </div>
                <div className="drems-dashboard-chart">
                  <div className="drems-chart-bars">
                    <div className="drems-bar" style={{ height: '60%' }} />
                    <div className="drems-bar" style={{ height: '80%' }} />
                    <div className="drems-bar" style={{ height: '45%' }} />
                    <div className="drems-bar" style={{ height: '90%' }} />
                    <div className="drems-bar" style={{ height: '70%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="drems-testimonials">
        <div className="drems-container">
          <div className="drems-section-header">
            <span className="drems-section-label">Testimonials</span>
            <h2 className="drems-section-title">Client Feedback</h2>
            <p className="drems-section-subtitle">
              What educational leaders say about DREMS
            </p>
          </div>
          <div className="drems-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="drems-testimonial-card">
                <Quote className="drems-testimonial-quote-icon" size={32} />
                <p className="drems-testimonial-text">{testimonial.quote}</p>
                <div className="drems-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="drems-testimonial-name">{testimonial.author}</div>
                    <div className="drems-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="drems-cta">
        <div className="drems-container">
          <div className="drems-cta-box">
            <div className="drems-cta-glow" />
            <h2 className="drems-cta-title">Ready to Transform Your Institution?</h2>
            <p className="drems-cta-description">
              Join hundreds of schools, colleges, and universities already using DREMS 
              to streamline their educational management.
            </p>
            <div className="drems-cta-buttons">
              <a href="#contact" className="drems-btn drems-btn-primary drems-btn-lg">
                Schedule Demo
                <ArrowRight className="drems-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="drems-btn drems-btn-outline">
                Call: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurProduct;