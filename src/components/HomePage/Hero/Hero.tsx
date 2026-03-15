// src/components/Hero/Hero.tsx (or wherever this lives)

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getHeroData } from '../../../service/api';
import type { HeroData } from '../../../types';

import './Hero.scss';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);

  // Fetch data
  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const heroData = await getHeroData();
        if (mounted) {
          setData(heroData);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to load hero data');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    if (loading || !data) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo(
        patternRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      );

      tl.fromTo(
        subtitleRef.current,
        { letterSpacing: '20px', opacity: 0 },
        { letterSpacing: '4px', opacity: 1, duration: 0.6 },
        '-=0.8'
      );

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

      tl.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [data, loading]);

  // Slideshow autoplay
  useEffect(() => {
    if (!data?.slides?.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data?.slides?.length]);

  if (loading) return <section className="hero loading">Loading hero section...</section>;
  if (error) return <section className="hero error">Error: {error}</section>;
  if (!data) return <section className="hero">No hero content available</section>;

  const titleWords = (data.title || 'Transforming Businesses Through Innovative Technology').split(' ');

  return (
    <section id="hero" ref={sectionRef} className="hero">
      {/* Background Pattern */}
      <div
        ref={patternRef}
        className="hero-pattern"
        style={{
          backgroundImage: `url(${data.patternImage || '/images/hero-pattern.jpg'})`,
        }}
      >
        <div className="hero-pattern-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <span ref={subtitleRef} className="hero-subtitle">
              {data.subtitle || 'IT SOLUTIONS'}
            </span>

            <h1 ref={titleRef} className="hero-title">
              {titleWords.map((word, index) => (
                <span key={index} className="word">
                  {word}
                </span>
              ))}
            </h1>

            <p ref={descRef} className="hero-description">
              {data.description ||
                'We deliver cutting-edge IT solutions that drive growth, efficiency, ' +
                'and digital transformation for businesses worldwide. Partner with us ' +
                'to unlock your full potential.'}
            </p>
          </div>

          {/* Hero Image Slideshow */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-box">
                <div className="hero-slideshow">
                  {(data.slides || []).map((slide, index) => (
                    <div
                      key={index}
                      className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt || 'Hero slide'}
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
                    <div className="hero-badge-title">
                      {data.badge?.rating || '4.9/5'}
                    </div>
                    <div className="hero-badge-text">
                      {data.badge?.label || 'Client Rating'}
                    </div>
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