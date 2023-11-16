/** @type {import('next-sitemap').IConfig} */

module.exports = {
  // TODO: 설정 후에 siteUrl 오픈 예정
  siteUrl: process.env.SITE_URL,
  changefreq: 'daily', // 주소 변경 빈도 - always, daily, hourly, monthly, never, weekly, yearly 중 택 1 (검색엔진에 제공됨)
  priority: 1, // 우선순위 - 우선순위가 높은 기준으로 크롤링됨 default 0.7
  sitemapSize: 7000, // siteMap 청크 당ㄴ위 - sitemap별 chunk 분리 최소 단위 default 5000
  generateRobotsTxt: true, // robots.txt 자동생성 여부 default false
  // exclude: ['/protected-page', '/awesome/secret-page'], // 제외 페이지 리스트
  // alternateRefs: [  // 다국어 지원시 사용
  //   {
  //     href: 'https://es.example.com',
  //     hreflang: 'es',
  //   },
  //   {
  //     href: 'https://fr.example.com',
  //     hreflang: 'fr',
  //   },
  // ],
  // Default transformation function
  // transform: async (config, path) => {
  //   return {
  //     loc: path,
  //     changefreq: config.changefreq,
  //     priority: config.priority,
  //     lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //     alternateRefs: config.alternateRefs ?? [],
  //   };
  // },
  // additionalPaths: async config => [await config.transform(config, '/additional-page')], // Async function that returns a list of additional paths to be added to the generated sitemap list.
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', // 모든 agent 허용
        allow: '/', // 모든 페이지 주소 크롤링 허용
        disallow: [
          '/exclude', // exclude로 시작하는 페이지 주소 크롤링 금지
        ],
      },
      // {
      //   userAgent: 'test-bot',
      //   allow: ['/path', '/path-2'],
      // },
      // {
      //   userAgent: 'black-listed-bot',
      //   disallow: ['/sub-path-1', '/path-2'],
      // },
    ],
    additionalSitemaps: [
      // 추가적인 사이트맵 바인딩시에 사용
      // 'https://example.com/my-custom-sitemap-1.xml',
      // 'https://example.com/my-custom-sitemap-2.xml',
      // 'https://example.com/my-custom-sitemap-3.xml',
    ],
  },
};
