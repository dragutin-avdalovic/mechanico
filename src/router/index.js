import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Admin from '@/components/Admin'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
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
