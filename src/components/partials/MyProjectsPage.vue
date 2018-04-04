<template>
  <div>
      <el-row class="header" type="flex" justify="center">
          <el-col :span="2" class="my-projects-icon"><i class="icon-project"></i></el-col>
          <el-col :span="22"><span class="projects-label">MY PROJECTS</span></el-col>
      </el-row>
      <TableHeader></TableHeader>
      <Table :fields="fields" :columns="columns" :selectable="true" :editable="true"></Table>
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
      }]
    }
  }
}
</script>
<style>
@import '../../assets/font/fontello/css/fontello.css';
.header {
  background-color: #0D72B9;
  color: white;
}
.my-projects-icon
{
  margin-top: auto;
  margin-bottom: auto;
  color: white;
  font-size: 1.5em;
}
.projects-label
{
  float: left;
  font-weight: 500;
  font-size: 1em;
  padding-top: 0.5em ;
  padding-bottom: 0.5em ;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0D72B9;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #005580;
}
</style>
