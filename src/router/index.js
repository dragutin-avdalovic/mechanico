import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
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
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    }
  ]
})
