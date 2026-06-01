import { Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const testimonials = [
  { name: 'Priya Sharma',  destination: 'Dubai',    rating: 5, review: 'Rudraksh Travels made our Dubai trip absolutely perfect! Every detail was taken care of, and we had the most amazing time. Truly a world-class service.', initials: 'PS', color: '#7F3B2F' },
  { name: 'Rajesh Kumar',  destination: 'Kashmir',  rating: 5, review: 'The Kashmir package was beautifully planned. The team was so supportive and made our family vacation truly memorable. We felt cared for at every step.', initials: 'RK', color: '#EC9E2C' },
  { name: 'Anjali Patel',  destination: 'Maldives', rating: 5, review: 'Our honeymoon in Maldives was a dream come true! Thank you for the personalized planning, seamless arrangements, and warm hospitality throughout.', initials: 'AP', color: '#A8522A' },
  { name: 'Vikram Singh',  destination: 'Thailand', rating: 5, review: 'Excellent service and very affordable packages. The Thailand trip was well-organized and completely hassle-free. Highly recommended to everyone!', initials: 'VS', color: '#7F3B2F' },
  { name: 'Sneha Reddy',   destination: 'Bali',     rating: 5, review: 'Bali was absolutely magical! Rudraksh Travels took care of everything from flights to hotels. Best travel agency we have ever worked with.', initials: 'SR', color: '#EC9E2C' },
  { name: 'Amit Verma',    destination: 'Europe',   rating: 5, review: 'The 11-night Europe tour was simply incredible. Professional planning, great attention to detail, and wonderful support throughout our journey.', initials: 'AV', color: '#A8522A' },
];

const doubled = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d0806 0%, #1c0f09 50%, #0d0806 100%)' }}
    >
      <style>{`
        @keyframes testimonial-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-track {
          animation: testimonial-scroll 36s linear infinite;
          will-change: transform;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(127,59,47,0.20) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,158,44,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(127,59,47,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <ScrollReveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
              <span
                className="uppercase tracking-widest text-xs"
                style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Traveler Stories
              </span>
              <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
            </div>
            <h2
              className="text-4xl md:text-5xl text-white"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Happy Travelers,{' '}
              <span style={{ color: '#EC9E2C', fontStyle: 'italic' }}>Beautiful Memories</span>
            </h2>
            <p
              className="mt-4 max-w-md mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.96rem', color: 'rgba(255,255,255,0.55)' }}
            >
              Real experiences from travelers who trusted us with their journeys
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel — full width, no horizontal padding */}
      <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
        <div
          className="testimonial-track flex"
          style={{ gap: '20px', width: 'max-content', padding: '12px 0' }}
        >
          {doubled.map((testimonial, index) => (
            <div
              key={index}
              style={{ width: '370px', flexShrink: 0 }}
            >
              <div
                className="h-full flex flex-col p-7 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.055)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(236,158,44,0.18)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 8px 40px rgba(0,0,0,0.30)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(236,158,44,0.40)';
                  el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.14), 0 16px 50px rgba(127,59,47,0.25)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(236,158,44,0.18)';
                  el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.10), 0 8px 40px rgba(0,0,0,0.30)';
                }}
              >
                {/* Large decorative quote */}
                <div
                  className="mb-4 leading-none select-none"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 800,
                    fontSize: '4.5rem',
                    color: testimonial.color,
                    opacity: 0.25,
                    lineHeight: 0.8,
                  }}
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#EC9E2C' }} />
                  ))}
                </div>

                {/* Review text */}
                <p
                  className="flex-1 mb-6 leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.80)',
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.review}"
                </p>

                {/* Footer */}
                <div
                  className="flex items-center gap-3 pt-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: testimonial.color, color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.8rem' }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: 'rgba(255,255,255,0.92)' }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.75rem', color: '#EC9E2C' }}>
                      Traveled to {testimonial.destination}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
