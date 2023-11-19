import { motion } from 'framer-motion';

import { pageEffect } from '@/components/common/framer/effects/pageEffect';
import { fetchFaqData } from '@/components/faq/Faq';
import { Layout } from '@/components/layout/Layout';
import { LayoutEmpty } from '@/components/layout/LayoutEmpty';
import Main from '@/components/main';

const faqData = await fetchFaqData();
// const Index = ({ faqData }: IFaqProps) => (

const Index = () => (
  <LayoutEmpty>
    <Layout>
      <motion.div initial="initial" animate="in" exit="out" transition={{ duration: 1.2 }} variants={pageEffect}>
        <Main faqData={faqData} />
      </motion.div>
    </Layout>
  </LayoutEmpty>
);

// export const getServerSideProps = async () => {
//   const faqData = await fetchFaqData();
//   return {
//     props: {
//       faqData,
//     },
//   };
// };

export default Index;
