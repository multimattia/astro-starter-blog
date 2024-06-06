import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
    optimizeDeps: {
      noDiscovery: false,
    },
    ssr: {
      external: ["buffer", "path", "fs", "os", "crypto", "async_hooks"].map(
        (i) => `node:${i}`,
      ),
    },
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
