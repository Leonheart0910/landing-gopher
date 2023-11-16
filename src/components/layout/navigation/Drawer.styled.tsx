import tw from 'tailwind-styled-components';

interface ISDrawer {
  $isOpen?: boolean;
}

const Drawer = tw.div<ISDrawer>`
  fixed z-30 top-0 h-full bg-white p-10 transition-transform duration-300 ease-in-out w-1/2 min-w-[280px]
  ${p => (p.$isOpen ? 'translate-x-0' : '-translate-x-full')}
`;

const Overlay = tw.div`
  fixed inset-0 z-30 bg-black bg-opacity-50
`;

const Hamburger = tw.button`
  fixed z-20 top-4 md:top-5 left-3 sm:left-4 md:left-5 text-xl sm:text-3xl text-white bg-[#6f42ce] p-1.5 md:p-2
`;

export { Drawer, Hamburger, Overlay };
