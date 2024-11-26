import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DetailView from "../views/DetailView.vue";
import AllDiaryView from "@/views/AllDiaryView.vue";

const routes = [
  {
    path: "/all",
    component: AllDiaryView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/detail/:id",
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
