import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import ProjectForm from '@/components/ProjectForm'
=======
import Main from '@/components/Main'
>>>>>>> fcecce6e9ae4015c927dca798f3401e55dbec071

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/project-form',
      name: 'ProjectForm',
      component: ProjectForm
=======
      name: 'Main',
      component: Main
>>>>>>> fcecce6e9ae4015c927dca798f3401e55dbec071
    }
  ]
})
