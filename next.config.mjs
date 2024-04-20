import BundleAnalyzerPlugin from '@next/bundle-analyzer';
import { withContentlayer } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withBundleAnalyzer = BundleAnalyzerPlugin({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(withContentlayer(nextConfig));
