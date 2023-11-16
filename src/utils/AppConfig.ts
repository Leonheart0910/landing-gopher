import type { DefaultSeoProps } from 'next-seo';

const AppConfig: DefaultSeoProps = {
  title: '고퍼소프트',
  description: '고퍼소프트 소개',
  canonical: 'https://landing-gopher.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: 'https://landing-gopher.vercel.app',
    images: [
      {
        url: 'https://landing-gopher.vercel.app/android-chrome-256x256.png',
        width: 256,
        height: 256,
        alt: '고퍼소프트',
      },
    ],
  },
};

export { AppConfig };
