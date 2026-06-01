import { useEffect } from 'react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
