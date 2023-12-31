import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  // image: {
  //   service: passthroughImageService(),
  // },
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
