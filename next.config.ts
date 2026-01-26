import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  i18n: {
    locales: ["en-US", "ru-RU"],
    defaultLocale: "ru-RU",
  },
};

export default nextConfig;
