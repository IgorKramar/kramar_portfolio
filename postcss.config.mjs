/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind CSS v4
    "@tailwindcss/postcss": {},

    // Автопрефиксы
    autoprefixer: {},

    // Минификация CSS в проде
    ...(process.env.NODE_ENV === "production" && {
      cssnano: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
    }),
  },
};

export default config;
