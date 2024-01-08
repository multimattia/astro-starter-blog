/**
 * @type {import('prettier').Options}
 */

/** @type {import("prettier").Config} */

const config = {
  plugins: [require.resolve("prettier-plugin-astro"), "prettier-plugin-svelte"],
  wordWrap: "always",
  overrides: [
    {
      files: ["**/*.astro"],
      options: { parser: "astro" },
    },
    {
      files: ["**/*.svelte"],
      options: { parser: "svelte" },
    },
  ],
};

module.exports = config;
