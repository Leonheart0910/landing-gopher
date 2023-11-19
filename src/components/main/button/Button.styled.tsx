import tw from 'tailwind-styled-components';

const Button = tw.button`
  flex min-w-[200px] items-center justify-between rounded-2xl bg-[#16194f]
  px-7 py-3 text-white transition-colors hover:bg-black
  mt-8 max-lg:mx-auto max-md:text-sm
`;

export { Button };
