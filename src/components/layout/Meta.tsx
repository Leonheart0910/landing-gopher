import Head from 'next/head';
import { DefaultSeo, NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

interface IMetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: Partial<IMetaOpenGraph>;
}

interface IMetaOpenGraph {
  type: string;
  url: string;
  title: string;
  description: string;
  locale: string;
  images: [
    {
      url: string;
      width: number;
      height: number;
      alt: string;
    },
  ];
}

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1" key="viewport" />

        <meta name="msapplication-TileImage" content={`/mstile-150x150.png`} />
        <meta name="msapplication-TileColor" content="#6f42ce" />
        <meta name="theme-color" content="#6f42ce" />

        <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="256x256" href={`/android-chrome-256x256.png`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`/android-chrome-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png`} />
        <link rel="icon" href={`/favicon.ico`} key="favicon" />
      </Head>
      <DefaultSeo {...AppConfig} />
      <NextSeo {...props} />
    </>
  );
};

export { Meta };
