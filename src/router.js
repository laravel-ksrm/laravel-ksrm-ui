import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    { path: '/marks',name: 'marks',component: () => import('./components/Marks.vue') },
    { path: '/Notifications',  name: 'notifications',  component: ()=>import('./components/Marks.vue')},
    { path: '/Admin',name:'admin',component:()=>import('./components/Admin.vue')},
    { path: '/',name:'home',component: Home},
    { path: '/academics',name:'academics',component:()=>import('./components/Academics.vue')},
    { path: '/Profile',name:'profile',component:()=>import('./components/Profile.vue') },
    { path: '/departments',name:'departments',component:()=>import('./components/Departments.vue') },
    { path: '/syllabus',name:'syllabus',component:()=>import('./components/Syllabus.vue') },
    { path: '/batchmates', name:'batchmates',component:()=>import('./components/BatchMates.vue')},
    { path: '/results', name:'results',component:()=>import('./components/Results.vue')},
    { path: '/forgotPassword', name:'forgot',component:()=>import('./components/forgot.vue')},

  ]
  })