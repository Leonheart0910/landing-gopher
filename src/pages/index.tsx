import { motion } from 'framer-motion';

import { pageEffect } from '@/components/common/framer/pageEffect';
import type { IFaqProps } from '@/components/faq/Faq';
import { fetchFaqData } from '@/components/faq/Faq';
import { Layout } from '@/components/layout/Layout';
import { LayoutEmpty } from '@/components/layout/LayoutEmpty';
import Main from '@/components/main';

const Index = ({ faqData }: IFaqProps) => (
  <LayoutEmpty>
    <Layout>
      <motion.div initial="initial" animate="in" exit="out" transition={{ duration: 0.8 }} variants={pageEffect}>
        <Main faqData={faqData} />
      </motion.div>
    </Layout>
  </LayoutEmpty>
);

export const getServerSideProps = async () => {
  const faqData = await fetchFaqData();
  return {
    props: {
      faqData,
    },
  };
};

export default Index;
