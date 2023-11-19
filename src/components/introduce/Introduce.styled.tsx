import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { FramerMotion } from '../common/framer/FramerMotion';
import { SectionWrap } from '../layout/section/SectionWrap';

const Introduce = tw(SectionWrap)`
  w-full mx-auto relative z-0 bg-[#5956e9]
`;

const CustomIntroduceBg = styled.div`
  background: url('/assets/images/introduce_bg.jpg') 0 100% / cover;
`;

const IntroduceBg = tw(CustomIntroduceBg)`
  max-w-screen-xl w-full h-full absolute left-1/2 top-0 -translate-x-1/2
`;

const CustomCircle = styled.i`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #5956e9;
`;

const CustomIcon = styled.i`
  width: 10px;
  height: 5px;
  transform: rotate(-45deg) translate(-1px, -1px);
  transform-origin: 0 bottom;
`;

const Circle = tw(CustomCircle)`
  block shrink-0 relative max-sm:mx-auto max-sm:mb-3
`;

const CheckIcon = tw(CustomIcon)`
  block absolute left-1/2 top-1/2 border-2 border-solid border-white border-t-0 border-r-0
`;

const Box = tw.div`
  lg:relative inline-block w-full lg:w-1/2 bg-white p-5
`;

const BoxBg = tw.div`
  absolute -z-10 left-0 lg:left-12 h-[calc(100%-80px)] lg:h-[calc(100%+80px)] top-[40px] lg:-top-10 w-full border-8 border-solid opacity-10
`;

const Team = tw.li`
  max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto border p-5 max-lg:mb-10 py-12 shadow-md border-solid border-gray-300 bg-white basis-[calc(33.33%-22px)]
`;

const TeamList = tw(FramerMotion)`
  flex flex-col items-center
`;

const CustomProfileHistoryList = styled.li`
  &::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: gray;
    border-radius: 50%;
    margin-right: 0.4rem;
  }
`;

const ProfileHistory = tw.ol`
  leading-relaxed text-gray-600
`;

const ProfileHistoryList = tw(CustomProfileHistoryList)`
  flex items-center relative justify-center;
`;

export { Box, BoxBg, CheckIcon, Circle, Introduce, IntroduceBg, ProfileHistory, ProfileHistoryList, Team, TeamList };
