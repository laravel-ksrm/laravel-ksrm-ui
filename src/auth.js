import bearer from '@websanova/vue-auth/src/drivers/auth/bearer'
import axios from '@websanova/vue-auth/src/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/src/drivers/router/vue-router.2.x'
// Auth base configuration some of this options
// can be override in method calls
const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultName: 'laravel-vue-spa',
  tokenStore: ['localStorage'],
  rolesVar: 'role',
}
export default config