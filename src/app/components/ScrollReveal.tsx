import { motion } from 'motion/react';
import { ReactNode, CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  style?: CSSProperties;
  amount?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
  amount = 0.15,
}: ScrollRevealProps) {
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 48 : direction === 'down' ? -48 : 0,
    x: direction === 'left' ? -48 : direction === 'right' ? 48 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
