import * as VueRouter from "vue-router";

const routes = [
  { path: '/', component: () => import('./components/HelloWorld.vue') },
]


export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})