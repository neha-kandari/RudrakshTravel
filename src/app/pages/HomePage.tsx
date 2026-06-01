import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Packages } from '../components/Packages';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TravelCategories } from '../components/TravelCategories';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  useEffect(() => {
    // Determine if we arrived with a hash fragment (e.g. /#packages)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Hero />
      <Packages />
      <About />
      <WhyChooseUs />
      <TravelCategories />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
