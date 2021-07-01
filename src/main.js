import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'chart.js'
import 'vue-chartjs'

import router from './router'

import store from './script'
import Particles from 'particles.vue'
Vue.use(Particles);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

// import some global styles
// import './styles/style.scss'



// Create the router instance and pass the `routes` option
Vue.config.productionTip = false

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