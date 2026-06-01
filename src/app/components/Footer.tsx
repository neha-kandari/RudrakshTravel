import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Compass, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'Packages', href: '/#packages', isRoute: false },
  { name: 'About Us', href: '/#about', isRoute: false },
  { name: 'Why Choose Us', href: '/#why-choose-us', isRoute: false },
  { name: 'Contact', href: '/contact', isRoute: true },
];

const packageLinks = [
  { name: 'International Tours', href: '/#packages' },
  { name: 'India Tours', href: '/#packages' },
  { name: 'Honeymoon Packages', href: '/#packages' },
  { name: 'Family Vacations', href: '/#packages' },
  { name: 'Luxury Escapes', href: '/#packages' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer style={{ background: '#0D0B09', color: '#F8F1E7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7F3B2F, #EC9E2C)' }}
              >
                <Compass className="w-4 h-4 text-white" />
              </div>
              <div>
                <span
                  className="block leading-none"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem' }}
                >
                  Rudraksh Travels
                </span>
                <span
                  className="block"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.12em', color: '#EC9E2C', textTransform: 'uppercase' }}
                >
                  Travel More. Worry Less.
                </span>
              </div>
            </div>

            <p
              className="mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(248,241,231,0.6)' }}
            >
              Creating smooth, personalized, and memorable journeys for travelers around the world — one destination at a time.
            </p>

            <div className="flex gap-2.5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(236,158,44,0.12)', border: '1px solid rgba(236,158,44,0.2)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#EC9E2C';
                    (e.currentTarget as HTMLElement).style.borderColor = '#EC9E2C';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(236,158,44,0.12)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(236,158,44,0.2)';
                  }}
                >
                  <social.icon className="w-4 h-4" style={{ color: '#EC9E2C' }}
                    onMouseEnter={(e) => { (e.currentTarget as SVGElement).style.color = '#080706'; }}
                    onMouseLeave={(e) => { (e.currentTarget as SVGElement).style.color = '#EC9E2C'; }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#EC9E2C' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                const linkContent = (
                  <>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" style={{ color: '#EC9E2C', flexShrink: 0 }} />
                    {link.name}
                  </>
                );

                return (
                  <li key={index}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="flex items-center gap-2 transition-colors duration-200 group"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.875rem', color: 'rgba(248,241,231,0.65)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#EC9E2C'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(248,241,231,0.65)'; }}
                      >
                        {linkContent}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="flex items-center gap-2 transition-colors duration-200 group"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.875rem', color: 'rgba(248,241,231,0.65)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#EC9E2C'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(248,241,231,0.65)'; }}
                      >
                        {linkContent}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#EC9E2C' }}
            >
              Our Packages
            </h4>
            <ul className="space-y-3">
              {packageLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 transition-colors duration-200 group"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.875rem', color: 'rgba(248,241,231,0.65)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#EC9E2C'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(248,241,231,0.65)'; }}
                  >
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" style={{ color: '#EC9E2C', flexShrink: 0 }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#EC9E2C' }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+91 70571 70000', href: 'tel:+917057170000' },
                { icon: Phone, text: '+91 82229 44440', href: 'tel:+918222944440' },
                { icon: Mail, text: 'info@rudrakshtravels.com', href: 'mailto:info@rudrakshtravels.com' },
                { icon: MapPin, text: '3rd Floor, MG Equity Mall, Sanjay Chowk, Grand Trunk Rd, Netaji Colony, Panipat, Haryana 132103', href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-3 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(236,158,44,0.1)' }}
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: '#EC9E2C' }} />
                  </div>
                  <p
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.85rem', color: 'rgba(248,241,231,0.65)', lineHeight: 1.5 }}
                  >
                    {item.text}
                  </p>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919896685095"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #25D366, #1DA851)',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.527 5.847L.057 23.75l6.063-1.59A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.37l-.36-.213-3.732.979 1.003-3.648-.234-.376A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(236,158,44,0.15)' }}
        >
          <p
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.8rem', color: 'rgba(248,241,231,0.45)' }}
          >
            &copy; {new Date().getFullYear()} Rudraksh Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#EC9E2C' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.8rem', color: 'rgba(248,241,231,0.45)' }}>
              Crafting journeys with ❤️ from Panipat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
