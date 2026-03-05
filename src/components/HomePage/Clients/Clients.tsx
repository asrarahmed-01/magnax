// src/components/Clients/Clients.tsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { ScrollReveal } from '../../animations/scrollReveal';
import './Clients.scss';

// Placeholder logos - replace with actual logo paths
const clients = [
  { name: 'Riyad Bank', logo: '/images/riyad-bank.jpeg' },
  { name: 'Western Union', logo: '/images/western-union.png' },
  { name: 'DataSync', logo: '/images/data-sync.png' },
  { name: 'CloudNine', logo: '/images/cloud-nine.png' },
  { name: 'NexGen', logo: '/images/nex-gen.png' },
  { name: 'PulseAI', logo: '/images/pulse-ai.png' },
  { name: 'Vertex Labs', logo: '/images/vertex-labs.png' },
//   { name: 'Orbit Systems', logo: '/logos/client-8.svg' },
//   { name: 'Quantum Soft', logo: '/logos/client-9.svg' },
//   { name: 'Stellar Tech', logo: '/logos/client-10.svg' },
];

export function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  const animate = useCallback(() => {
    if (!trackRef.current || isPaused) return;

    const track = trackRef.current;
    const maxScroll = track.scrollWidth / 2;
    
    scrollPositionRef.current += 2;
    
    if (scrollPositionRef.current >= maxScroll) {
      scrollPositionRef.current = 0;
    }
    
    track.scrollLeft = scrollPositionRef.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        {/* Header */}
        <div className="section-header">
          <ScrollReveal animation="fadeUp">
            <span className="section-subtitle"> CLIENTS WE SERVE </span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="section-desc">
            We've been building for millions of people since 2022.
            We build trustworthy secure and adaptable digital solutions,designed to solve today's problems and empower whatever future we create tomorrow
            </p>
          </ScrollReveal>
        </div>

        {/* Infinite Logo Carousel */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div 
            className="clients-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient Masks */}
            <div className="gradient-mask gradient-mask-left" />
            <div className="gradient-mask gradient-mask-right" />

            {/* Scrolling Track */}
            <div className="clients-track" ref={trackRef}>
              {duplicatedClients.map((client, index) => (
                <div key={index} className="client-card">
                  {/* Circular Logo Container */}
                  <div className="logo-circle">

                    <img src={client.logo} alt={client.name} className="client-logo" />
                  </div>
                  {/* Company Name Below */}
                  <span className="client-name">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}