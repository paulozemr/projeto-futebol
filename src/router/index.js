import { createRouter, createWebHistory } from "vue-router";
import HOmi from "../views/HOmi.vue";
import JogaAdores from "@/views/JogaAdores.vue";
import SmitherS from "@/views/SmitherS.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HOmi,
    },
    {
      path: "/times",
      name: "Times",
      component: SmitherS,
    },
    {
      path: "/about",
      name: "JogaAdores",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: JogaAdores,
    },
  ],
});

export default router;
