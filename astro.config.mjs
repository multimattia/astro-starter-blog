import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
  },
  output: "server",
  adapter: cloudflare(),
});
