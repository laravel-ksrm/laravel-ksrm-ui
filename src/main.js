import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'es6-promise/auto'
import axios from 'axios'
// import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'chart.js'
import 'vue-chartjs'
// import auth from './auth'
import router from './router'
import Home from './components/Home'
import store from './script'
import Particles from 'particles.vue'
Vue.use(Particles);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.use(VueAxios,axios)

// import some global styles
// import './styles/style.scss'
window.Vue = Vue
Vue.router = router
Vue.use(VueRouter)
// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`
// Vue.use(VueAuth, auth)
// Load Index
Vue.component('Home', Home)

// Create the router instance and pass the `routes` option
Vue.config.productionTip = false
window._ = require('lodash');
window.EventDispatcher = new class {
  constructor() {
      this.vue = new Vue();
  }

  fire(event, data = null) {
      this.vue.$emit(event, data);
  }

  listen(event, callback) {
      this.vue.$on(event, callback);
  }
};
export const bus = new Vue();
new Vue({
  mode: 'histoy',
  router,
  store,
  render: h => h(App)
}).$mount('#app')