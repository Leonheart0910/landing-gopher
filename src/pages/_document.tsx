import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DefaultSeo } from 'next-seo';
import { ServerStyleSheet } from 'styled-components';

import { AppConfig } from '@/utils/AppConfig';

class GopherSoftDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig?.openGraph?.locale}>
        <Head />
        <body>
          <DefaultSeo {...AppConfig} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default GopherSoftDocument;
