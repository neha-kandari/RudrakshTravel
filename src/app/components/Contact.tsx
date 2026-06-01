import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const contactItems = [
  { icon: Phone, label: 'Phone', value: '+91 98966 85095', href: 'tel:+919896685095', color: '#7F3B2F' },
  { icon: Mail, label: 'Email', value: 'info@rudrakshtravels.com', href: 'mailto:info@rudrakshtravels.com', color: '#EC9E2C' },
  { icon: MapPin, label: 'Location', value: '3rd Floor, MG Equity Mall, Sanjay Chowk, Panipat, Haryana 132103', href: '#', color: '#7F3B2F' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 98966 85095', href: 'https://wa.me/919896685095', color: '#EC9E2C' },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
            <span className="uppercase tracking-widest text-xs" style={{ color: '#EC9E2C', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Get In Touch
            </span>
            <div className="h-px w-8" style={{ background: '#EC9E2C' }} />
          </div>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
            Let's Plan Your Dream Trip
          </h2>
          <p className="mt-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'var(--color-foreground)', opacity: 0.6 }}>
            We're here to help you plan the perfect journey
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Info Column */}
          <div className="md:col-span-2 space-y-4">
            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden mb-6" style={{ height: '200px' }}>
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Contact us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(127,59,47,0.85), rgba(127,59,47,0.3))' }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.25rem' }}>
                  We'd Love to Hear From You
                </p>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.85rem' }}>
                  Your perfect journey starts with a conversation
                </p>
              </div>
            </div>

            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                style={{
                  background: 'var(--color-card)',
                  border: '1px solid rgba(127,59,47,0.1)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(236,158,44,0.35)';
                  el.style.boxShadow = '0 8px 25px rgba(127,59,47,0.1)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(127,59,47,0.1)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.5, marginBottom: '1px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-foreground)' }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form Column */}
          <div
            className="md:col-span-3 p-8 rounded-3xl"
            style={{
              background: 'var(--color-card)',
              border: '1px solid rgba(127,59,47,0.12)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.07)',
            }}
          >
            <h3 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-foreground)' }}>
              Send an Inquiry
            </h3>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.6, display: 'block', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                    style={{
                      background: 'var(--color-muted)',
                      border: '1.5px solid transparent',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: 'var(--color-foreground)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; e.target.style.background = 'var(--color-card)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--color-muted)'; }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.6, display: 'block', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                    style={{
                      background: 'var(--color-muted)',
                      border: '1.5px solid transparent',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: 'var(--color-foreground)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; e.target.style.background = 'var(--color-card)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--color-muted)'; }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.6, display: 'block', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{
                    background: 'var(--color-muted)',
                    border: '1.5px solid transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; e.target.style.background = 'var(--color-card)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--color-muted)'; }}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.6, display: 'block', marginBottom: '6px' }}>
                  Preferred Destination
                </label>
                <input
                  type="text"
                  placeholder="e.g., Maldives, Dubai, Kashmir"
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{
                    background: 'var(--color-muted)',
                    border: '1.5px solid transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; e.target.style.background = 'var(--color-card)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--color-muted)'; }}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.6, display: 'block', marginBottom: '6px' }}>
                    Travel Month
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all appearance-none"
                    style={{
                      background: 'var(--color-muted)',
                      border: '1.5px solid transparent',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: 'var(--color-foreground)',
                    }}
                  >
                    <option>Select Month</option>
                    {['January','February','March','April','May','June','July','August','September','October','November','December'].map(m => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.6, display: 'block', marginBottom: '6px' }}>
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 2"
                    min="1"
                    className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                    style={{
                      background: 'var(--color-muted)',
                      border: '1.5px solid transparent',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: 'var(--color-foreground)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; e.target.style.background = 'var(--color-card)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--color-muted)'; }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.6, display: 'block', marginBottom: '6px' }}>
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your dream trip..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all resize-none"
                  style={{
                    background: 'var(--color-muted)',
                    border: '1.5px solid transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; e.target.style.background = 'var(--color-card)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--color-muted)'; }}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #7F3B2F, #A8522A)',
                  border: '1.5px solid rgba(236,158,44,0.4)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
