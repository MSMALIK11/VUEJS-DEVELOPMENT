import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import SingleProductView from "../views/SingleProductView.vue";
import ProductView from "../views/ProductView.vue";
import CompositionApi from "../views/CompositionApi.vue";
import CartBox from "../views/CartBox.vue";
import BlogHome from "../views/BlogApplication/BlogHome.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: ProductView,
    },
    {
      path: "/details/:id",
      name: "ShowDetails",
      component: SingleProductView,
    },
    {
      path: "/details/cart",
      name: "CartDetails",
      component: CartBox,
    },
    {
      path: "/",
      name: "Blog",
      component: BlogHome,
    },
    {
      path: "/compositionapi",
      name: "compositionApi",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CompositionApi,
    },
  ],
});

export default router;
