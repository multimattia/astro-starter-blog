import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import remarkToc from "remark-toc";
import sectionize from "remark-sectionize";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
    ssr: {
      external: ["buffer", "path", "fs", "os", "crypto", "async_hooks"].map(
        (i) => `node:${i}`,
      ),
    },
  },
  site: "https://www.maatwo.com",
  image: {
    service: squooshImageService(),
  },
  prefetch: {
    defaultStrategy: "hover",
  },
  output: "hybrid",
  integrations: [mdx(), svelte(), playformCompress()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
    remarkPlugins: [remarkToc, sectionize],
  },

  adapter: cloudflare(),
});
