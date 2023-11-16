import type { ReactNode } from 'react';

interface ILayoutEmpty {
  readonly children: ReactNode;
}

const LayoutEmpty = (props: ILayoutEmpty) => <>{props.children}</>;

export { LayoutEmpty };
