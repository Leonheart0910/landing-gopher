import type { ReactNode } from 'react';

import * as S from './Paragraph.styled';

interface IParagraphProps {
  readonly children: ReactNode;
  readonly className?: string;
}

const Paragraph = ({ children, className }: IParagraphProps) => {
  return <S.Paragraph className={className}>{children}</S.Paragraph>;
};

export default Paragraph;
