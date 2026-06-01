import { Target, Eye } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const stats = [
  { value: '5,000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Destinations' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const cards = [
  {
    icon: Target,
    label: 'Our Mission',
    title: 'Our Mission',
    description: 'To make travel easy, affordable, and memorable through trusted service, personalized planning, and complete customer satisfaction — turning every trip into a story worth telling.',
    accent: '#7F3B2F',
  },
  {
    icon: Eye,
    label: 'Our Vision',
    title: 'Our Vision',
    description: 'To become India\'s most trusted travel partner by turning dream destinations into beautiful lifelong memories — one journey at a time.',
    accent: '#EC9E2C',
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Column */}
          <ScrollReveal direction="left" className="relative h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Travel Experience"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(127,59,47,0.4) 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating Stats Card */}
            <div
              className="absolute -right-2 md:-right-6 top-6 md:top-12 rounded-xl md:rounded-2xl p-3 md:p-5 shadow-2xl z-10"
              style={{
                background: 'linear-gradient(135deg, #7F3B2F, #9E4A38)',
                border: '1px solid rgba(236,158,44,0.3)',
              }}
            >
              <p
                className="text-white/60 mb-2 md:mb-3 uppercase tracking-widest text-[0.55rem] md:text-[0.65rem]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Trust & Excellence
              </p>
              {stats.slice(0, 2).map((stat, i) => (
                <div key={i} className={i > 0 ? 'mt-2 pt-2 md:mt-3 md:pt-3 border-t border-white/15' : ''}>
                  <p
                    className="text-white text-[1.2rem] md:text-[1.6rem]"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/60 text-[0.6rem] md:text-[0.72rem]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Floating Second Card */}
            <div
              className="absolute -left-2 md:-left-4 -bottom-4 md:-bottom-6 rounded-xl md:rounded-2xl p-3 md:p-5 shadow-2xl z-10"
              style={{
                background: 'var(--color-card)',
                border: '1px solid rgba(236,158,44,0.3)',
              }}
            >
              {stats.slice(2).map((stat, i) => (
                <div key={i} className={i > 0 ? 'mt-2 pt-2 md:mt-3 md:pt-3 border-t border-muted' : ''}>
                  <p
                    className="text-[1.2rem] md:text-[1.6rem]"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, lineHeight: 1, color: '#EC9E2C' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[0.6rem] md:text-[0.72rem]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'var(--color-foreground)', opacity: 0.55 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <ScrollReveal direction="right" delay={0.15} className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
                <span
                  className="uppercase tracking-widest text-xs"
                  style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  About Rudraksh Travels
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl mb-5 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
              >
                Where Every Journey<br />
                <span style={{ color: '#7F3B2F', fontStyle: 'italic' }}>Becomes a Memory</span>
              </h2>
              <p
                className="leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.05rem', color: 'var(--color-foreground)', opacity: 0.7 }}
              >
                At Rudraksh Travels, we believe travel is not just about reaching a destination — it is about creating memories, exploring new places, and enjoying every journey with comfort and confidence.
              </p>
              <p
                className="leading-relaxed mt-4"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.05rem', color: 'var(--color-foreground)', opacity: 0.7 }}
              >
                From planning to booking, we take care of everything so travelers can simply enjoy the experience.
              </p>
            </div>

            {/* Mission / Vision / Values cards */}
            <div className="space-y-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(236,158,44,0.16)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(236,158,44,0.42)';
                    el.style.boxShadow = `0 8px 28px rgba(127,59,47,0.12), inset 0 1px 0 rgba(255,255,255,0.12)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(236,158,44,0.16)';
                    el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.10)';
                  }}
                >
                  {/* icon badge */}
                  <div
                    className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: `rgba(${card.accent === '#EC9E2C' ? '236,158,44' : card.accent === '#7F3B2F' ? '127,59,47' : '168,82,42'},0.14)`,
                      border: `1px solid rgba(${card.accent === '#EC9E2C' ? '236,158,44' : card.accent === '#7F3B2F' ? '127,59,47' : '168,82,42'},0.30)`,
                    }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: card.accent }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* thin accent line */}
                    <div
                      className="w-6 h-0.5 rounded-full mb-2"
                      style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
                    />
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--color-foreground)',
                      }}
                    >
                      {card.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '0.84rem',
                        color: 'var(--color-foreground)',
                        opacity: 0.62,
                        lineHeight: 1.65,
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
