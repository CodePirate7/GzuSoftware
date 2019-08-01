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
            requiresAuth: false
        }
    },
    {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
        meta:{
            requiresAuth: false
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
          component: () => import(/* webpackChunkName: "about" */ './views/forum/DevForumList.vue'),
            meta:{
                requiresAuth: false
            }
        },
        {
          path: 'add',
          component: () => import(/* webpackChunkName: "about" */ './views/forum/DevAdd.vue'),
            meta:{
                requiresAuth: false
            }
        },
        {
          path:'article',
          name:'article',
          component: () => import(/* webpackChunkName: "about" */ './views/forum/DevForumDetail.vue'),
            meta:{
                requiresAuth: false
            }
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
          component: () => import(/* webpackChunkName: "about" */ './views/school/DevIntroduction.vue'),
            meta:{
                requiresAuth: false
            }
        },
        {
            path: 'structure',
            component: () => import(/* webpackChunkName: "about" */ './views/school/DevStructure.vue'),
            meta:{
                requiresAuth: false
            }
        },
        {
            path: 'partner',
            component: () => import(/* webpackChunkName: "about" */ './views/school/DevPartner.vue'),
            meta:{
                requiresAuth: false
            }
          },
          {
              path: 'contact',
              component: () => import(/* webpackChunkName: "about" */ './views/school/DevContact.vue'),
              meta: {
                  requiresAuth: false
              }
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
                component: () => import(/* webpackChunkName: "about" */ './views/workers/DevTeaching.vue'),
                meta:{
                    requiresAuth: false
                }
            },
            {
                path: 'administrative',
                component: () => import(/* webpackChunkName: "about" */ './views/workers/DevAdministrative.vue'),
                meta:{
                    requiresAuth: false
                }
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
                    component: () => import(/* webpackChunkName: "about" */ './views/students/DevTraining.vue'),
                    meta:{
                        requiresAuth: false
                    }
                },
                {
                    path: 'curriculum',
                    component: () => import(/* webpackChunkName: "about" */ './views/students/DevCurriculum.vue'),
                    meta:{
                        requiresAuth: false
                    }
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
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevStuAchievement.vue'),
                    meta:{
                        requiresAuth: false
                    }
                },
                {
                    path: 'tea-achievement',
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevTeaAchievement.vue'),
                    meta:{
                        requiresAuth: false
                    }
                },
                {
                    path: 'research',
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevResearch.vue'),
                    meta:{
                        requiresAuth: false
                    }
                },
                {
                    path: 'academic',
                    component: () => import(/* webpackChunkName: "about" */ './views/research/DevAcademic.vue'),
                    meta:{
                        requiresAuth: false
                    }
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
                    component: () => import(/* webpackChunkName: "about" */ './views/enandem/DevEnrollment.vue'),
                    meta:{
                        requiresAuth: false
                    }
                },
                {
                    path: 'employment',
                    component: () => import(/* webpackChunkName: "about" */ './views/enandem/DevEmployment.vue'),
                    meta:{
                        requiresAuth: false
                    }
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
              meta:{
                  requiresAuth: false
              }
          },
          {
              path:'notice',
              component:() => import(/* webpackChunkName: "about" */ './views/information/Notice.vue'),
              meta:{
                  requiresAuth: false
              }
          }
      ]
    },
    {
          path:'/information/news/:id',
          name:'newsDetail',
          component: () => import(/* webpackChunkName: "about" */ './views/information/NewsDetail.vue'),
            meta:{
            requiresAuth: false
        }
    },
      {
        path:'/project',
          component: () => import('./views/project/project.vue'),
        meta:{
            requiresAuth: false
        }
      },
      {
        path:'/admin',
        name:'admin',
        component: () => import(/* webpackChunkName: "about" */ './views/admin/AdminLyout.vue'),
        meta:{
          requiresAuth: true
        },
        children:[
            {
                path:'login',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Login.vue'),
                meta:{
                    requiresAuth: false
                }
            },
            {
                path:'home',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Layout.vue'),
                meta:{
                    requiresAuth: true
                }
            },
            {
                path:'news',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/News.vue'),
                meta:{
                    requiresAuth: true
                }
            },
            {
                path:'addnews',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/AddNews.vue'),
                meta:{
                    requiresAuth: true
                }
            },
            {
                path:'users',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Users.vue'),
                meta:{
                    requiresAuth: true
                }
            },
            {
                path:'articles',
                component:() => import(/* webpackChunkName: "about" */ './views/admin/Articles.vue'),
                meta:{
                    requiresAuth: true
                }
            },
            {
                path:'banner',
                component:() => import('./views/admin/Banner.vue'),
                meta:{
                    requiresAuth: true
                }
            }
        ]
      },
    {
      path:'*',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue'),
        meta:{
            requiresAuth: false
        }
    }



  ]
})


