import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
Vue.use(Router)
export default new Router({
    history: true,
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    { path: '/marks',name: 'marks',component: () => import('./components/Marks.vue') ,meta: {
      auth: undefined
    }},
    { path: '/Admin',name:'admin',component:()=>import('./components/Admin.vue'),
    meta: {
      auth: {roles: 1, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
    }},
    { path: '/',name:'home',component: Home,meta: {
      auth: undefined
    }},
    { path: '/academics',name:'academics',component:()=>import('./components/Academics.vue'),meta: {
      auth: undefined
    }},
    { path: '/Profile',name:'profile',component:()=>import('./components/Profile.vue') ,meta: {
      auth: undefined
    }},
    { path: '/departments',name:'departments',component:()=>import('./components/Departments.vue') ,meta: {
      auth: undefined
    }},
    { path: '/syllabus',name:'syllabus',component:()=>import('./components/Syllabus.vue'),meta: {
      auth: undefined
    } },
    { path: '/batchmates', name:'batchmates',component:()=>import('./components/BatchMates.vue'),meta: {
      auth: undefined
    }},
    { path: '/results', name:'results',component:()=>import('./components/Results.vue'),meta: {
      auth: undefined
    }},
    { path: '/notifications', name:'notifications',component:()=>import('./components/Notifications.vue'),meta: {
      auth: undefined
    }},
    { path: '/notifications/:id', name:'notification',component:()=>import('./components/Notifications.vue'),meta: {
      auth: undefined
    }},
    { path: '/forgotPassword', name:'forgot',component:()=>import('./components/forgot.vue'),meta: {
      auth: undefined
    }},
    {path:'/logout',name:'logout',component:()=>import('./components/Logout.vue'),meta: {
      auth: false
    }},
    {path:'/login',name:'login',Login,meta: {
      auth: undefined
    }}

  ]
  })