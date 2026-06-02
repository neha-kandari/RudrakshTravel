import { Users, DollarSign, Shield, Smile, Heart, Plane } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const features = [
  { icon: Users,       title: 'Personalized Planning', description: 'Customized itineraries tailored precisely to your needs, preferences, and budget' },
  { icon: DollarSign,  title: 'Best Value Packages',   description: 'Competitive pricing without compromising on quality or experience' },
  { icon: Shield,      title: '24/7 Support',           description: 'Round-the-clock assistance and guidance from our travel experts' },
  { icon: Smile,       title: 'Comfortable Journeys',   description: 'Premium accommodations, smooth logistics, and seamless travel experience' },
  { icon: Heart,       title: 'Customer First',         description: 'Your happiness is our mission — we go above and beyond every time' },
  { icon: Plane,       title: 'Passionate Team',        description: 'A team of travel enthusiasts who love what they do and it shows' },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction' },
];

const doubled = [...features, ...features];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-24 py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <style>{`
        @keyframes wcu-scroll {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .wcu-track {
          animation: wcu-scroll 14s linear infinite;
        }
        .wcu-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient blobs */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'rgba(127,59,47,0.10)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'rgba(236,158,44,0.08)' }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT: Visual Panel ── */}
          <ScrollReveal direction="left" className="relative flex justify-center">
            {/* decorative circle behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(127,59,47,0.22) 0%, rgba(236,158,44,0.08) 60%, transparent 80%)',
                filter: 'blur(2px)',
              }}
            />

            {/* floating gold ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[390px] h-[390px] rounded-full pointer-events-none"
              style={{ border: '1.5px dashed rgba(236,158,44,0.28)' }}
            />

            {/* photo card */}
            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: '320px',
                height: '420px',
                borderRadius: '180px 180px 120px 120px',
                boxShadow: '0 32px 80px rgba(127,59,47,0.28), 0 0 0 6px rgba(236,158,44,0.18)',
              }}
            >
              <img
                src="/optimized/img_a7118768.webp"
                alt="Travel adventure"
                className="w-full h-full object-cover"
              />
              {/* gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(26,14,10,0.65) 100%)' }}
              />
            </div>

            {/* stats pills — bottom center of image */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="px-4 py-2 rounded-full text-center"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(236,158,44,0.35)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                    minWidth: '90px',
                  }}
                >
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.15rem', color: '#EC9E2C' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.7rem', color: 'rgba(255,255,255,0.82)', letterSpacing: '0.04em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* small floating badge — top right */}
            <div
              className="absolute top-6 -right-2 z-20 px-4 py-2 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #7F3B2F, #A8522A)',
                border: '1px solid rgba(236,158,44,0.4)',
                boxShadow: '0 8px 24px rgba(127,59,47,0.35)',
              }}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: 'white', letterSpacing: '0.03em' }}>
                ✈ Since 2016
              </div>
            </div>
          </ScrollReveal>

          {/* ── RIGHT: Content + Scrolling Features ── */}
          <ScrollReveal direction="right" delay={0.15}>
            {/* section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
              <span
                className="uppercase tracking-widest text-xs"
                style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Why Travel With Us
              </span>
            </div>

            {/* heading */}
            <h2
              className="mb-4 text-4xl md:text-5xl"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--color-foreground)' }}
            >
              Why Choose Us
            </h2>

            {/* description */}
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '0.96rem',
                color: 'var(--color-foreground)',
                opacity: 0.65,
                maxWidth: '420px',
              }}
            >
              Discover new and affordable adventures of course and enjoy different experiences in every place you visit and explore the world with us.
            </p>

            {/* scrolling features list */}
            <div
              className="relative overflow-hidden"
              style={{ height: '276px' }}
            >
              {/* fade top & bottom */}
              <div
                className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, var(--color-background), transparent)' }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-10 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to top, var(--color-background), transparent)' }}
              />

              <div className="wcu-track">
                {doubled.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4"
                    style={{
                      borderBottom: '1px solid rgba(236,158,44,0.12)',
                    }}
                  >
                    {/* icon badge */}
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(127,59,47,0.14), rgba(236,158,44,0.10))',
                        border: '1px solid rgba(236,158,44,0.22)',
                        boxShadow: '0 2px 10px rgba(127,59,47,0.10)',
                      }}
                    >
                      <feature.icon className="w-5 h-5" style={{ color: '#7F3B2F' }} />
                    </div>

                    {/* text */}
                    <div className="flex-1 min-w-0">
                      <h4
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'var(--color-foreground)',
                          marginBottom: '2px',
                        }}
                      >
                        {feature.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '0.83rem',
                          color: 'var(--color-foreground)',
                          opacity: 0.58,
                          lineHeight: 1.55,
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* right arrow accent */}
                    <div
                      className="flex-shrink-0 self-center text-xs"
                      style={{ color: 'rgba(236,158,44,0.5)', fontFamily: 'Inter, sans-serif' }}
                    >
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
