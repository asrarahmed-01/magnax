import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  MessageSquare, 
  Award,
  Star,
  Quote,
  Sparkles,
  Trophy,
  Medal,
  Crown
} from 'lucide-react';
import './Recognition.scss';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'awards', label: 'Awards', icon: Award },
];

const testimonials = [
  {
    quote: "Magnax transformed our digital infrastructure completely. Their team's expertise and dedication exceeded all expectations.",
    author: "Ahmed Al-Rashid",
    role: "CTO, Riyadh Bank",
    image: "/images/testimonials/ahmed.jpg"
  },
  {
    quote: "The level of professionalism and technical competence is unmatched. They delivered our project ahead of schedule.",
    author: "Sarah Mitchell",
    role: "VP Engineering, Western Union",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    quote: "Working with Magnax felt like having an extended team. They truly understand healthcare technology.",
    author: "Dr. James Wilson",
    role: "Director, Banfield Pet Hospital",
    image: "/images/testimonials/james.jpg"
  },
  {
    quote: "Their agile approach and transparent communication made complex projects manageable and successful.",
    author: "Priya Sharma",
    role: "CEO, Golden Manpower",
    image: "/images/testimonials/priya.jpg"
  },
  {
    quote: "From concept to launch, Magnax provided invaluable guidance and exceptional development services.",
    author: "Kevin Zhang",
    role: "Founder, KBombay",
    image: "/images/testimonials/kevin.jpg"
  },
  {
    quote: "The BiX platform they built has revolutionized how we engage with our users. Outstanding work!",
    author: "Lisa Chen",
    role: "Product Lead, BiX",
    image: "/images/testimonials/lisa.jpg"
  }
];

const awards = [
  { year: '2024', title: 'Best IT Services Provider', org: 'Tech Excellence Awards', icon: Trophy },
  { year: '2024', title: 'Top Software Development Company', org: 'Clutch.co', icon: Star },
  { year: '2023', title: 'Innovation in Fintech', org: 'Global Banking & Finance', icon: Medal },
  { year: '2023', title: 'Great Place to Work', org: 'GPTW Institute', icon: Crown },
  { year: '2022', title: 'AWS Partner of the Year', org: 'Amazon Web Services', icon: Trophy },
  { year: '2022', title: 'Best Healthcare Solution', org: 'HealthTech Awards', icon: Star },
];

const floatingIcons = [
  { Icon: Trophy, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Star, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Medal, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Crown, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Award, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Sparkles, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function Recognition() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(
        '.recognition-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons
      gsap.to('.recognition-float-icon', {
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

      // Section animations
      gsap.fromTo(
        '.recognition-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.recognition-main',
            start: 'top 80%',
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(
        '.recognition-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.recognition-testimonials-grid',
            start: 'top 80%',
          },
        }
      );

      // Awards animation
      gsap.fromTo(
        '.recognition-award-item',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.recognition-awards-timeline',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string, index: number) => {
    setActiveSection(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="recognition-page">
      {/* Hero */}
      <section ref={heroRef} className="recognition-hero">
        <div className="recognition-hero-bg">
          <div className="recognition-hero-pattern" />
          <div className="recognition-hero-orb recognition-orb-1" />
          <div className="recognition-hero-orb recognition-orb-2" />
          <div className="recognition-hero-orb recognition-orb-3" />
          <div className="recognition-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="recognition-particle" />
            ))}
          </div>
        </div>
        
        <div className="recognition-container">
          <div className="recognition-hero-content">
            {/* Floating Elements */}
            <div className="recognition-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="recognition-float-icon"
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

            <div className="recognition-hero-label">
              <Sparkles size={14} />
              Excellence Recognized
            </div>
            
            <h1 className="recognition-hero-title">
              Recognition &<br />
              <span className="recognition-hero-highlight">Awards</span>
            </h1>
            
            <p className="recognition-hero-description">
              Our commitment to excellence has been recognized by industry leaders, 
              clients, and prestigious organizations worldwide. We're proud of the 
              trust placed in us and the accolades we've earned.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="recognition-quick-nav">
        <div className="recognition-container">
          <div className="recognition-nav-list">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id, index)}
                className={`recognition-nav-item ${activeSection === index ? 'active' : ''}`}
              >
                <section.icon size={18} />
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="recognition-main">
        {/* Testimonials */}
        <section id="testimonials" className="recognition-section">
          <div className="recognition-container">
            <div className="recognition-section-header">
              <span className="recognition-section-label">Client Stories</span>
              <div className="recognition-section-title-wrap">
                <MessageSquare className="recognition-section-icon" size={32} />
                <h2>Client Testimonials</h2>
              </div>
            </div>
            <div className="recognition-testimonials-grid">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="recognition-testimonial-card">
                  <div className="recognition-testimonial-glow" />
                  <Quote className="recognition-quote-icon" size={32} />
                  <p className="recognition-testimonial-text">{testimonial.quote}</p>
                  <div className="recognition-testimonial-author">
                    <img src={testimonial.image} alt={testimonial.author} />
                    <div>
                      <div className="recognition-author-name">{testimonial.author}</div>
                      <div className="recognition-author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="recognition-section recognition-section-alt">
          <div className="recognition-container">
            <div className="recognition-section-header">
              <span className="recognition-section-label">Achievements</span>
              <div className="recognition-section-title-wrap">
                <Award className="recognition-section-icon" size={32} />
                <h2>Awards & Honors</h2>
              </div>
            </div>
            <div className="recognition-awards-timeline">
              {awards.map((award, idx) => (
                <div key={idx} className="recognition-award-item">
                  <div className="recognition-award-glow" />
                  <span className="recognition-award-year">{award.year}</span>
                  <div className="recognition-award-content">
                    <award.icon className="recognition-award-star" size={24} />
                    <div>
                      <h4>{award.title}</h4>
                      <p>{award.org}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="recognition-cta">
        <div className="recognition-container">
          <div className="recognition-cta-box">
            <div className="recognition-cta-glow" />
            <h2>Join Our Satisfied Clients</h2>
            <p>Experience the award-winning service that sets us apart.</p>
            <a href="/contact" className="recognition-btn recognition-btn-primary recognition-btn-lg">
              Work With Us
              <ArrowRight className="recognition-btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recognition;