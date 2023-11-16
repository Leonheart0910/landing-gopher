/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
});

module.exports = {
  swcMinify: true,
  compiler: {
    // ssr, displayName true가 기본값으로 켜진다.
    styledComponents: true,
  },
};
