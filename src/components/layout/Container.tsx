import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

interface IContainer {
  readonly children: ReactNode;
}

const Container = (props: IContainer) => (
  <main className="min-h-container md:min-h-container-pc">
    <>
      <h2 className="sr-only">{AppConfig?.title} 메인 컨텐츠</h2>
      {props.children}
    </>
  </main>
);

export { Container };
