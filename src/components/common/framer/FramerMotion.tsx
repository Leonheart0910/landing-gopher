import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import { scrollEffect } from './effects/scrollEffect';

type TEffects = 'scrollEffect' | 'graphEffect';

export interface IFramerMotion {
  readonly children?: ReactNode;
  readonly duration?: number;
  readonly delay?: number;
  readonly type?: TEffects;
  readonly graph?: number;
  readonly className?: string;
}

const FramerMotion = ({ children, duration = 0.5, delay = 0, className, type = 'scrollEffect', graph }: IFramerMotion) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const effects = {
    scrollEffect,
    graphEffect: { initial: { height: 0 }, animate: { height: `${graph}px` } },
  };
  const currentEffect = effects[type];
  return (
    <motion.div ref={ref} className={className} initial={currentEffect.initial} animate={inView ? currentEffect.animate : {}} transition={{ duration, delay }}>
      {children}
    </motion.div>
  );
};

export { FramerMotion };
