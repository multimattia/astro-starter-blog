import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
  },
  output: "static",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
