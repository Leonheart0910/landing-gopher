import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface IFramerMotion {
  readonly children: ReactNode;
  readonly duration?: number;
  readonly delay?: number;
  readonly className?: string;
}

const FramerMotion = ({ children, duration = 0.5, delay = 0, className }: IFramerMotion) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 45 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration, delay }}>
      {children}
    </motion.div>
  );
};

export { FramerMotion };
