import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Admin from '@/components/Admin'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    }
  ]
})
