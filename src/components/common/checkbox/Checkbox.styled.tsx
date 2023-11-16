import tw from 'tailwind-styled-components';

interface SCheckboxProps {
  $checked?: boolean;
}

export const Checkbox = tw.div`
  flex items-center mb-4
`;

export const Label = tw.label`
  ms-2 text-sm font-medium text-gray-900
`;

export const CheckboxInput = tw.input<SCheckboxProps>`
  w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-300 focus:ring-2
`;
