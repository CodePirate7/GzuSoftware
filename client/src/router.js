import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'welcome',
      component:() => import(/* webpackChunkName: "welcome" */ './views/Welcome.vue'),
      meta:{
        title:'Welcome'
      }
    },
    {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    meta:{
      title:'贵州大学示范性软件学院'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})


