import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  GitBranch, 
  Zap,  
  Target, 
  Shield,
  ArrowRight,
  Quote,
  Kanban,
  Clock,
  Server,
  Container,
  Workflow,
  Monitor,
  Sparkles,
} from 'lucide-react';
import './AgileDevOpsConsulting.scss';

gsap.registerPlugin(ScrollTrigger);

const agilePractices = [
  { name: 'Scrum', category: 'Framework' },
  { name: 'Kanban', category: 'Flow' },
  { name: 'SAFe', category: 'Scale' },
  { name: 'Extreme Programming', category: 'Engineering' },
  { name: 'User Stories', category: 'Planning' },
  { name: 'Sprint Planning', category: 'Ceremony' },
  { name: 'Retrospectives', category: 'Improvement' },
  { name: 'Continuous Feedback', category: 'Culture' },
];

const devopsTools = [
  { name: 'Docker', category: 'Container' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'GitHub Actions', category: 'Automation' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'Ansible', category: 'Config' },
  { name: 'Prometheus', category: 'Monitoring' },
  { name: 'AWS/Azure/GCP', category: 'Cloud' },
];

const agileFeatures = [
  {
    icon: Kanban,
    title: 'Agile Transformation',
    description: 'Transform your organization with proven agile methodologies tailored to your culture and goals.',
    description2: 'Our experienced coaches work closely with your teams to implement frameworks like Scrum, Kanban, and SAFe, fostering a culture of continuous improvement and high performance.',
  },
  {
    icon: Users,
    title: 'Team Coaching',
    description: 'Hands-on coaching to build high-performing, self-organizing teams that deliver consistently.',
    description2: 'We provide personalized coaching to help teams develop the skills and mindset needed for sustained agile success.',
  },
  {
    icon: Target,
    title: 'Product Ownership',
    description: 'Develop effective product owners who maximize value and align stakeholders with delivery teams.',
    description2: 'Our product ownership coaching helps teams understand customer needs, prioritize work effectively, and deliver value consistently.',
  },
  {
    icon: Clock,
    title: 'Flow Optimization',
    description: 'Eliminate bottlenecks and reduce cycle time with value stream mapping and lean practices.',
    description2: 'We analyze your delivery process to identify inefficiencies and implement lean practices that optimize flow and increase throughput.',
  },
];

const devopsFeatures = [
  {
    icon: Container,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deployment pipelines that enable multiple releases per day.',
    description2: 'We design and implement CI/CD pipelines that integrate with your existing tools, enabling faster and more reliable software delivery.',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Provision and manage infrastructure through code for consistency and scalability.',
    description2: 'Our infrastructure as code solutions ensure consistent environments across development, testing, and production, reducing deployment errors and improving scalability.',
  },
  {
    icon: Monitor,
    title: 'Observability',
    description: 'Comprehensive monitoring, logging, and alerting for proactive issue detection.',
    description2: 'We implement observability solutions that provide deep insights into your applications and infrastructure, enabling proactive issue detection and faster resolution.',
  },
  {
    icon: Shield,
    title: 'DevSecOps',
    description: 'Integrate security into every stage of the pipeline with automated compliance checks.',
    description2: 'Our DevSecOps approach ensures that security is integrated into your development process, with automated checks and compliance monitoring to protect your applications and data.',
  },
];


const testimonials = [
  {
    quote: "Their agile coaches transformed how we work. Our teams are more productive and happier than ever before.",
    author: "Sarah Mitchell",
    role: "VP Engineering, TechStartup Inc.",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    quote: "The DevOps automation they built cut our deployment time from days to minutes. Game-changing for our business.",
    author: "James Chen",
    role: "CTO, CloudScale",
    image: "/images/testimonials/james.jpg",
  },
  {
    quote: "Finally, a consulting team that understands both the technical and cultural sides of transformation.",
    author: "Maria Rodriguez",
    role: "Head of Platform, SecureBank",
    image: "/images/testimonials/maria.jpg",
  },
];

const stats = [
  { value: '10x', label: 'Faster Deployments' },
  { value: '60%', label: 'Reduced Cycle Time' },
  { value: '99.99%', label: 'Deployment Success' },
  { value: '50+', label: 'Transformations' }
];

const floatingIcons = [
  { Icon: Users, delay: '0s', duration: '6s', pos: { top: '10%', left: '5%' } },
  { Icon: GitBranch, delay: '1s', duration: '8s', pos: { top: '20%', right: '10%' } },
  { Icon: Container, delay: '2s', duration: '7s', pos: { bottom: '30%', left: '8%' } },
  { Icon: Zap, delay: '0.5s', duration: '9s', pos: { bottom: '20%', right: '5%' } },
  { Icon: Server, delay: '1.5s', duration: '6s', pos: { top: '60%', left: '3%' } },
  { Icon: Workflow, delay: '2.5s', duration: '8s', pos: { top: '40%', right: '8%' } }
];

const sections =[
  { id: 'agile', label: 'Agile Practices' },
  { id: 'devops', label: 'DevOps Tools' },
]

