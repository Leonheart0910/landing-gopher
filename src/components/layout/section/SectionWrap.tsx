import type { ReactNode } from 'react';

interface ISectionWrapProps {
  readonly children: ReactNode;
  readonly className?: string;
}

const SectionWrap = (props: ISectionWrapProps) => <div className={`${props.className ?? ''}`}>{props.children}</div>;

export { SectionWrap };
