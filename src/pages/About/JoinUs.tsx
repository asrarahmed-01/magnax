import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Gift,
  CheckCircle2,
  MapPin,
  Clock,
  DollarSign,
  Sparkles,
  Zap,
  Globe,
  Star,
  Search,
  Filter,
  ChevronDown,
  Rocket,
  Heart,
  Coffee
} from 'lucide-react';
import './JoinUs.scss';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'careers', label: 'Careers', icon: Briefcase },
  { id: 'how-we-hire', label: 'How We Hire', icon: Users },
  { id: 'referral', label: 'Referral', icon: Gift },
];

const openPositions = [
  { title: 'Senior React Developer', location: 'Dallas, TX / Remote', type: 'Full-time', department: 'Engineering' },
  { title: 'Cloud Architect', location: 'London, UK / Remote', type: 'Full-time', department: 'Engineering' },
  { title: 'UX/UI Designer', location: 'Bangalore, India', type: 'Full-time', department: 'Design' },
  { title: 'Project Manager', location: 'Dubai, UAE', type: 'Full-time', department: 'Management' },
  { title: 'Data Engineer', location: 'Remote', type: 'Full-time', department: 'Data' },
  { title: 'DevOps Engineer', location: 'Hyderabad, India', type: 'Full-time', department: 'Engineering' },
];

const benefits = [
  { icon: DollarSign, title: 'Competitive Salary', desc: 'Market-leading compensation packages' },
  { icon: Clock, title: 'Flexible Hours', desc: 'Work-life balance with flexible scheduling' },
  { icon: MapPin, title: 'Remote Friendly', desc: 'Work from anywhere in the world' },
  { icon: Gift, title: 'Annual Bonus', desc: 'Performance-based bonuses and incentives' },
  { icon: Heart, title: 'Health Coverage', desc: 'Comprehensive medical and dental plans' },
  { icon: Coffee, title: 'Learning Budget', desc: '$2,000 annual learning stipend' },
];

const hiringSteps = [
  { step: '01', title: 'Application', desc: 'Submit your resume and portfolio' },
  { step: '02', title: 'Screening', desc: 'Initial conversation with our HR team' },
  { step: '03', title: 'Technical', desc: 'Skills assessment and coding challenge' },
  { step: '04', title: 'Interview', desc: 'Meet the team and discuss fit' },
  { step: '05', title: 'Offer', desc: 'Join the Magnax family!' },
];

const heroStats = [
  { value: '50+', label: 'Open Roles' },
  { value: '15', label: 'Countries' },
  { value: '95%', label: 'Retention' },
  { value: '4.8', label: 'Rating' }
];

