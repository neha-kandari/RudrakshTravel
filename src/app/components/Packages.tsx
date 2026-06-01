import { useState } from 'react';


const internationalPackages = [
  { name: 'Singapore', duration: '4N/5D', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBNYXJpbmElMjBCYXl8ZW58MXx8fHwxNzgwMDc1NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Modern city with stunning architecture', tag: 'Popular' },
  { name: 'Dubai', duration: '4N/5D', image: 'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxEdWJhaSUyMEJ1cmolMjBLaGFsaWZhfGVufDF8fHx8MTc4MDA3NTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Luxury shopping and desert adventures', tag: 'Bestseller' },
  { name: 'Europe', duration: '11N/12D', image: 'https://images.unsplash.com/photo-1570097703229-b195d6dd291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJpcyUyMEVpZmZlbCUyMFRvd2VyJTIwRXVyb3BlfGVufDF8fHx8MTc4MDA3NTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Explore historic cities and culture', tag: 'Premium' },
  { name: 'Malaysia', duration: '4N/5D', image: 'https://images.unsplash.com/photo-1597148543182-830ef7bbb904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYSUyMFBldHJvbmFzJTIwVG93ZXJzfGVufDF8fHx8MTc4MDA3NTUzNHww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Tropical paradise and vibrant cities', tag: null },
  { name: 'Vietnam', duration: '5N/6D', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGFsb25nJTIwQmF5fGVufDF8fHx8MTc4MDA3NTUzNHww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Rich culture and stunning landscapes', tag: null },
  { name: 'Bali', duration: '6N/7D', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwSW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc4MDA3NTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Island paradise with beautiful beaches', tag: 'Popular' },
  { name: 'Thailand', duration: '4N/5D', image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpbGFuZCUyMEJhbmdrb2slMjB0ZW1wbGV8ZW58MXx8fHwxNzgwMDc1NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Temples, beaches, and delicious food', tag: null },
  { name: 'New Zealand', duration: '6N/7D', image: 'https://images.unsplash.com/photo-1531804226530-70f8004aa44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBaZWFsYW5kJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc4MDA3NTU0NHww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Breathtaking natural beauty', tag: 'Premium' },
  { name: 'Nepal', duration: '4N/5D', image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMEhpbWFsYXlhcyUyMG1vdW50YWlufGVufDF8fHx8MTc4MDA3NTU0NHww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Himalayan adventures and spirituality', tag: null },
  { name: 'Maldives', duration: '3N/4D', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMHJlc29ydCUyMHdhdGVyJTIwdmlsbGF8ZW58MXx8fHwxNzgwMDc1NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Luxury resorts and crystal waters', tag: 'Bestseller' },
  { name: 'Sri Lanka', duration: '4N/5D', image: 'https://images.unsplash.com/photo-1585171328560-947fbd92d6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHRlYSUyMHBsYW50YXRpb24lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzgwMDc1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Tea plantations and ancient ruins', tag: null },
  { name: 'Mauritius', duration: '3N/4D', image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVyaXRpdXMlMjBiZWFjaCUyMHRyb3BpY2FsfGVufDF8fHx8MTc4MDA3NTU3NXww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Tropical beaches and coral reefs', tag: null },
  { name: 'Japan', duration: '7N/8D', image: 'https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMFRva3lvJTIwTW91bnQlMjBGdWppfGVufDF8fHx8MTc4MDA3NTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Blend of tradition and modernity', tag: 'Premium' },
  { name: 'Australia', duration: '5N/6D', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjBTeWRuZXklMjBPcGVyYSUyMEhvdXNlfGVufDF8fHx8MTc4MDA3NTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Iconic landmarks and natural wonders', tag: null },
  { name: 'China', duration: '4N/5D', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGluYSUyMEdyZWF0JTIwV2FsbHxlbnwxfHx8fDE3ODAwNzU1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Ancient wonders and modern marvels', tag: null },
];

const indiaPackages = [
  { name: 'Kashmir', duration: '3N/4D', image: 'https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBEYWwlMjBMYWtlfGVufDF8fHx8MTc4MDA3NTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Paradise on Earth with snow-capped peaks', tag: 'Bestseller' },
  { name: 'Goa', duration: '3N/4D', image: 'https://images.unsplash.com/photo-1652820330085-82a0c2b88d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNofGVufDF8fHx8MTc4MDA3NTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Beaches, nightlife, and Portuguese heritage', tag: 'Popular' },
  { name: 'Kerala', duration: '5N/6D', image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnN8ZW58MXx8fHwxNzgwMDc1NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Backwaters, spices, and lush greenery', tag: null },
  { name: 'Sikkim & Gangtok', duration: '5N/6D', image: 'https://images.unsplash.com/photo-1608942025318-1191eeade556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaWtraW0lMjBJbmRpYSUyMEhpbWFsYXlhfGVufDF8fHx8MTc4MDA3NTU1NXww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Himalayan beauty and Buddhist culture', tag: null },
  { name: 'Leh Ladakh', duration: '5N/6D', image: 'https://images.unsplash.com/photo-1708949632982-3ce4a7897825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZWglMjBMYWRha2glMjBtb25hc3RlcnklMjBtb3VudGFpbnxlbnwxfHx8fDE3ODAwNzU1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'High-altitude desert and monasteries', tag: 'Adventure' },
];

const tagStyles: Record<string, { background: string; color: string }> = {
  Bestseller: { background: '#EC9E2C', color: '#080706' },
  Popular:    { background: '#7F3B2F', color: '#ffffff' },
  Premium:    { background: '#080706', color: '#EC9E2C' },
  Adventure:  { background: '#A8522A', color: '#ffffff' },
};

interface Package {
  name: string;
  duration: string;
  image: string;
  description: string;
  tag: string | null;
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'var(--color-card)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        border: '1px solid rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = '0 12px 40px rgba(127,59,47,0.18)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Image — inset with padding, with its own rounded corners */}
      <div className="p-3 pb-0">
        <div className="relative rounded-xl overflow-hidden" style={{ height: '190px' }}>
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Tag badge */}
          {pkg.tag && (
            <div
              className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full"
              style={{
                ...(tagStyles[pkg.tag] ?? { background: '#7F3B2F', color: '#fff' }),
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
              }}
            >
              {pkg.tag}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-4">
        {/* Title */}
        <h3
          className="mb-0.5 truncate"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'var(--color-foreground)',
          }}
        >
          {pkg.name}
        </h3>

        {/* Description / subtitle */}
        <p
          className="truncate mb-4"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '0.82rem',
            color: 'var(--color-foreground)',
            opacity: 0.5,
          }}
        >
          {pkg.description}
        </p>

        {/* Bottom row: duration + Book Now */}
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--color-foreground)',
            }}
          >
            {pkg.duration}
          </span>

          <a
            href={`https://wa.me/919896685095?text=Hello%20Rudraksh%20Travels,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20package.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full transition-all duration-200 hover:opacity-85 active:scale-95 inline-block"
            style={{
              background: '#1a1a1a',
              color: '#ffffff',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.01em',
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function Packages() {
  const [activeTab, setActiveTab] = useState<'international' | 'india'>('international');

  const packages = activeTab === 'international' ? internationalPackages : indiaPackages;

  return (
    <section id="packages" className="scroll-mt-24 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
            <span
              className="uppercase tracking-widest text-xs"
              style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Curated Travel Packages
            </span>
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--color-foreground)' }}
          >
            Your Next Adventure Awaits
          </h2>
          <p
            className="max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: 'var(--color-foreground)', opacity: 0.6 }}
          >
            Handpicked packages for unforgettable experiences.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex p-1 rounded-full"
            style={{ background: 'var(--color-muted)', border: '1px solid rgba(127,59,47,0.15)' }}
          >
            {(['international', 'india'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-7 py-2.5 rounded-full transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  background: activeTab === tab ? '#7F3B2F' : 'transparent',
                  color: activeTab === tab ? 'white' : 'var(--color-foreground)',
                  boxShadow: activeTab === tab ? '0 4px 15px rgba(127,59,47,0.35)' : 'none',
                }}
              >
                {tab === 'international' ? 'International' : 'India'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid / Carousel */}
        <div 
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-auto snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {packages.map((pkg, index) => (
            <div 
              key={`${activeTab}-${index}`} 
              className="flex-none w-[80vw] max-w-[320px] sm:w-auto sm:max-w-none snap-center"
            >
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
