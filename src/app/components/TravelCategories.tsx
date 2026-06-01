import { ScrollReveal } from './ScrollReveal';

const categories = [
  {
    num: '01',
    title: 'Family Vacations',
    subtitle: 'Safe & fun for all ages',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gridArea: 'A',
  },
  {
    num: '02',
    title: 'Honeymoon Trips',
    subtitle: 'Romance & luxury',
    image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gridArea: 'B',
  },
  {
    num: '03',
    title: 'International Tours',
    subtitle: 'Explore the world',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
    gridArea: 'C',
  },
  {
    num: '04',
    title: 'Spiritual Journeys',
    subtitle: 'Sacred & peaceful tours',
    image: 'https://images.unsplash.com/photo-1544735716-ea9ef790f501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gridArea: 'D',
  },
  {
    num: '05',
    title: 'Luxury Escapes',
    subtitle: 'Premium experiences',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gridArea: 'E',
  },
  {
    num: '06',
    title: 'Group Tours',
    subtitle: 'Social & affordable',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    gridArea: 'F',
  },
];

const gridAreaMap: Record<string, React.CSSProperties> = {
  A: { gridColumn: '1', gridRow: '1' },
  B: { gridColumn: '2', gridRow: '1 / span 2' },
  C: { gridColumn: '3 / span 2', gridRow: '1' },
  D: { gridColumn: '1', gridRow: '2' },
  E: { gridColumn: '3', gridRow: '2' },
  F: { gridColumn: '4', gridRow: '2' },
};

function CategoryCard({ cat }: { cat: typeof categories[number] }) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      style={{
        ...gridAreaMap[cat.gridArea],
        borderRadius: '16px',
      }}
    >
      {/* Background image */}
      <img
        src={cat.image}
        alt={cat.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(8,7,6,0.82) 0%, rgba(8,7,6,0.15) 55%, rgba(8,7,6,0.05) 100%)',
        }}
      />

      {/* Number badge — top left */}
      <div
        className="absolute top-3 left-3 z-10"
        style={{
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '999px',
          padding: '3px 10px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '0.72rem',
          color: 'white',
          letterSpacing: '0.04em',
        }}
      >
        {cat.num}
      </div>

      {/* Text — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <p
          className="leading-tight mb-0.5"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: 'white',
          }}
        >
          {cat.title}
        </p>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          {cat.subtitle}
        </p>
      </div>
    </div>
  );
}

export function TravelCategories() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--color-muted)', opacity: 0.25 }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
            <span
              className="uppercase tracking-widest text-xs"
              style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Travel Styles
            </span>
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
          </div>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            How Would You Like to Travel?
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              color: 'var(--color-foreground)',
              opacity: 0.6,
            }}
          >
            Whatever your travel style, we have the perfect journey waiting for you
          </p>
        </div>
        </ScrollReveal>

        {/* Desktop Grid — matches the reference layout */}
        <ScrollReveal delay={0.15}>
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '280px 190px',
            gap: '12px',
          }}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.gridArea} cat={cat} />
          ))}
        </div>
        </ScrollReveal>

        {/* Mobile fallback — simple 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.gridArea}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              style={{ height: '180px' }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(8,7,6,0.80) 0%, transparent 60%)' }}
              />
              <div
                className="absolute top-2.5 left-2.5 z-10"
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '999px',
                  padding: '2px 9px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.68rem',
                  color: 'white',
                }}
              >
                {cat.num}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                <p
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'white',
                  }}
                >
                  {cat.title}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  {cat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