export function AgileDevOpsConsulting() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.ad-hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Floating icons parallax
      gsap.to('.ad-float-icon', {
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
        '.ad-stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.ad-stats',
            start: 'top 85%',
          },
        }
      );

      // Practices/Tools animations
      gsap.fromTo(
        '.ad-practice-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.ad-practices-section',
            start: 'top 80%',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        '.ad-feature-card',
        { y: 40, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.ad-features-grid',
            start: 'top 75%',
          },
        }
      );
      // Testimonials animation
      gsap.fromTo(
        '.ad-testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.ad-testimonials',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="ad-page">
      {/* Hero Section */}
      <section ref={heroRef} className="ad-hero">
        <div className="ad-hero-bg">
          <div className="ad-hero-grid" />
          <div className="ad-hero-orb ad-orb-1" />
          <div className="ad-hero-orb ad-orb-2" />
          <div className="ad-hero-orb ad-orb-3" />
          <div className="ad-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="ad-particle" />
            ))}
          </div>
          {/* <div className="ad-scan-line" /> */}
        </div>
        
        <div className="ad-container">
          <div className="ad-hero-content">
            {/* Floating Elements */}
            <div className="ad-floating-elements">
              {floatingIcons.map(({ Icon, delay, duration, pos }, idx) => (
                <div 
                  key={idx} 
                  className="ad-float-icon"
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

            <div className="ad-hero-badge">
              <span className="ad-hero-dot" />
              <Sparkles size={14} />
              Modern Delivery
            </div>
            
            <h1 className="ad-hero-title">
              Agile & DevOps<br />
             Consulting
            </h1>
            
            <p className="ad-hero-description">
              Accelerate your software delivery with modern practices. We help organizations 
              adopt agile methodologies and implement DevOps automation to ship faster, 
              safer, and with higher quality.
            </p>
            
            <div className="ad-hero-cta">
              <a href="/contact" className="ad-btn ad-btn-primary">
                Start Transformation
                <ArrowRight className="ad-btn-icon" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="ad-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="ad-stat-item">
                  <span className="ad-stat-value">{stat.value}</span>
                  <span className="ad-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agile Practices */}
      <section id="agile" className="ad-practices-section ad-practices-agile">
        <div className="ad-container">
          <div className="ad-section-header">
            <span className="ad-section-label">Agile Frameworks</span>
            <h2 className="ad-section-title">Agile Practices</h2>
            <p className="ad-section-subtitle">
              Proven methodologies for high-performing teams
            </p>
          </div>

          <div className="ad-practices-grid">
            {agilePractices.map((practice, index) => (
              <div key={index} className="ad-practice-item ad-practice-item-agile">
                <div className="ad-practice-shine" />
                <span className="ad-practice-name">{practice.name}</span>
                <span className="ad-practice-category">{practice.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Consulting Section */}
      <section className="ad-service ad-service-agile">
        <div className="ad-container">
          <div className="ad-section-header">
            <div className="ad-service-badge ad-service-badge-agile">
              <Users size={28} />
            </div>
            <h2 className="ad-section-title">Agile Consulting</h2>
            <p className="ad-section-subtitle">
              Build high-performing teams and organizations with proven agile methodologies
            </p>
          </div>

          <div className="ad-features-grid">
            {agileFeatures.map((feature, index) => (
              <div key={index} className="ad-feature-card ad-feature-card-agile">
                <div className="ad-feature-icon ad-feature-icon-agile">
                  <feature.icon size={28} />
                </div>
                <h3 className="ad-feature-title">{feature.title}</h3>
                <p className="ad-feature-description">{feature.description}</p>
                <p className="ad-feature-description">{feature.description2}</p>
                <div className="ad-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section id="devops" className="ad-practices-section ad-practices-devops">
        <div className="ad-container">
          <div className="ad-section-header">
            <span className="ad-section-label">DevOps Toolchain</span>
            <h2 className="ad-section-title">DevOps Tools</h2>
            <p className="ad-section-subtitle">
              Automation and infrastructure technologies
            </p>
          </div>

          <div className="ad-practices-grid">
            {devopsTools.map((tool, index) => (
              <div key={index} className="ad-practice-item ad-practice-item-devops">
                <div className="ad-practice-shine" />
                <span className="ad-practice-name">{tool.name}</span>
                <span className="ad-practice-category">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Consulting Section */}
      <section className="ad-service ad-service-devops">
        <div className="ad-container">
          <div className="ad-section-header">
            <div className="ad-service-badge ad-service-badge-devops">
              <GitBranch size={28} />
            </div>
            <h2 className="ad-section-title">DevOps Consulting</h2>
            <p className="ad-section-subtitle">
              Automate your delivery pipeline and build reliable, scalable infrastructure
            </p>
          </div>

          <div className="ad-features-grid">
            {devopsFeatures.map((feature, index) => (
              <div key={index} className="ad-feature-card ad-feature-card-devops">
                <div className="ad-feature-icon ad-feature-icon-devops">
                  <feature.icon size={28} />
                </div>
                <h3 className="ad-feature-title">{feature.title}</h3>
                <p className="ad-feature-description">{feature.description}</p>
                <p className="ad-feature-description">{feature.description2}</p>
                <div className="ad-feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ad-testimonials">
        <div className="ad-container">
          <div className="ad-section-header">
            <span className="ad-section-label">Testimonials</span>
            <h2 className="ad-section-title">What Clients Say</h2>
          </div>
          <div className="ad-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="ad-testimonial-card">
                <Quote className="ad-testimonial-quote" size={32} />
                <p className="ad-testimonial-text">{testimonial.quote}</p>
                <div className="ad-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <div className="ad-testimonial-name">{testimonial.author}</div>
                    <div className="ad-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ad-cta">
        <div className="ad-container">
          <div className="ad-cta-box">
            <div className="ad-cta-glow" />
            <h2 className="ad-cta-title">Ready to Accelerate Delivery?</h2>
            <p className="ad-cta-description">
              Let's discuss how agile and DevOps practices can transform 
              your software delivery capabilities.
            </p>
            <div className="ad-cta-buttons">
              <a href="#contact" className="ad-btn ad-btn-primary ad-btn-lg">
                Book Free Assessment
                <ArrowRight className="ad-btn-icon" />
              </a>
              <a href="tel:+918123660270" className="ad-btn ad-btn-outline">
                Call: +91 8123660270
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgileDevOpsConsulting;