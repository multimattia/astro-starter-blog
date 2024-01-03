/**
 * @type {import('prettier').Options}
 */

/** @type {import("prettier").Config} */

const config = {
  plugins: [require.resolve("prettier-plugin-astro")],
  wordWrap: "always",
  overrides: [
    {
      files: "**/*.astro",
      options: { parser: "astro" },
    },
  ],
};

module.exports = config;
