import BundleAnalyzerPlugin from '@next/bundle-analyzer';
import { withContentlayer } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        port: '',
        pathname: '/s/e/notoemoji/latest/**',
      },
    ],
  },
};

const withBundleAnalyzer = BundleAnalyzerPlugin({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(withContentlayer(nextConfig));
