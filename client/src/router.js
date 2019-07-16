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
          name:'article',
          component: () => import(/* webpackChunkName: "about" */ './views/forum/DevForumDetail.vue')
        }
      ]
    },
    {
      path: '/school',
      name: 'school',
      component: () => import(/* webpackChunkName: "about" */ './views/school/DevSchool.vue'),
      redirect: '/school/introduction',
      children: [
        {
          path: 'introduction',
          component: () => import(/* webpackChunkName: "about" */ './views/school/DevIntroduction.vue')
        },
        {
            path: 'structure',
            component: () => import(/* webpackChunkName: "about" */ './views/school/DevStructure.vue')
        },
        {
            path: 'partner',
            component: () => import(/* webpackChunkName: "about" */ './views/school/DevPartner.vue')
        }
      ]

    },
    {
        path: '/workers',
        name: 'workers',
        component: () => import(/* webpackChunkName: "about" */ './views/workers/DevWorkers.vue'),
            redirect: '/workers/teaching',
        children: [
            {
                path: 'teaching',
                component: () => import(/* webpackChunkName: "about" */ './views/workers/DevTeaching.vue')
            },
            {
                path: 'administrative',
                component: () => import(/* webpackChunkName: "about" */ './views/workers/DevAdministrative.vue')
            }
        ]
        },
    {
            path: '/students',
            name: 'students',
            component: () => import(/* webpackChunkName: "about" */ './views/students/DevStudents.vue'),
            redirect: '/students/training',
            children: [
                {
                    path: 'training',
                    component: () => import(/* webpackChunkName: "about" */ './views/students/DevTraining.vue')
                },
                {
                    path: 'curriculum',
                    component: () => import(/* webpackChunkName: "about" */ './views/students/DevCurriculum.vue')
                }

            ]
        },
    {
            path: '/research',
            name: 'research',
            component: () => import(/* webpackChunkName: "about" */ './views/research/DevRes.vue'),
            redirect: '/research/stu-achievement',
            children: [
                {
                    path: 'stu-achievement',
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevStuAchievement.vue')
                },
                {
                    path: 'tea-achievement',
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevTeaAchievement.vue')
                },
                {
                    path: 'research',
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevResearch.vue')
                },
                {
                    path: 'academic',
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevAcademic.vue')
                }
            ]
        },
    {
            path: '/enandem',
            name: 'enandem',
            component: () => import(/* webpackChunkName: "about" */ './views/enandem/DevEnandem.vue'),
            redirect: '/enandem/enrollment',
            children: [
                {
                    path: 'enrollment',
                    component: () => import(/* webpackChunkName: "about" */ './views/enandem/DevEnrollment.vue')
                },
                {
                    path: 'employment',
                    component: () => import(/* webpackChunkName: "about" */ './views/enandem/DevEmployment.vue')
                }
            ]
        },
    {
      name: 'information',
      path:'/information',
      component: () => import(/* webpackChunkName: "about" */ './views/information/Information.vue'),
      redirect: '/information/news',
      children:[
          {
              path:'news',
              name:'news',
              component: () => import(/* webpackChunkName: "about" */ './views/information/News.vue'),
          },
          {
              path:'notice',
              component:() => import(/* webpackChunkName: "about" */ './views/information/Notice.vue')
          }
      ]
    },
    {
          path:'/information/news/:id',
          name:'newsDetail',
          component: () => import(/* webpackChunkName: "about" */ './views/information/NewsDetail.vue')
    },
      {
        path:'/admin',
        name:'admin',
        component: () => import(/* webpackChunkName: "about" */ './views/admin/AdminLyout.vue'),
        redirect:'/admin/login',
        children:[
            {
                path:'login',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Login.vue')
            },
            {
                path:'home',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Layout.vue')
            },
            {
                path:'news',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/News.vue')
            },
            {
                path:'addnews',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/AddNews.vue')
            },
            {
                path:'users',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Users.vue')
            },
            {
                path:'articles',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Articles.vue')
            }
        ]
      },
    {
      path:'*',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    }



  ]
})


