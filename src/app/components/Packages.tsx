import { useState, useEffect } from 'react';


const internationalPackages = [
  { name: 'Singapore', duration: '4N/5D', image: '/optimized/img_b687b517.webp', description: 'Modern city with stunning architecture', tag: 'Popular' },
  { name: 'Dubai', duration: '4N/5D', image: '/optimized/img_dfb84508.webp', description: 'Luxury shopping and desert adventures', tag: 'Bestseller' },
  { name: 'Europe', duration: '11N/12D', image: '/optimized/img_cb73600f.webp', description: 'Explore historic cities and culture', tag: 'Premium' },
  { name: 'Malaysia', duration: '4N/5D', image: '/optimized/img_d20d11d5.webp', description: 'Tropical paradise and vibrant cities', tag: null },
  { name: 'Vietnam', duration: '5N/6D', image: '/optimized/img_ea56c3ef.webp', description: 'Rich culture and stunning landscapes', tag: null },
  { name: 'Bali', duration: '6N/7D', image: '/optimized/img_7b83f761.webp', description: 'Island paradise with beautiful beaches', tag: 'Popular' },
  { name: 'Thailand', duration: '4N/5D', image: '/optimized/img_94ec7aa4.webp', description: 'Temples, beaches, and delicious food', tag: null },
  { name: 'New Zealand', duration: '6N/7D', image: '/optimized/img_6a5cccc4.webp', description: 'Breathtaking natural beauty', tag: 'Premium' },
  { name: 'Nepal', duration: '4N/5D', image: '/optimized/img_2efb9ac3.webp', description: 'Himalayan adventures and spirituality', tag: null },
  { name: 'Maldives', duration: '3N/4D', image: '/optimized/img_304bcd51.webp', description: 'Luxury resorts and crystal waters', tag: 'Bestseller' },
  { name: 'Sri Lanka', duration: '4N/5D', image: '/optimized/img_3d0a1fd9.webp', description: 'Tea plantations and ancient ruins', tag: null },
  { name: 'Mauritius', duration: '3N/4D', image: '/optimized/img_919db699.webp', description: 'Tropical beaches and coral reefs', tag: null },
  { name: 'Japan', duration: '7N/8D', image: '/optimized/img_cfa566b9.webp', description: 'Blend of tradition and modernity', tag: 'Premium' },
  { name: 'Australia', duration: '5N/6D', image: '/optimized/img_24c6860c.webp', description: 'Iconic landmarks and natural wonders', tag: null },
  { name: 'China', duration: '4N/5D', image: '/optimized/img_a8a9f8c5.webp', description: 'Ancient wonders and modern marvels', tag: null },
];

const indiaPackages = [
  { name: 'Kashmir', duration: '3N/4D', image: '/optimized/img_7052c5e0.webp', description: 'Paradise on Earth with snow-capped peaks', tag: 'Bestseller' },
  { name: 'Goa', duration: '3N/4D', image: '/optimized/img_6f7b4199.webp', description: 'Beaches, nightlife, and Portuguese heritage', tag: 'Popular' },
  { name: 'Kerala', duration: '5N/6D', image: '/optimized/img_5b89de0a.webp', description: 'Backwaters, spices, and lush greenery', tag: null },
  { name: 'Sikkim & Gangtok', duration: '5N/6D', image: '/optimized/img_cb10504a.webp', description: 'Himalayan beauty and Buddhist culture', tag: null },
  { name: 'Leh Ladakh', duration: '5N/6D', image: '/optimized/img_028471e3.webp', description: 'High-altitude desert and monasteries', tag: 'Adventure' },
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

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.includes('packages-india')) {
        setActiveTab('india');
      } else if (hash.includes('packages-international')) {
        setActiveTab('international');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const packages = activeTab === 'international' ? internationalPackages : indiaPackages;

  return (
    <section id="packages" className="relative scroll-mt-24 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div id="packages-international" className="absolute top-0 w-full" style={{ marginTop: '-6rem' }} />
      <div id="packages-india" className="absolute top-0 w-full" style={{ marginTop: '-6rem' }} />
      <div className="max-w-7xl mx-auto relative z-10">
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
