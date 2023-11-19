import { motion } from 'framer-motion';

import { pageEffect } from '@/components/common/framer/effects/pageEffect';
import Introduce from '@/components/introduce';
import { Layout } from '@/components/layout/Layout';
import { LayoutEmpty } from '@/components/layout/LayoutEmpty';

const Index = () => (
  <LayoutEmpty>
    <Layout>
      <motion.div initial="initial" animate="in" exit="out" transition={{ duration: 1.2 }} variants={pageEffect}>
        <Introduce />
      </motion.div>
    </Layout>
  </LayoutEmpty>
);

export default Index;
