import Vue from "vue"
import VueRouter from "vue-router"


import Home from "./pages/Home";
import PageAngular from "./pages/PageAngular";
import PagesReact from "./pages/PageReact";
import PageVue from "./pages/PageVue";
import Auth from "./pages/auth/Auth";

import store from "./store";


Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [{
      path: "/",
      component: Home,
      beforeEnter(to, from, next) {
        if(store.getters.isAuthenticated){
          next()
        }else {
          next("/auth")
        }
      }
    },
    {
      path: "/angular",
      component: PageAngular,
      beforeEnter(to, from, next) {
        if(store.getters.isAuthenticated){
          next()
        }else {
          next("/auth")
        }
      }
    },
    {
      path: "/react",
      component: PagesReact,
      beforeEnter(to, from, next) {
        if(store.getters.isAuthenticated){
          next()
        }else {
          next("/auth")
        }
      }
    },
    {
      path: "/vue",
      component: PageVue,
      beforeEnter(to, from, next) {
        if(store.getters.isAuthenticated){
          next()
        }else {
          next("/auth")
        }
      }
    },
    {
      path: "/auth",
      component: Auth
    }
  ],
  mode: "history"
})
