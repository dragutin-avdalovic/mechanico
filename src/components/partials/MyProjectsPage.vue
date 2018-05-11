<template>
  <span>
  <el-row class="header" type="flex" justify="center">
    <el-col :span="2" class="my-projects-icon"><i class="icon-mail"></i></el-col>
    <el-col :span="22"><span class="projects-label">MY PROJECTS</span></el-col>
  </el-row>
  <TableHeader></TableHeader>
  <Table :fields="fields" :columns="columns" :selectable="true" :editable="true"></Table>
    <AppForm :show = "dialogVisible = true"></AppForm>
  </span>
</template>
<script>
import Table from './Table.vue'
import TableHeader from './TableHeader.vue'
import AppForm from './AppForm.vue'

export default {
  components: {
    Table,
    TableHeader,
    AppForm
  },
  data () {
    return {
      methods: {
        dialogVisible () {
          this.dialogVisible = false
          this.$emit('dialogVisible = true')
        }
      },
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
