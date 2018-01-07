import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Cosine from '@/components/cosine/Home'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cosine',
      name: 'Cosine',
      component: Cosine
    }
  ]
})

export default router
