import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import 'date-input-polyfill'

import './polyfills.js'

import BootstrapVue from 'bootstrap-vue'
import './css/main.scss'
// import Promise from './polyfills.js'

Vue.use(BootstrapVue);
// Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
