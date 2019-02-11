import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'

// Iniciando las routes
Vue.use(VueRouter);
Vue.use(VueResource);

// Configurando el resource
Vue.http.options.root = 'http://jsonplaceholder.typicode.com';

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
