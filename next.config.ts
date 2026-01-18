import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static export so `next build` writes to `out/`.
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'],
    // Image Optimization API isn't available on static export.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*.mp4',
        headers: [
          { key: 'Accept-Ranges', value: 'bytes' },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX(nextConfig);
