import { MapPin, Calendar, Users, Compass, Sparkles } from 'lucide-react';

export function CustomTripPlanner() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(127,59,47,0.06) 0%, rgba(236,158,44,0.04) 100%)' }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'var(--color-card)',
            border: '1px solid rgba(236,158,44,0.25)',
            boxShadow: '0 30px 80px rgba(127,59,47,0.12)',
          }}
        >
          {/* Header bar */}
          <div
            className="px-8 md:px-10 py-6"
            style={{ background: 'linear-gradient(135deg, #7F3B2F, #9E4A38)', borderBottom: '1px solid rgba(236,158,44,0.3)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(236,158,44,0.2)', border: '1px solid rgba(236,158,44,0.3)' }}
              >
                <Sparkles className="w-5 h-5" style={{ color: '#EC9E2C' }} />
              </div>
              <div>
                <h2
                  className="text-white"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.35rem' }}
                >
                  Plan Your Custom Trip
                </h2>
                <p
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.8rem' }}
                >
                  Tell us your preferences and we'll craft the perfect itinerary for you
                </p>
              </div>
            </div>
          </div>

          {/* Form body */}
          <div className="px-8 md:px-10 py-7">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              {/* Destination */}
              <div className="relative">
                <MapPin
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  style={{ color: '#7F3B2F' }}
                />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{
                    background: 'var(--color-muted)',
                    border: '1.5px solid transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                />
              </div>

              {/* Travel Type */}
              <div className="relative">
                <Compass
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  style={{ color: '#7F3B2F' }}
                />
                <select
                  className="w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-all appearance-none"
                  style={{
                    background: 'var(--color-muted)',
                    border: '1.5px solid transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                >
                  <option>Travel Type</option>
                  <option>Family Vacation</option>
                  <option>Honeymoon</option>
                  <option>Spiritual Journey</option>
                  <option>Adventure</option>
                  <option>Luxury</option>
                  <option>Group Tour</option>
                </select>
              </div>

              {/* Month */}
              <div className="relative">
                <Calendar
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  style={{ color: '#7F3B2F' }}
                />
                <select
                  className="w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-all appearance-none"
                  style={{
                    background: 'var(--color-muted)',
                    border: '1.5px solid transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                >
                  <option>Travel Month</option>
                  {['January','February','March','April','May','June','July','August','September','October','November','December'].map(m => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Travelers */}
              <div className="relative">
                <Users
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  style={{ color: '#7F3B2F' }}
                />
                <input
                  type="number"
                  placeholder="No. of Travelers"
                  min="1"
                  className="w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{
                    background: 'var(--color-muted)',
                    border: '1.5px solid transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'var(--color-foreground)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(236,158,44,0.5)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'transparent'; }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                className="w-full sm:w-auto px-10 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #7F3B2F, #A8522A)',
                  border: '1.5px solid rgba(236,158,44,0.4)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                Request Custom Plan
              </button>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.5 }}>
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
