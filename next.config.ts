import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sincere-surprise-2781f1fd90.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
