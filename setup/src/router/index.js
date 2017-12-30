import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Test from '@/components/Test'

import User from '@/components/User'

import Visit from '@/components/ovid/Visit'
import Cosine from '@/components/cosine/Home'
import Staff from '@/components/cosine/Staff'

import Login from '@/components/Standard/Login'

import T4U from '@/components/t4u/Hello'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/cosine',
      name: 'Cosine',
      component: Cosine
    },
    {
      path: '/t4u',
      name: 'T4U',
      component: T4U
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/ovid',
      name: 'Visit',
      component: Visit
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

export default router
