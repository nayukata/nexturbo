// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui'])
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  swcMinify: true,
  reactStrictMode: true,
  // .next/standaloneに実行に必要なすべてのファイルを吐き出す。
  // https://nextjs.org/docs/advanced-features/output-file-tracing
  output: 'standalone',
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
})
