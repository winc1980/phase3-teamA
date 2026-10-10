import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // チームのAGENTS.md（AI利用ポリシー）をNext.jsに上書きさせない
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
