import type { ReactNode } from 'react';

import { Container } from './Container';
import { Footer } from './footer/Footer';
import { Navigation } from './navigation/Navigation';

interface ILayout {
  readonly children: ReactNode;
}

const Layout = (props: ILayout) => (
  <>
    <Navigation />
    <Container>{props.children}</Container>
    <Footer />
  </>
);

export { Layout };
