import { Link } from 'react-router';
import { Mail, Phone, MapPin, Compass, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'Packages', href: '/#packages', isRoute: false },
  { name: 'About Us', href: '/#about', isRoute: false },
  { name: 'Why Choose Us', href: '/#why-choose-us', isRoute: false },
  { name: 'Contact', href: '/contact', isRoute: true },
];

const packageLinks = [
  { name: 'International Tours', href: '/#packages-international' },
  { name: 'India Tours', href: '/#packages-india' },
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
                { icon: Mail, text: 'rudrakshfly@gmail.com', href: 'mailto:rudrakshfly@gmail.com' },
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
              Developed by{' '}
              <a 
                href="https://www.xpanix.com/" 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: '#EC9E2C', textDecoration: 'none' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
              >
                Xpanix
              </a>
              {' '} | WhatsApp:{' '}
              <a
                href="https://wa.me/918930005190"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#EC9E2C', textDecoration: 'none' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
              >
                +91 89300 05190
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
