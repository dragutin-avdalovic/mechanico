import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ProjectForm from '@/components/partials/ProjectForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/project-form',
      name: 'ProjectForm',
      component: ProjectForm
    }
  ]
})
