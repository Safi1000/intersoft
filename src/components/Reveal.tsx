import { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  durationMs?: number;
  className?: string;
}>;

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({ children, delay = 0, y = 24, durationMs = 350, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: durationMs / 1000, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type RevealContainerProps = PropsWithChildren<{ staggerMs?: number; className?: string }>;

export function RevealContainer({ children, staggerMs = 100, className }: RevealContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{}}
      transition={{ staggerChildren: staggerMs / 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;

