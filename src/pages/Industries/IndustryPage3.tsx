import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  GraduationCap,
  Home,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import './IndustryPage.scss';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 'education',
    title: 'Education',
    description: 'Technology is a critical factor in today\'s world that has made it possible for everyone to access and learn more than ever before. We develop innovative solutions with schools, colleges, training institutes, and EdTech companies to improve the administrative side of education.',
    image: '/images/industries/education.jpg',
    icon: GraduationCap,
    features: [
      'Learning Management Systems (LMS)',
      'Student portals',
      'Online learning platforms',
      'Attendance & exam management',
      'EdTech applications',
      'Administrative systems'
    ]
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'The real estate segment is an area of commerce where there is a significant amount of activity. We provide companies in the real estate segment with digital solutions that help them simplify their business processes from property management to transaction management.',
    image: '/images/industries/real-estate.jpg',
    icon: Home,
    features: [
      'Property listing platforms',
      'Customer relationship management',
      'Booking management systems',
      'Virtual tour technology',
      'Lead tracking & inquiries',
      'Document management'
    ]
  }
];

export function IndustryPage3() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.industry-hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.industry-section',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.industry-main',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="industry-page">
      {/* Hero Section */}
      <section ref={heroRef} className="industry-hero">
        <div className="industry-hero-bg">
          <div className="industry-hero-grid" />
          <div className="industry-hero-orb industry-orb-1" />
          <div className="industry-hero-orb industry-orb-2" />
        </div>
        
        <div className="industry-container">
          <div className="industry-hero-content">
            <div className="industry-hero-badge">
              <Sparkles size={14} />
              Industries We Serve
            </div>
            
            <h1 className="industry-hero-title">
              Education &<br />
              <span className="industry-gradient-text">Real Estate</span>
            </h1>
            
            <p className="industry-hero-description">
              Building innovative digital platforms for educational institutions and real estate companies.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Content */}
      <main className="industry-main">
        <div className="industry-container">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <section key={industry.id} className="industry-section">
                <div className="industry-content-grid">
                  <div className="industry-image-wrapper">
                    <img src={industry.image} alt={industry.title} />
                    <div className="industry-image-overlay" />
                    <div className="industry-image-icon">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <div className="industry-content">
                    <div className="industry-label">Industry</div>
                    <h2 className="industry-title">{industry.title}</h2>
                    <p className="industry-description">{industry.description}</p>
                    <div className="industry-features">
                      <h4>What We Support:</h4>
                      <ul>
                        {industry.features.map((feature, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={18} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="industry-container">
          <div className="industry-cta-box">
            <div className="industry-cta-glow" />
            <h2 className="industry-cta-title">Ready to Transform Your Industry?</h2>
            <p className="industry-cta-description">
              Let's discuss how our technology solutions can help your business grow and succeed.
            </p>
            <a href="/contact" className="industry-btn industry-btn-primary industry-btn-lg">
              Contact Us
              <ArrowRight className="industry-btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndustryPage3;