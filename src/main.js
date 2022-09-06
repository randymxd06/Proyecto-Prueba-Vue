import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './core/services/store'

import "@/core/plugins/bootstrap-vue.js"
import "@/core/plugins/global-mixin.js"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
