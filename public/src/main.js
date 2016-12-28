import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import Learn from './Learn.vue';
import DappList from './DappList.vue';
import Explorer from './Explorer.vue';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/dapps', component: DappList }
]

const router = new VueRouter({
  routes: routes,
   mode: 'history'
})


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
