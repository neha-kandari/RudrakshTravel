import { Plane, Phone } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ minHeight: '380px' }}
        >
          {/* Background image */}
          <img
            src="/optimized/img_88d47b6f.webp"
            alt="Travel background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(127,59,47,0.92) 0%, rgba(8,7,6,0.85) 60%, rgba(8,7,6,0.70) 100%)' }}
          />

          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(236,158,44,0.15) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(236,158,44,0.10) 0%, transparent 70%)' }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 md:py-20">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
              <span className="uppercase tracking-widest text-xs text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Start Your Journey
              </span>
              <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Ready for Your{' '}
              <span style={{ color: '#EC9E2C', fontStyle: 'italic' }}>Next Adventure?</span>
            </h2>

            <p
              className="text-white/70 max-w-xl mb-10 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.05rem' }}
            >
              Let Rudraksh Travels craft a smooth, comfortable, and unforgettable travel experience tailored just for you.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/919896685095?text=Hello%20Rudraksh%20Travels,%20I%20would%20like%20to%20plan%20my%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                style={{
                  background: '#EC9E2C',
                  color: '#080706',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                <Plane className="w-4 h-4 transition-transform group-hover:rotate-12" />
                Plan My Trip
              </a>
              <a
                href="tel:+919896685095"
                className="flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/20"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
