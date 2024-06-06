import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

export default defineConfig({
  // image: {
  //   service: passthroughImageService(),
  // },
  vite: {
  },
  prefetch: {
    defaultStrategy: "hover",
  },
  output: "static",
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
