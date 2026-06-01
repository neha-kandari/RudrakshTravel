import { useState, useEffect } from 'react';

const destinations = [
  {
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBNYXJpbmElMjBCYXl8ZW58MXx8fHwxNzgwMDc1NTMzfDA&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxEdWJhaSUyMEJ1cmolMjBLaGFsaWZhfGVufDF8fHx8MTc4MDA3NTUzM3ww&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Europe',
    image: 'https://images.unsplash.com/photo-1570097703229-b195d6dd291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJpcyUyMEVpZmZlbCUyMFRvd2VyJTIwRXVyb3BlfGVufDF8fHx8MTc4MDA3NTUzM3ww&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwSW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc4MDA3NTU0M3ww&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpbGFuZCUyMEJhbmdrb2slMjB0ZW1wbGV8ZW58MXx8fHwxNzgwMDc1NTQzfDA&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMHJlc29ydCUyMHdhdGVyJTIwdmlsbGF8ZW58MXx8fHwxNzgwMDc1NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Japan',
    image: 'https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMFRva3lvJTIwTW91bnQlMjBGdWppfGVufDF8fHx8MTc4MDA3NTU1Mnww&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Kashmir',
    image: 'https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBEYWwlMjBMYWtlfGVufDF8fHx8MTc4MDA3NTU1M3ww&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1652820330085-82a0c2b88d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNofGVufDF8fHx8MTc4MDA3NTU1M3ww&ixlib=rb-4.1.0&q=80&w=1920',
  },
  {
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnN8ZW58MXx8fHwxNzgwMDc1NTU0fDA&ixlib=rb-4.1.0&q=80&w=1920',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section id="home" className="relative overflow-hidden" style={{ height: '80vh', minHeight: '550px' }}>
      {/* Background Slides */}
      {destinations.map((destination, index) => (
        <div
          key={destination.name}
          className="absolute inset-0 transition-all duration-1000"
          style={{
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
            zIndex: index === currentSlide ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out, transform 6s ease-out',
          }}
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Layered Gradient Overlay */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(to right, rgba(8,7,6,0.80) 0%, rgba(8,7,6,0.45) 60%, rgba(8,7,6,0.15) 100%)',
      }} />
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(to top, rgba(8,7,6,0.90) 0%, transparent 50%)',
      }} />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-16 pt-32">
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Main Heading */}
          <div className="overflow-hidden mb-3">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Explore the World
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontStyle: 'italic', color: '#EC9E2C' }}
            >
              With Elegance
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#packages"
              className="group px-6 py-2.5 rounded-full text-[#080706] transition-all duration-300 shadow-2xl relative overflow-hidden text-sm"
              style={{ background: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              <span className="relative z-10">Explore Packages</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a
              href="https://wa.me/919896685095?text=Hello%20Rudraksh%20Travels,%20I%20would%20like%20to%20plan%20a%20custom%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-white border-2 border-white/40 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Plan Custom Trip
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
