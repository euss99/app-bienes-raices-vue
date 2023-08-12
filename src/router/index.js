import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      meta: { requiresAuth: true },
      component: () => import("../views/admin/AdminLayout.vue"),
      children: [
        {
          path: "/admin/propiedades",
          name: "admin-propiedades",
          meta: { requiresAuth: true },
          component: () => import("../views/admin/AdminView.vue"),
        },
        {
          path: "/admin/nueva",
          name: "nueva-propiedades",
          meta: { requiresAuth: true },
          component: () => import("../views/admin/NuevaPropiedadView.vue"),
        },
        {
          path: "/admin/editar/:id",
          name: "editar-propiedades",
          meta: { requiresAuth: true },
          component: () => import("../views/admin/EditarPropiedadView.vue"),
        },
      ],
    },
  ],
});

// Guard de navegación
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((url) => url.meta.requiresAuth);
  if (requiresAuth) {
    // Comprobar que el usuario este autenticado
    console.log("Necesitas autenticarte");
  } else {
    // No esta protegido, mostramos la vista
    next();
  }
});

export default router;
