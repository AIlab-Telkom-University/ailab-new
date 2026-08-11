/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isMainPages = repoName.toLowerCase().endsWith('.github.io');

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd && !isMainPages ? `/${repoName}` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && !isMainPages ? `/${repoName}` : '',
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
