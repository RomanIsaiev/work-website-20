import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        coursesMenu: path.resolve(__dirname, "courses-menu.html"),
        aiNetworks: path.resolve(__dirname, "ai-networks.html"),
      },
    },
  },
});
