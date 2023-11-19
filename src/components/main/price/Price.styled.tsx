import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { FramerMotion } from '@/components/common/framer/FramerMotion';

interface IListProps {
  $disabled: boolean;
}

const PriceBox = tw.ol`
  mt-16 flex gap-[4rem] max-lg:flex-col lg:mt-24
`;

const PriceWrap = styled.li`
  flex: 1 0 calc(50% - 2rem);
`;

const PriceDiv = tw(FramerMotion)`
  flex flex-col items-center rounded-3xl bg-white p-8 py-14 lg:p-10
`;

const Title = tw.p`
  text-2xl font-light lg:text-3xl
`;

const Price = tw.p`
  pt-5 text-4xl font-light lg:pt-12 lg:text-5xl
`;

const Description = tw.p`
  pt-5 text-center font-light leading-6 text-[#7b7eaa] lg:px-10 lg:pt-10
`;

const LinkTag = tw(Link)`
  my-8 justify-center rounded-2xl border border-solid border-[#16194f] px-8 py-3 transition-colors hover:bg-[#16194f] hover:text-white
`;

const ListWrap = tw.ul`
  mt-5
`;

const CustomList = styled.li<IListProps>`
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: 10px;
    border-left: 2px solid #7d78e6;
    border-bottom: 2px solid #7d78e6;
    transform: rotate(-45deg) translateY(-10px);
    transform-origin: bottom center;
  }
`;

const List = tw(CustomList)`
  mt-4 leading-7 relative pl-4
  ${p => (p.$disabled ? 'text-gray-400' : '')}
`;

export { Description, LinkTag, List, ListWrap, Price, PriceBox, PriceDiv, PriceWrap, Title };
