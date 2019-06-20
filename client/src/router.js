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
      path: '/forum',
      name: 'DevForum',
      component: () => import(/* webpackChunkName: "about" */ './views/forum/DevForum.vue'),
      redirect: '/forum/forumlist',
      children:[
        {
          path: 'forumlist',
          component: () => import(/* webpackChunkName: "about" */ './views/forum/DevForumList.vue')
        },
        {
          path: 'add',
          component: () => import(/* webpackChunkName: "about" */ './views/forum/DevAdd.vue')
        },
        {
          path:'article',
          component: () => import(/* webpackChunkName: "about" */ './views/forum/DevForumDetail.vue')
        }
      ]
    },
    {
      path:'*',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    }



  ]
})


