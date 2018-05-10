<template>
  <div class="projects-admin">
    <HeaderProjectsAdmin :fields="fields" :columns="columns" :selectable="true" :editable="true" :fieldsUsers="fieldsUsers" :columnsUsers="columnsUsers" :selectableUsers="true" :editableUsers="true"></HeaderProjectsAdmin>
  </div>
</template>
<script>
import Table from './Table.vue'
import TableHeader from './TableHeader.vue'
import UsersTableHeader from './UsersTableHeader.vue'
import HeaderProjectsAdmin from './HeaderProjectsAdmin.vue'

export default {
  components: {
    Table,
    TableHeader,
    HeaderProjectsAdmin,
    UsersTableHeader
  },
  data () {
    return {
      items: [
        {name: 'projectName', label: 'Project Name'}, {name: 'designer', label: 'Designer'}
      ],
      columns: [
        {prop: 'projectName', label: 'Project Name'}, {prop: 'designer', label: 'Designer'},
        {prop: 'consultant', label: 'Consultant'}, {prop: 'projectSize', label: 'Project Size'},
        {prop: 'equipment', label: 'Equipment'}, {prop: 'year', label: 'Year'}
      ],
      fields: [
        {
          projectName: 'Project 1',
          designer: 'Tom Tomas',
          consultant: 'Karl Marx',
          projectSize: '12330',
          equipment: '12330',
          year: 2018
        }, {
          projectName: 'Project 2',
          designer: 'Hail Tomas',
          consultant: 'DEEN',
          projectSize: '30',
          equipment: '212330',
          year: 2016
        }, {
          projectName: 'Project 1',
          designer: 'Tom Tomas',
          consultant: 'Karl Marx',
          projectSize: '12330',
          equipment: '12330',
          year: 2018
        }, {
          projectName: 'Project 1',
          designer: 'Tom Tomas',
          consultant: 'Karl Marx',
          projectSize: '12330',
          equipment: '12330',
          year: 2018
        }, {
          projectName: 'Project 1',
          designer: 'Tom Tomas',
          consultant: 'Karl Marx',
          projectSize: '12330',
          equipment: '12330',
          year: 2018
        }
      ],
      columnsUsers: [{prop: 'userName', label: 'User Name'}, {prop: 'email', label: 'Email'},
        {prop: 'name', label: 'Name'}, {prop: 'groups', label: 'Groups'},
        {prop: 'roles', label: 'Roles'}],
      fieldsUsers: [{
        userName: 'User Name',
        email: 'John.Doesgmail.com',
        name: 'Full Name',
        groups: 'Group1',
        roles: 'Sys. Admin',
        status: 'Recent',
        statusIcon: 'el-icon-time',
        primary: true,
        verified: true
      }, {
        userName: 'User Name',
        email: 'John.Doesgmail.com',
        name: 'Full Name',
        groups: 'Group1',
        roles: 'Sys. Admin',
        status: 'Repeat',
        statusIcon: 'el-icon-refresh',
        primary: false,
        verified: true
      }, {
        userName: 'User Name',
        email: 'John.Doesgmail.com',
        name: 'Full Name',
        groups: 'Group1',
        roles: 'Sys. Admin',
        status: 'Inactive',
        statusIcon: 'el-icon-remove-outline',
        primary: false,
        verified: true
      }, {
        userName: 'User Name',
        email: 'John.Doesgmail.com',
        name: 'Full Name',
        groups: 'Group1',
        roles: 'Sys. Admin',
        status: 'Prospect',
        statusIcon: 'el-icon-info',
        primary: false,
        verified: false
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  .projects-admin
  {
    min-height: 22.4em;
  }
</style>
