import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--color-muted)', opacity: 0.3 }} />
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'rgba(236,158,44,0.14)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'rgba(127,59,47,0.13)' }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
            <span className="uppercase tracking-widest text-xs" style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Our Purpose
            </span>
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
          </div>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
            Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div
            className="relative rounded-3xl overflow-hidden group"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              background: 'linear-gradient(135deg, rgba(127,59,47,0.55) 0%, rgba(92,40,32,0.45) 100%)',
              border: '1px solid rgba(236,158,44,0.28)',
              boxShadow: '0 8px 40px rgba(127,59,47,0.22), inset 0 1px 0 rgba(255,255,255,0.10)',
            }}
          >
            {/* top shimmer line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(236,158,44,0.6), transparent)' }}
            />
            {/* large faded number */}
            <div
              className="absolute -bottom-4 -right-2 leading-none select-none pointer-events-none"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '8rem', color: 'rgba(236,158,44,0.08)' }}
            >
              01
            </div>

            <div className="p-9 relative">
              {/* icon badge */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: 'rgba(236,158,44,0.18)',
                  border: '1px solid rgba(236,158,44,0.4)',
                  boxShadow: '0 4px 16px rgba(236,158,44,0.18)',
                }}
              >
                <Target className="w-6 h-6" style={{ color: '#EC9E2C' }} />
              </div>

              {/* thin gold accent bar */}
              <div className="w-10 h-0.5 mb-5 rounded-full" style={{ background: 'linear-gradient(90deg, #EC9E2C, rgba(236,158,44,0.3))' }} />

              <h3
                className="mb-4 text-white"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.6rem' }}
              >
                Our Mission
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.97rem', color: 'rgba(255,255,255,0.78)', lineHeight: '1.75' }}
              >
                To make travel easy, affordable, and memorable through trusted service, personalized planning, and complete customer satisfaction — turning every trip into a story worth telling.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="relative rounded-3xl overflow-hidden group"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(236,158,44,0.22)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            {/* top shimmer line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(236,158,44,0.45), transparent)' }}
            />
            {/* large faded number */}
            <div
              className="absolute -bottom-4 -right-2 leading-none select-none pointer-events-none"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '8rem', color: 'rgba(127,59,47,0.09)' }}
            >
              02
            </div>

            <div className="p-9 relative">
              {/* icon badge */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: 'rgba(127,59,47,0.15)',
                  border: '1px solid rgba(127,59,47,0.35)',
                  boxShadow: '0 4px 16px rgba(127,59,47,0.15)',
                }}
              >
                <Eye className="w-6 h-6" style={{ color: '#7F3B2F' }} />
              </div>

              {/* thin accent bar */}
              <div className="w-10 h-0.5 mb-5 rounded-full" style={{ background: 'linear-gradient(90deg, #7F3B2F, rgba(127,59,47,0.25))' }} />

              <h3
                className="mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.6rem', color: 'var(--color-foreground)' }}
              >
                Our Vision
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.97rem', color: 'var(--color-foreground)', opacity: 0.72, lineHeight: '1.75' }}
              >
                To become India's most trusted travel partner by turning dream destinations into beautiful lifelong memories — one journey at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
