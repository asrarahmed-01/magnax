import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Building2, 
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  GraduationCap,
  Home,
  Vote,
  Film,
  Plane,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import './Industries.scss';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 'fintech',
    title: 'Fintech & Banking',
    description: 'We collaborate with financial technology and banking organizations to develop secure, trustworthy, user-friendly digital solutions. From mobile banking to payment platforms to financial operating systems.',
    image: '/images/fintech-banking.jpg',
    icon: Landmark,
    features: [
      'Digital banking platforms',
      'Payment gateway / wallet technologies',
      'Loan / credit management solutions',
      'Financial dashboards / reporting tools',
      'Secure API integrations',
      'Compliant / scalable solutions',
      //path: '/industries/finance'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'We help hospitals, health clinics, and health technology start-ups by creating systems that can help them operate more efficiently on a daily basis. Healthcare professionals rely upon accurate and secure data.',
    image: '/images/healthcare.jpg',
    icon: HeartPulse,
    features: [
      'Hospital management systems',
      'Telemedicine platforms',
      'Patient tracking & scheduling',
      'Mobile health applications',
      'Secure medical data systems',
      'Healthcare analytics'
    ]
  },
  {
    id: 'retail',
    title: 'Retail & Ecommerce',
    description: 'We create digital platforms for brands that are fast, easy-to-use and designed to convert site visitors into long-term customers. We focus on smooth navigation, secure payment processing, and seamless backend operations.',
    image: '/images/retail-ecommerce.jpg',
    icon: ShoppingCart,
    features: [
      'Online stores & marketplaces',
      'Inventory management systems',
      'POS systems',
      'Secure payment processing',
      'Customer experience platforms',
      'Multi-vendor solutions'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'We create intelligent digital solutions that streamline business processes, such as tracking product movement, inventory management, and automating supply chain processes to improve efficiency.',
    image: '/images/manufacturing.jpg',
    icon: Factory,
    features: [
      'ERP systems',
      'Production tracking',
      'Supply chain automation',
      'Inventory management',
      'Quality control systems',
      'Automation dashboards'
    ]
  },
  {
    id: 'education',
    title: 'Education',
    description: 'We develop innovative solutions with schools, colleges, training institutes, and EdTech companies to improve the administrative side of education and create better learning experiences.',
    image: '/images/education.jpg',
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
    description: 'We provide companies in the real estate segment with digital solutions that help them simplify their business processes, from property management to client management and transaction processing.',
    image: '/images/real-estate.jpg',
    icon: Home,
    features: [
      'Property listing platforms',
      'Customer relationship management',
      'Booking management systems',
      'Virtual tour technology',
      'Lead tracking & inquiries',
      'Document management'
    ]
  },
  {
    id: 'politics',
    title: 'Politics',
    description: 'We develop campaign management tools, data analytics platforms, and voter engagement applications to help political organizations connect with constituents and manage campaigns effectively.',
    image: '/images/politics.jpg',
    icon: Vote,
    features: [
      'Campaign management tools',
      'Data analytics platforms',
      'Voter engagement apps',
      'Fundraising systems',
      'Volunteer coordination',
      'Polling & survey tools'
    ]
  },
  {
    id: 'media',
    title: 'Media & Entertainment',
    description: 'We build streaming platforms, content management systems, and mobile apps that deliver engaging entertainment experiences to audiences across multiple devices and platforms.',
    image: '/images/media-entertainment.jpg',
    icon: Film,
    features: [
      'Streaming platforms',
      'Content management systems',
      'Mobile entertainment apps',
      'Video production tools',
      'Digital broadcasting',
      'Audience analytics'
    ]
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'We create booking engines, hotel management systems, and travel apps that provide seamless experiences for travelers and efficient operations for hospitality businesses.',
    image: '/images/travel-hospitality.jpg',
    icon: Plane,
    features: [
      'Booking engines',
      'Hotel management systems',
      'Travel applications',
      'Reservation platforms',
      'Customer service tools',
      'Loyalty programs'
    ]
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'We develop online ordering systems, POS software, and delivery apps that help restaurants streamline operations and provide better service to their customers.',
    image: '/images/restaurants.jpg',
    icon: UtensilsCrossed,
    features: [
      'Online ordering systems',
      'POS software',
      'Delivery apps',
      'Kitchen display systems',
      'Table management',
      'Customer loyalty programs'
    ]
  }
];

export function Industries() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(
        '.industries-hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      // Industry cards animation
      gsap.fromTo(
        '.industries-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.industries-grid',
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="industries-page">
      {/* Hero Section */}
      <section ref={heroRef} className="industries-hero">
        <div className="industries-hero-bg">
          <div className="industries-hero-grid" />
          <div className="industries-hero-orb industries-orb-1" />
          <div className="industries-hero-orb industries-orb-2" />
        </div>
        
        <div className="industries-container">
          <div className="industries-hero-content">
            <div className="industries-hero-badge">
              <Sparkles size={14} />
              Our Expertise
            </div>
            
            <h1 className="industries-hero-title">
              Industries We<br />
              <span className="industries-gradient-text">Serve</span>
            </h1>
            
            <p className="industries-hero-description">
              We have delivered innovative technology solutions across diverse domains, 
              helping businesses transform and thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <main className="industries-main">
        <div className="industries-container">
          <div className="industries-grid">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <div key={industry.id} className="industries-card">
                  <div className="industries-card-image">
                    <img src={industry.image} alt={industry.title} />
                    <div className="industries-card-overlay" />
                    <div className="industries-card-icon">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <div className="industries-card-content">
                    <h3 className="industries-card-title">{industry.title}</h3>
                    <p className="industries-card-description">{industry.description}</p>
                    <ul className="industries-card-features">
                      {industry.features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="industries-cta">
        <div className="industries-container">
          <div className="industries-cta-box">
            <div className="industries-cta-glow" />
            <Building2 size={48} className="industries-cta-icon" />
            <h2 className="industries-cta-title">Need a Custom Solution?</h2>
            <p className="industries-cta-description">
              We tailor our technology solutions to meet the unique challenges of your industry. 
              Let's discuss how we can help your business grow.
            </p>
            <a href="/contact" className="industries-btn industries-btn-primary industries-btn-lg">
              Contact Us
              <ArrowRight className="industries-btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;