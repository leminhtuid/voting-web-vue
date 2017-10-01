import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
