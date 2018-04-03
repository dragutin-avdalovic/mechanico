<template>
  <div>
      <el-row class="header" type="flex" justify="center">
          <el-col :span="2" class="my-projects-icon"><i class="el-icon-goods"></i></el-col>
          <el-col :span="22"><p class="projects-label">MY PROJECTS</p></el-col>
      </el-row>
      <TableHeader></TableHeader>
      <Table :fields="fields" :columns="columns" :selectable="true"></Table>
  </div>
</template>
<script>
import Table from './Table.vue'
import TableHeader from './TableHeader.vue'
export default {
  components: {
    Table,
    TableHeader
  },
  data () {
    return {
      columns: [{prop: 'projectName', label: 'Project Name'}, {prop: 'designer', label: 'Designer'},
        {prop: 'consultant', label: 'Consultant'}, {prop: 'projectSize', label: 'Project Size'},
        {prop: 'equipment', label: 'Equipment'}, {prop: 'year', label: 'Year'}],
      fields: [{
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
      }]
    }
  }
}
</script>
<style>
.header {
  background-color: #0D72B9;
  color: white;
}
.my-projects-icon
{
  margin-top: auto;
  margin-bottom: auto;
}
.el-icon-goods {
  color: white;
  font-size: 2em;
}
.projects-label
{
  float: left;
  font-weight: 600;
  font-size: 1em;
}
</style>
