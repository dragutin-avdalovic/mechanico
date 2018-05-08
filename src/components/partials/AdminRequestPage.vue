<template>
  <div>
    <HeaderRequestAdmin :fields="fields"></HeaderRequestAdmin>
  </div>
</template>
<script>
import HeaderRequestAdmin from './HeaderRequestAdmin.vue'

export default {
  components: {
    HeaderRequestAdmin
  },
  data () {
    return {
      fields: [
        {
          manufacturer: 'Project 1',
          product: 'Fan Coil',
          status: 'Approved',
          type: 'success'
        }, {
          manufacturer: 'Project 2',
          product: 'Fan Coil',
          status: 'Requested',
          type: ''
        },
        {
          manufacturer: 'Project 2',
          product: 'Fan Coil',
          status: 'Requested',
          type: ''
        }, {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        }, {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        }, {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        },
        {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        },
        {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        },
        {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';

  .header {
    background-color: $blue-my-projects;
    color: $white;

    .my-projects-icon {
      margin-top: auto;
      margin-bottom: auto;
      padding-left: 0.5em;
      font-size: 1.5em;
    }

    .projects-label {
      float: left;
      font-weight: 500;
      font-size: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }
  }
</style>
