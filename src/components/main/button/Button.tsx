import type { ReactNode } from 'react';

import * as S from './Button.styled';

interface IButtonProps {
  readonly children: ReactNode;
  readonly className?: string;
}

const Button = ({ children, className }: IButtonProps) => {
  return (
    <S.Button type="button" className={className}>
      {children}
    </S.Button>
  );
};

export default Button;
