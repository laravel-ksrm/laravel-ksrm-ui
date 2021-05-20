import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)


import Marks from './components/Marks'
import Notifications from './components/Notifications'
import Admin from './components/Admin'
import Regulations from './components/Regulations'
import Home from './components/Home'
import Profile from './components/Profile'
import Departments from './components/Departments'
import Syllabus from './components/Syllabus'
import Results from './components/Results'
import BatchMates from './components/BatchMates'
// import some global styles
// import './styles/style.scss'

Vue.use(VueRouter)

const routes = [
  { path: '/marks', component: Marks },
  { path: '/Notifications',component: Notifications},
  { path: '/Admin',component: Admin},
  { path: '/',component: Home},
  { path: '/regulations',component: Regulations},
  { path: '/Profile',component: Profile },
  { path: '/departments', component: Departments},
  { path: '/syllabus', component: Syllabus},
  { path: '/batchmates', component: BatchMates},
  { path: '/results', component: Results},
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})