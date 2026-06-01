import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowUp } from 'lucide-react';

export function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Outlet />
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #7F3B2F, #A8522A)',
          border: '1.5px solid rgba(236,158,44,0.4)',
          color: 'white',
          boxShadow: '0 4px 20px rgba(127,59,47,0.4)',
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
