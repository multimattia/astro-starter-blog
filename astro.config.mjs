import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

export default defineConfig({
  vite: {
<<<<<<< HEAD
    css: {
      transformer: "lightningcss",
    },
    build: {
      assetsInlineLimit: 2048,
    },
    optimizeDeps: {
      noDiscovery: false
    },
    ssr: {
      external: ["buffer", "path", "fs", "os", "crypto", "async_hooks"].map((i) => `node:${i}`),
    }
||||||| 96ffc77
    css: {
      transformer: "lightningcss",
    },
=======
>>>>>>> 397526c270bedc7c30f314da8ecb4640a4582902
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
