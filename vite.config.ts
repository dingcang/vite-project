import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Pages from "vite-plugin-pages";
// https://vitejs.dev/config/

const resolve = (dir) => path.join(__dirname, dir);

export default defineConfig({
  plugins: [
    vue({
      // reactivityTransform: true,
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    Pages({
      dirs: "src/views",
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve("./src"),
      },
    ],
  },
});
