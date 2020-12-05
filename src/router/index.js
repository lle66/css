import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/components/layout";
// import layout from '@/components/layout'
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      // redirect: '/index',
      component: () => import("@/views/home/index")
      // children: [
      //   {
      //     path: '/index',
      //     name: 'index',
      //     meta: { title: '首页' },
      //     component: () => import('@/views/home/index')
      //   }
      // ]
    },
    {
      path: "/transform",
      name: "transform",
      component: () => import("@/views/transform/index")
    },
    {
      path: "/animation",
      redirect: "/animation/index",
      component: layout,
      children: [
        {
          path: "index",
          component: () => import("@/views/animation")
        }
      ]
    }
  ]
});
export default router;
