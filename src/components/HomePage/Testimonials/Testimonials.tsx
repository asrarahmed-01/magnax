// src/components/Testimonials/Testimonials.tsx

import { useState, useEffect } from 'react';
import { ScrollReveal } from '../../animations/scrollReveal';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { getTestimonialsData } from '../../../service/api';
import type { TestimonialsData } from '../../../types';

import './Testimonials.scss';

export function Testimonials() {
  const [data, setData] = useState<TestimonialsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fetch data
  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const testimonialsData = await getTestimonialsData();
        if (mounted) {
          setData(testimonialsData);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to load testimonials data');
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

  // Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying || !data?.testimonials?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, data?.testimonials?.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + (data?.testimonials?.length || 0)) % (data?.testimonials?.length || 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % (data?.testimonials?.length || 1));
  };

  if (loading) return <section className="testimonials-section loading">Loading testimonials...</section>;
  if (error) return <section className="testimonials-section error">Error: {error}</section>;
  if (!data || !data.testimonials?.length) return <section className="testimonials-section">No testimonials available</section>;

  const current = data.testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="section-header">
          <ScrollReveal animation="fadeUp">
            <span className="section-subtitle">
              {data.subtitle || 'TESTIMONIALS'}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="section-title">
              {data.title || 'What Our Clients Say'}
            </h2>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div
            className="carousel-wrapper"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="quote-icon">
              <Quote />
            </div>

            <div className="testimonial-card">
              <div className="card-decoration top" />
              <div className="card-decoration bottom" />

              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(current.rating || 5)].map((_, i) => (
                    <Star key={i} className="star-filled" />
                  ))}
                </div>

                <p className="testimonial-text">
                  "{current.content}"
                </p>

                <div className="author-info">
                  <img
                    src={current.image || '/images/testimonials/placeholder.jpg'}
                    alt={current.role || 'Client'}
                    className="author-avatar"
                  />
                  <div>
                    <p className="author-role">{current.role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="carousel-controls">
                <button onClick={goToPrevious} className="nav-btn prev">
                  <ChevronLeft />
                </button>

                <div className="carousel-dots">
                  {data.testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(index);
                      }}
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>

                <button onClick={goToNext} className="nav-btn next">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}