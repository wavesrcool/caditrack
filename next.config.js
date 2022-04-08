const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,

  /*
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      }
    }
    config.module = {
      ...config.module,
      exprContextCritical: false,
    }
    return config
  },
  */

  env: {
    ENV_WEB_ROOT_REGION: process.env.ENV_WEB_ROOT_REGION,
    ENV_WEB_ROOT_DOMAIN: process.env.ENV_WEB_ROOT_DOMAIN,
    ENV_WEB_ROOT_HTML_DOCUMENT: process.env.ENV_WEB_ROOT_HTML_DOCUMENT,
  },

  /*async redirects() {
    return [
      {
        source: '/test-redirect',
        destination: '/',
        permanent: true,
      },
    ]
  },*/
  poweredByHeader: false,
}
