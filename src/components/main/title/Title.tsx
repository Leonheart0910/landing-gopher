import type { ReactNode } from 'react';

import * as S from './Title.styled';

interface ITitleProps {
  readonly children: ReactNode;
  readonly className?: string;
}

const Title = ({ children, className }: ITitleProps) => {
  return <S.Title className={className}>{children}</S.Title>;
};

export default Title;
