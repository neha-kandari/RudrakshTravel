import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X, Sun, Moon } from 'lucide-react';


interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const navLinks = [
  { name: 'Home',     href: '/',               id: 'home',          isRoute: true },
  { name: 'Packages', href: '/#packages',      id: 'packages',      isRoute: false },
  { name: 'About',    href: '/#about',         id: 'about',         isRoute: false },
  { name: 'Why Us',   href: '/#why-choose-us', id: 'why-choose-us', isRoute: false },
  { name: 'Contact',  href: '/contact',        id: 'contact',       isRoute: true },
];

export function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isDarkMode
          ? 'rgba(18,14,12,0.6)'
          : 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(236,158,44,0.15)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/*
          3-column grid: logo | nav-capsule | controls
          The middle column is `auto` so the capsule is truly centered.
        */}
        <div
          className="grid items-center h-20 md:h-24"
          style={{ gridTemplateColumns: '1fr auto 1fr' }}
        >
          {/* ── LEFT: Logo ── */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/Rudraksh_Travels_Logo.png"
                alt="Rudraksh Travels"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* ── CENTER: Nav links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const linkStyles = {
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '0.9rem',
                letterSpacing: '0.01em',
                color: 'var(--color-foreground)',
                textDecoration: 'none',
              };

              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="py-2 transition-all duration-300 hover:opacity-70"
                  style={linkStyles}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 transition-all duration-300 hover:opacity-70"
                  style={linkStyles}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* ── RIGHT: Toggle + CTA ── */}
          <div className="flex items-center gap-3 justify-end">
            {/* theme toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(236,158,44,0.12)',
                border: '1px solid rgba(236,158,44,0.28)',
              }}
              aria-label="Toggle theme"
            >
              {isDarkMode
                ? <Sun  className="w-4 h-4" style={{ color: '#EC9E2C' }} />
                : <Moon className="w-4 h-4" style={{ color: '#7F3B2F' }} />}
            </button>

            {/* CTA — desktop only */}
            <a
              href="https://wa.me/919896685095?text=Hello%20Rudraksh%20Travels,%20I%20would%20like%20to%20plan%20my%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #7F3B2F, #A8522A)',
                border: '1.5px solid rgba(236,158,44,0.55)',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.84rem',
                whiteSpace: 'nowrap',
              }}
            >
              Plan My Trip
            </a>

            {/* mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden absolute top-1/2 -translate-y-1/2 right-2 p-2 rounded-lg z-[60]"
              style={{ color: 'var(--color-foreground)' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 right-0 h-[50vh] w-[40%] overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: isDarkMode ? 'rgba(18,14,12,0.98)' : 'rgba(255,253,245,0.98)',
          borderLeft: '1px solid rgba(236,158,44,0.2)',
          borderBottom: '1px solid rgba(236,158,44,0.2)',
          borderBottomLeftRadius: '16px',
        }}
      >
        <div className="px-6 py-5 space-y-1">
          {navLinks.map((link) => {
            const mobileLinkStyles = {
              borderColor: 'rgba(236,158,44,0.12)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: 'var(--color-foreground)',
            };

            return link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center gap-2 py-3 border-b transition-colors"
                style={mobileLinkStyles}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span style={{ color: '#7F3B2F' }}>→</span>
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 py-3 border-b transition-colors"
                style={mobileLinkStyles}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span style={{ color: '#7F3B2F' }}>→</span>
                {link.name}
              </a>
            );
          })}
          <a
            href="https://wa.me/919896685095?text=Hello%20Rudraksh%20Travels,%20I%20would%20like%20to%20plan%20my%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center mt-4 px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #7F3B2F, #A8522A)',
              border: '1.5px solid #EC9E2C',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Plan My Trip
          </a>
        </div>
      </div>
    </nav>
  );
}
