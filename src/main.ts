import * as vue from "vue";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
declare global {
  interface Window {
    vue: typeof vue;
  }
}

createApp(App).use(router).mount("#app");
