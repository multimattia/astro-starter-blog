import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";

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
  trailingSlash: "always",
  image: {
    service: squooshImageService(),
  },
  prefetch: {
    defaultStrategy: "hover",
  },
  output: "hybrid",
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  adapter: cloudflare(),
});
