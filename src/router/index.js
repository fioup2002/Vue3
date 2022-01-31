import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Ani from "@/views/Ani.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ani",
    name: "Ani",
    component: Ani,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;