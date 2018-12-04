import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
// import axios from 'axios'

Vue.use(VueRouter)
const router =  new VueRouter({
  routes
})
// Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
