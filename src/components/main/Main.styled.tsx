import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { SectionWrap } from '../layout/section/SectionWrap';

const CustomMain = styled(SectionWrap)`
  width: 100%;
  padding-bottom: 6%;
  margin: 0 auto;
  background:
    url('/assets/images/landing_main_mobile_bg.png') 70% 100% no-repeat,
    url('/assets/images/landing_main_bg.png') 50% 0 no-repeat;
  background-color: #f2f6ff;
  @media (max-width: 1440px) {
    background-position:
      98% 100%,
      50% 0;
  }
  @media (max-width: 1024px) {
    background-image: url('/assets/images/landing_main_bg.png');
    background-position: 30% 80%;
  }
`;

const Main = tw(CustomMain)`
  pt-0 md:pt-24 lg:pt-32
`;

export { Main };
