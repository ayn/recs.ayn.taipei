import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://recs.ayn.taipei",
  server: {
    allowedHosts: ["aynstudio.tail23b3c.ts.net"],
  },
});