const floatingIcons = [
  { Icon: Rocket, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: Star, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Briefcase, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Globe, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Zap, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Sparkles, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

export function JoinUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', ...Array.from(new Set(openPositions.map(p => p.department)))];
  
  const filteredPositions = openPositions.filter(pos => {
    const matchesSearch = pos.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pos.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDepartment === 'All' || pos.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(
        '.joinus-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons
      gsap.to('.joinus-float-icon', {
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
        '.joinus-hero-stat',
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

      // Section animations
      gsap.fromTo(
        '.joinus-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.joinus-main',
            start: 'top 80%',
          },
        }
      );

      // Hiring steps animation
      gsap.fromTo(
        '.joinus-hiring-step',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.joinus-hiring-timeline',
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
    <div className="joinus-page">
      {/* Hero - Interactive Job Search Design */}
      <section ref={heroRef} className="joinus-hero">
        <div className="joinus-hero-bg">
          <div className="joinus-hero-grid" />
          <div className="joinus-hero-orb joinus-orb-1" />
          <div className="joinus-hero-orb joinus-orb-2" />
          <div className="joinus-hero-orb joinus-orb-3" />
          <div className="joinus-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="joinus-particle" />
            ))}
          </div>
          {/* <div className="joinus-scan-line" /> */}
        </div>
        
        <div className="joinus-container">
          <div className="joinus-hero-wrapper">
            <div className="joinus-hero-content">
              {/* Floating Elements */}
              <div className="joinus-floating-elements">
                {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                  <div 
                    key={idx} 
                    className="joinus-float-icon"
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

              <div className="joinus-hero-badge">
                <span className="joinus-hero-dot" />
                <Sparkles size={14} />
                We're Hiring
              </div>
              
              <h1 className="joinus-hero-title">
                Build Your<br />
                <span className="joinus-gradient-text">Career With Us</span>
              </h1>
              
              <p className="joinus-hero-description">
                Join a team of innovators, problem-solvers, and technology enthusiasts. 
                We offer challenging projects, growth opportunities, and a culture that 
                values creativity and collaboration.
              </p>

              <div className="joinus-hero-info">
                <div className="joinus-info-item">
                  <Globe size={18} />
                  <span>Global Opportunities</span>
                </div>
                <div className="joinus-info-item">
                  <Rocket size={18} />
                  <span>Fast Career Growth</span>
                </div>
                <div className="joinus-info-item">
                  <Heart size={18} />
                  <span>Great Culture</span>
                </div>
              </div>
              
              {/* Hero Stats */}
              <div className="joinus-hero-stats">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="joinus-hero-stat">
                    <span className="joinus-stat-value">{stat.value}</span>
                    <span className="joinus-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Job Search Card */}
            <div className="joinus-search-container">
              <div className="joinus-search-card">
                <div className="joinus-search-header">
                  <Search size={20} />
                  <span>Find Your Role</span>
                </div>
                <div className="joinus-search-input-wrapper">
                  <input 
                    type="text" 
                    placeholder="Search positions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="joinus-search-input"
                  />
                  <Search size={18} className="joinus-search-icon" />
                </div>
                <div className="joinus-filter-wrapper">
                  <Filter size={16} />
                  <select 
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="joinus-filter-select"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} />
                </div>
                <div className="joinus-search-results">
                  <div className="joinus-results-header">
                    <span>{filteredPositions.length} positions found</span>
                  </div>
                  <div className="joinus-results-list">
                    {filteredPositions.slice(0, 4).map((pos, idx) => (
                      <div key={idx} className="joinus-result-item">
                        <div className="joinus-result-info">
                          <h4>{pos.title}</h4>
                          <span>{pos.location}</span>
                        </div>
                        <ArrowRight size={16} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="joinus-search-nav">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id, index)}
                      className={`joinus-search-node ${activeSection === index ? 'active' : ''}`}
                      title={section.label}
                    >
                      <section.icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="joinus-main">
        {/* Careers */}
        <section id="careers" className="joinus-section">
          <div className="joinus-container">
            <div className="joinus-section-header">
              <span className="joinus-section-label">Opportunities</span>
              <div className="joinus-section-title-wrap">
                <Briefcase className="joinus-section-icon" size={32} />
                <h2>Open Positions</h2>
              </div>
            </div>
            
            <div className="joinus-benefits-grid">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="joinus-benefit-card">
                  <div className="joinus-benefit-icon">
                    <benefit.icon size={28} />
                  </div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="joinus-positions-list">
              {filteredPositions.map((position, idx) => (
                <div key={idx} className="joinus-position-card">
                  <div className="joinus-position-glow" />
                  <div className="joinus-position-info">
                    <div className="joinus-position-header">
                      <h3>{position.title}</h3>
                      <span className="joinus-position-dept">{position.department}</span>
                    </div>
                    <div className="joinus-position-meta">
                      <span><MapPin size={14} /> {position.location}</span>
                      <span className="joinus-position-type">{position.type}</span>
                    </div>
                  </div>
                  <button className="joinus-apply-btn">
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                  <div className="joinus-position-shine" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Hire */}
        <section id="how-we-hire" className="joinus-section joinus-section-alt">
          <div className="joinus-container">
            <div className="joinus-section-header">
              <span className="joinus-section-label">Process</span>
              <div className="joinus-section-title-wrap">
                <Users className="joinus-section-icon" size={32} />
                <h2>How We Hire</h2>
              </div>
            </div>
            <div className="joinus-hiring-timeline">
              {hiringSteps.map((item, idx) => (
                <div key={idx} className="joinus-hiring-step">
                  <div className="joinus-step-glow" />
                  <span className="joinus-step-number">{item.step}</span>
                  <div className="joinus-step-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className="joinus-step-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Program */}
        <section id="referral" className="joinus-section">
          <div className="joinus-container">
            <div className="joinus-section-header">
              <span className="joinus-section-label">Rewards</span>
              <div className="joinus-section-title-wrap">
                <Gift className="joinus-section-icon" size={32} />
                <h2>Referral Program</h2>
              </div>
            </div>
            <div className="joinus-referral-content">
              <div className="joinus-referral-info">
                <h3>Refer a Friend, Earn Rewards</h3>
                <p>
                  Know someone who would be a great fit for Magnax? Refer them and 
                  earn bonuses when they join our team. There's no limit to how many 
                  people you can refer!
                </p>
                <div className="joinus-referral-tiers">
                  <div className="joinus-referral-tier">
                    <div className="joinus-tier-badge">$1,000</div>
                    <span>Junior Level</span>
                  </div>
                  <div className="joinus-referral-tier">
                    <div className="joinus-tier-badge">$2,500</div>
                    <span>Senior Level</span>
                  </div>
                  <div className="joinus-referral-tier">
                    <div className="joinus-tier-badge">$5,000</div>
                    <span>Executive</span>
                  </div>
                </div>
                <ul className="joinus-referral-benefits">
                  <li><CheckCircle2 size={18} /> Instant bonus upon hire confirmation</li>
                  <li><CheckCircle2 size={18} /> Track referral status in real-time</li>
                  <li><CheckCircle2 size={18} /> Additional bonus after 90 days</li>
                </ul>
              </div>
              <div className="joinus-referral-cta">
                <div className="joinus-referral-card">
                  <div className="joinus-referral-glow" />
                  <Gift size={48} />
                  <h4>Start Referring Today</h4>
                  <p>Submit your referral and track their progress through our portal</p>
                  <button className="joinus-btn joinus-btn-primary">
                    Submit Referral
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="joinus-cta">
        <div className="joinus-container">
          <div className="joinus-cta-box">
            <div className="joinus-cta-glow" />
            <h2 className="joinus-cta-title">Don't See the Right Fit?</h2>
            <p className="joinus-cta-description">Send us your resume and we'll keep you in mind for future opportunities.</p>
            <a href="mailto:careers@magnax.com" className="joinus-btn joinus-btn-primary joinus-btn-lg">
              Send Resume
              <ArrowRight className="joinus-btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinUs;