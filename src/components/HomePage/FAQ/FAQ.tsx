// src/components/FAQ/FAQ.tsx

import { useState, useEffect } from 'react';
import { ScrollReveal } from '../../animations/scrollReveal';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { getFAQData } from '../../../service/api';
import type { FAQData } from '../../../types';

import './FAQ.scss';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [data, setData] = useState<FAQData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const faqData = await getFAQData();
        if (mounted) {
          setData(faqData);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to load FAQ data');
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <section className="faq-section loading">Loading FAQs...</section>;
  if (error) return <section className="faq-section error">Error: {error}</section>;
  if (!data) return <section className="faq-section">No FAQs available</section>;

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-grid">
          {/* Left: Header */}
          <div className="faq-header">
            <ScrollReveal animation="fadeUp">
              <span className="section-subtitle">
                {data.subtitle || 'FAQ'}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="section-title">
                {data.title || 'Frequently Asked Questions'}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="faq-desc">
                {data.description ||
                  "Find answers to common questions about our services. Can't find what you're looking for? Feel free to contact us directly."}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <a href={data.contactLink?.href || '#cta'} className="contact-link">
                {data.contactLink?.text || 'Contact Us'}
                <ChevronDown className="link-icon" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right: FAQ List */}
          <div className="faq-list">
            {data.faqs?.map?.((faq, index) => (
              <ScrollReveal key={index} animation="slideRight" delay={0.1 + index * 0.1}>
                <div className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                  <button onClick={() => toggleFAQ(index)} className="faq-question">
                    <span>{faq.question}</span>
                    <div className="faq-toggle">
                      {openIndex === index ? <Minus /> : <Plus />}
                    </div>
                  </button>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            )) || (
              <div className="faq-empty">No questions available yet</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}