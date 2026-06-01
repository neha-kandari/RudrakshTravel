import { Link } from 'react-router';
import { MapPin, FileText, CheckCircle, Plane } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const steps = [
  {
    icon: MapPin,
    number: '01',
    title: 'Share Your Dream',
    description: 'Tell us your destination, travel dates, budget, and preferences. Every great journey starts with a conversation.',
    color: '#7F3B2F',
    highlight: 'Step One',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Get a Custom Plan',
    description: 'Our experts craft a personalized itinerary — hotels, transfers, activities — tailored precisely to your vision.',
    color: '#A8522A',
    highlight: 'Step Two',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Confirm & Book',
    description: 'Review every detail of your tailored plan. Once you\'re happy, we lock in all bookings and take care of everything.',
    color: '#C07030',
    highlight: 'Step Three',
  },
  {
    icon: Plane,
    number: '04',
    title: 'Travel & Enjoy',
    description: 'Embark on your dream trip worry-free. Our support team is available 24/7 throughout your entire journey.',
    color: '#EC9E2C',
    highlight: 'Step Four',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative large text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          className="text-[18vw] font-black opacity-[0.025] whitespace-nowrap"
          style={{ fontFamily: 'Playfair Display, serif', color: '#EC9E2C', letterSpacing: '-0.05em' }}
        >
          JOURNEY
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
        {/* Section header */}
        <ScrollReveal>
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #EC9E2C)' }} />
            <span
              className="uppercase tracking-widest text-xs"
              style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Simple Process
            </span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #EC9E2C, transparent)' }} />
          </div>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            How We Plan Your Journey
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'var(--color-foreground)', opacity: 0.55, lineHeight: 1.7 }}
          >
            Four effortless steps from your first idea to your unforgettable experience
          </p>
        </div>
        </ScrollReveal>

        {/* Desktop staggered timeline */}
        <div className="hidden lg:block relative">
          {/* Curved SVG path */}
          <svg
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{ height: '320px', zIndex: 0 }}
            viewBox="0 0 1000 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 60 70 C 200 10, 350 130, 500 70 C 650 10, 800 130, 940 70"
              stroke="url(#routeGrad)"
              strokeWidth="2"
              strokeDasharray="8 6"
              strokeLinecap="round"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7F3B2F" />
                <stop offset="100%" stopColor="#EC9E2C" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-6 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <ScrollReveal key={index} delay={index * 0.12} direction="up">
                <div
                  className="flex flex-col items-center group"
                  style={{ marginTop: isEven ? '80px' : '0' }}
                >
                  {/* Card */}
                  <div
                    className="relative w-full rounded-2xl p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl cursor-default"
                    style={{
                      background: 'var(--color-card, rgba(255,255,255,0.05))',
                      border: `1.5px solid ${step.color}33`,
                      backdropFilter: 'blur(12px)',
                      boxShadow: `0 4px 24px ${step.color}11`,
                    }}
                  >
                    {/* Large background number */}
                    <div
                      className="absolute top-2 right-3 select-none pointer-events-none transition-all duration-500 group-hover:opacity-20"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 900,
                        fontSize: '5rem',
                        lineHeight: 1,
                        color: step.color,
                        opacity: 0.08,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}BB)`,
                        boxShadow: `0 6px 20px ${step.color}44`,
                      }}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Step label */}
                    <span
                      className="uppercase tracking-widest text-[10px] mb-2 block"
                      style={{ color: step.color, fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      {step.highlight}
                    </span>

                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        color: 'var(--color-foreground)',
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '0.82rem',
                        color: 'var(--color-foreground)',
                        opacity: 0.6,
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Bottom color bar */}
                    <div
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                    />
                  </div>

                  {/* Connector dot */}
                  <div
                    className="mt-5 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{
                      borderColor: step.color,
                      background: `${step.color}33`,
                      boxShadow: `0 0 10px ${step.color}66`,
                    }}
                  />
                </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div
            className="absolute left-7 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, #7F3B2F, #EC9E2C)',
              opacity: 0.35,
            }}
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Icon bubble on the line */}
                <div className="flex-shrink-0 relative z-10" style={{ width: '56px' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}BB)`,
                      boxShadow: `0 4px 16px ${step.color}44`,
                    }}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: '#EC9E2C',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.6rem',
                      color: '#080706',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-5 transition-all duration-300 group-hover:shadow-xl"
                  style={{
                    background: 'var(--color-card, rgba(255,255,255,0.05))',
                    border: `1.5px solid ${step.color}33`,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <span
                    className="uppercase tracking-widest text-[10px] mb-1 block"
                    style={{ color: step.color, fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  >
                    {step.highlight}
                  </span>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'var(--color-foreground)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '0.85rem',
                      color: 'var(--color-foreground)',
                      opacity: 0.6,
                      lineHeight: 1.65,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 group"
            style={{
              background: 'linear-gradient(135deg, #7F3B2F, #9E4A38)',
              border: '1.5px solid rgba(236,158,44,0.35)',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: '0 4px 20px rgba(127,59,47,0.35)',
            }}
          >
            Start Planning Now
            <Plane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
