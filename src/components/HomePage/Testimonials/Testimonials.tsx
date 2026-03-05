// src/components/Testimonials/Testimonials.tsx
import { useState, useEffect } from 'react';
import { ScrollReveal } from '../../animations/scrollReveal';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import './Testimonials.scss';

const testimonials = [
  {
    role: 'CTO, Bricks&Bolts',
    image: '/images/testimonials/avatar-1.jpg',
    content: 'We are really impressed with the Da Riff team\'s dedication and responsiveness.Da Riff is a much valued vendor/partner, who go out of their way to meet deadlines and provide solutions.The culture of innovation, positivity, and commitment to the task at hand at Da Riff is well admired. Da Riff completed quality projects on time.We look forward to a long and fruitful relationship."',
    rating: 5,
  },
  {
    role: 'Founder, Matkaplay',
    image: '/images/testimonials/avatar-2.jpg',
    content: '"We would like to express our satisfaction on the cooperation regarding the development of our web application. Da Riff and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend Da Riff and the development team. We look forward to working with them in future projects."',
    rating: 5,
  },
  {
    role: 'CTO, Alfa Carz',
    image: '/images/testimonials/avatar-3.jpg',
    content: '"Working with Da Riff was a pleasure. They were enthusiastic, fast to offer comments, and quick to make changes. As a client I felt very comfortable that the work would get done within the determined planning.I would highly suggest them and hope to work with them again in the future."',
    rating: 5,
  },
  {
    role: 'General Manager, Banfield',
    image: '/images/testimonials/avatar-3.jpg',
    content: '"Wonderful Experience, Highly Recommend Da Riff.The expertise and understanding Da Riff possess helped us pen down our requirements in a well-structured manner and the sense of urgency resulted in the product being delivered on time. This has been a fantastic experience, and I would strongly suggest Da Riff to anyone interested in developing next-generation mobile apps."',
    rating: 5,
  },
  {
    role: '- Product Owner, SplitSie',
    image: '/images/testimonials/avatar-3.jpg',
    content: '"I am really impressed by the quality of services I received from Da Riff. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Da Riff and I will definitely use your services again."',
    rating: 5,
  },
  {
    role: 'Founder, KBombay',
    image: '/images/testimonials/avatar-3.jpg',
    content: '"We would like to express our satisfaction on the cooperation regarding the development of our web application. Da Riff and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend Da Riff and the development team. We look forward to working with them in future projects."',
    rating: 5,
  },
  { 
    role: 'Founder, GlobalEdge Services',
    image: '/images/testimonials/avatar-3.jpg',
    content: '"We would like to express our satisfaction on the cooperation regarding the development of our web application. Da Riff and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend Da Riff and the development team. We look forward to working with them in future projects."',
    rating: 5,
  },
  {
    role: 'CTO, Golden manpower International Consultants',
    image: '/images/testimonials/avatar-3.jpg',
    content: '"We would like to express our satisfaction on the cooperation regarding the development of our web application. Da Riff and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend Da Riff and the development team. We look forward to working with them in future projects."',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="section-header">
          <ScrollReveal animation="fadeUp">
            <span className="section-subtitle"> TESTIMONIALS </span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="section-title">What Our Clients Say</h2>
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
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="star-filled" />
                  ))}
                </div>

                <p className="testimonial-text">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="author-info">
                  <img
                    src={testimonials[currentIndex].image}
                    className="author-avatar"
                  />
                  <div>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="carousel-controls">
                <button onClick={goToPrevious} className="nav-btn prev">
                  <ChevronLeft />
                </button>

                <div className="carousel-dots">
                  {testimonials.map((_, index) => (
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