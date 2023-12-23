import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
  },
  output: "server",
  adapter: cloudflare(),
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
