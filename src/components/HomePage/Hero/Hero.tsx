import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Hero.scss';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of your 3 images
  const slides = [
    { src: '/images/hero1.jpeg', alt: 'Team collaboration' },
    { src: '/images/hero2.jpeg', alt: 'Description 2' },
    { src: '/images/hero3.jpeg', alt: 'Description 3' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Background pattern animation - entrance only
      tl.fromTo(
        patternRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      );

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { letterSpacing: '20px', opacity: 0 },
        { letterSpacing: '4px', opacity: 1, duration: 0.6 },
        '-=0.8'
      );

      // Title word-by-word reveal
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
          },
          '-=0.3'
        );
      }

      // Description
      tl.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.2'
      );

      // REMOVED: Continuous background drift animation that was causing fluctuation
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Slideshow autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const titleWords = 'Transforming Businesses Through Innovative Technology'.split(' ');

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero"
    >
      {/* Background Pattern - Fixed with fallback color */}
      <div
        ref={patternRef}
        className="hero-pattern"
        style={{
          backgroundImage: 'url(/images/hero-pattern.jpg)',
        }}
      >
        <div className="hero-pattern-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <span
              ref={subtitleRef}
              className="hero-subtitle"
            >
              IT SOLUTIONS 
            </span>

            <h1
              ref={titleRef}
              className="hero-title"
            >
              {titleWords.map((word, index) => (
                <span key={index} className="word">
                  {word}
                </span>
              ))}
            </h1>

            <p
              ref={descRef}
              className="hero-description"
            >
              We deliver cutting-edge IT solutions that drive growth, efficiency, 
              and digital transformation for businesses worldwide. Partner with us 
              to unlock your full potential.
            </p>
          </div>

          {/* Hero Image Slideshow */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-box">
                <div className="hero-slideshow">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="hero-image"
                        onError={(e) => {
                          console.error(`Failed to load image: ${slide.src}`);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="hero-image-gradient" />
              </div>

              {/* Floating badge */}
              <div className="hero-badge">
                <div className="hero-badge-inner">
                  <div className="hero-badge-icon">
                    <span>★</span>
                  </div>
                  <div>
                    <div className="hero-badge-title">4.9/5</div>
                    <div className="hero-badge-text">Client Rating</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="hero-decor hero-decor-1" />
              <div className="hero-decor hero-decor-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero-bottom-fade" />
    </section>
  );
}