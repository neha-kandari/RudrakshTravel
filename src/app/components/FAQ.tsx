import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const faqs = [
  {
    question: 'How do I book a travel package with Rudraksh Travels?',
    answer: 'Booking is simple! Browse our packages, select the one that excites you, and click "Book Now" or reach us via the Contact form. Our team will confirm your booking and guide you through the next steps within 24 hours.',
  },
  {
    question: 'Can I customize a package to suit my preferences?',
    answer: 'Absolutely! Every trip can be personalized — destinations, duration, accommodation type, transport, and activities. Just share your wishlist and budget with us and we\'ll craft the perfect itinerary for you.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer: 'Cancellations made 30+ days before departure receive a full refund. Cancellations between 15–30 days receive a 50% refund. Cancellations within 15 days are non-refundable. Special circumstances are handled on a case-by-case basis.',
  },
  {
    question: 'Do your packages include flights and accommodation?',
    answer: 'Most of our packages include both flights and hand-picked accommodation. Some packages are land-only. Each package page clearly lists what is included, and we can add or remove components to match your needs.',
  },
  {
    question: 'Is travel insurance included in the package price?',
    answer: 'Travel insurance is not included by default but is strongly recommended. We partner with trusted insurance providers and can arrange comprehensive travel insurance for you at competitive rates.',
  },
  {
    question: 'Do you offer group travel or corporate tours?',
    answer: 'Yes! We specialize in group holidays, family reunions, honeymoons, and corporate offsites. Group bookings of 10+ travelers receive exclusive discounts and a dedicated trip coordinator.',
  },
  {
    question: 'How far in advance should I book my trip?',
    answer: 'We recommend booking at least 4–6 weeks in advance for domestic tours and 8–12 weeks for international trips, especially during peak season (Oct–Feb). Last-minute bookings are possible subject to availability.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* ambient blobs */}
      <div
        className="absolute -top-32 -right-32 w-[440px] h-[440px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'rgba(236,158,44,0.08)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'rgba(127,59,47,0.08)' }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* heading */}
        <ScrollReveal>
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
            <span
              className="uppercase tracking-widest text-xs"
              style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Got Questions?
            </span>
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
          </div>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Frequently Asked{' '}
            <span style={{ color: '#7F3B2F', fontStyle: 'italic' }}>Questions</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '0.96rem',
              color: 'var(--color-foreground)',
              opacity: 0.6,
              maxWidth: '420px',
            }}
          >
            Everything you need to know before you pack your bags and set off.
          </p>
        </div>
        </ScrollReveal>

        {/* accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.07}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  background: isOpen
                    ? 'rgba(127,59,47,0.08)'
                    : 'rgba(255,255,255,0.04)',
                  border: isOpen
                    ? '1px solid rgba(236,158,44,0.35)'
                    : '1px solid rgba(236,158,44,0.14)',
                  boxShadow: isOpen
                    ? '0 8px 32px rgba(127,59,47,0.12), inset 0 1px 0 rgba(255,255,255,0.08)'
                    : 'none',
                }}
              >
                {/* question row */}
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: isOpen ? '#EC9E2C' : 'var(--color-foreground)',
                      lineHeight: 1.45,
                      transition: 'color 0.25s',
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* icon badge */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen
                        ? 'linear-gradient(135deg, #7F3B2F, #A8522A)'
                        : 'rgba(236,158,44,0.12)',
                      border: isOpen
                        ? '1px solid rgba(236,158,44,0.5)'
                        : '1px solid rgba(236,158,44,0.25)',
                      boxShadow: isOpen ? '0 4px 12px rgba(127,59,47,0.3)' : 'none',
                    }}
                  >
                    {isOpen
                      ? <Minus className="w-3.5 h-3.5" style={{ color: 'white' }} />
                      : <Plus  className="w-3.5 h-3.5" style={{ color: '#EC9E2C' }} />}
                  </div>
                </button>

                {/* answer */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <div
                    className="px-6 pb-5"
                    style={{
                      borderTop: '1px solid rgba(236,158,44,0.12)',
                      paddingTop: '16px',
                    }}
                  >
                    {/* gold accent bar */}
                    <div
                      className="w-8 h-0.5 rounded-full mb-3"
                      style={{ background: 'linear-gradient(90deg, #EC9E2C, rgba(236,158,44,0.2))' }}
                    />
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '0.9rem',
                        color: 'var(--color-foreground)',
                        opacity: 0.72,
                        lineHeight: 1.75,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
