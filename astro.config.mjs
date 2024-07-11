import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
    optimizeDeps: {
      exclude: ["@react-three-fiber"],
    },
    ssr: {
      external: ["buffer", "path", "fs", "os", "crypto", "async_hooks"].map(
        (i) => `node:${i}`,
      ),
    },
  },
  site: "https://www.maatwo.com",
  trailingSlash: "always",
  image: {
    service: squooshImageService(),
  },
  prefetch: {
    defaultStrategy: "hover",
  },
  output: "hybrid",
  integrations: [mdx(), svelte(), react()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  adapter: cloudflare(),
});
