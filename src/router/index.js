import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    name: "login",
    path: "/login",
    meta: {
      layout: "auth",
      titleKey: "loginTitle",
    },
    component: () => import("@/views/LoginView.vue"),
  },
  {
    name: "register",
    path: "/register",
    meta: {
      layout: "auth",
      titleKey: "registerTitle",
    },
    component: () => import("@/views/RegisterView.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.meta.titleKey != from.meta.titleKey)
    store.commit("setTitleKey", to.meta.titleKey);
  next();
});

export default router;
