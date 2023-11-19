import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { SectionWrap } from '../layout/section/SectionWrap';

const CustomRegister = styled(SectionWrap)`
  background: url('/assets/images/member_bg.jpg') 0 0 / cover;
`;

const Register = tw(CustomRegister)`
  min-h-screen flex items-center max-md:!bg-none;
`;

export { Register };
