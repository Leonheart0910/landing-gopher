import tw from 'tailwind-styled-components';

interface SInputProps {
  $error?: boolean;
  $disabled?: boolean;
  $success?: boolean;
}

export const InputWrap = tw.div`
  relative
`;

export const Input = tw.input<SInputProps>`
  w-full py-2 px-3 border rounded-md shadow-sm bg-[#ececec] focus:outline-none placeholder:text-black placeholder:text-sm
  ${p => p.$error && 'border-red-500 text-red-600 placeholder-red-400 focus:ring-red-500'}
  ${p => p.$disabled && 'bg-gray-100 opacity-50 cursor-not-allowed'}
  ${p => p.$success && 'border-green-500 text-green-600 placeholder-green-400 focus:ring-green-500'}
`;

export const InputIcon = tw.i`
  block absolute right-2 top-1/2 -translate-y-1/2
`;
