import tw from 'tailwind-styled-components';

interface SCButtonProps {}

export const Button = tw.button<SCButtonProps>`
  w-full p-3 py-4 rounded-md bg-[#7951f9] text-white font-medium hover:bg-[#6c3ffe] transition-colors
`;
