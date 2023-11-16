import type { ReactNode } from 'react';

import * as SC from './Button.styled';

interface IButtonProps {
  children: ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({ children, type = 'button', className }: IButtonProps) => {
  return (
    <SC.Button type={type} className={className}>
      {children}
    </SC.Button>
  );
};

export { Button };
