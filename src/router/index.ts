import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import route from "~pages";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: route,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
