import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css';

import { BootstrapVue, BIcon, BIconGear, BIconArrowDown } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconGear', BIconGear)
Vue.component('BIconArrowDown', BIconArrowDown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
