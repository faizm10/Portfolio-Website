import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" } : {}),
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'],
    // GitHub Pages needs static export; Vercel can optimize.
    unoptimized: isGithubPages,
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
