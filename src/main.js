import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import axios from 'axios'

import RouteHome from './components/RouteHome'
import RouteLive from './components/RouteLive'
import RouteBio from './components/RouteBio'
import RouteMedia from './components/RouteMedia'
import RouteContact from './components/RouteContact'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.prototype.$http = axios

const routes = [
  { path: '/', component: RouteHome },
  { path: '/live', component: RouteLive },
  { path: '/biography', component: RouteBio },
  { path: '/media', component: RouteMedia },
  { path: '/contact', component: RouteContact },
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
