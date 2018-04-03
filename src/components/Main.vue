<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header></el-header>
    <el-main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <Table :fields="fields" :columns="columns" :selectable="true">
            </Table>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import ElHeader from '../../node_modules/element-ui/packages/header/src/main'
import ElFooter from '../../node_modules/element-ui/packages/footer/src/main'
import Table from './General/Table.vue'

export default {
  components: {
    ElFooter,
    ElHeader,
    Table
  },
  name: 'HelloWorld',
  methods: {
    handleChange (value) {
      console.log(value)
    },
    formatTooltip (val) {
      return val / 100
    },
    onSubmit () {
      console.log('submit!')
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-header {
  background-color: #98d109;
  color: #333;
  line-height: 60px;
  height: 10em;
}
.el-footer {
  background-color: #d12a1c;
  color: #333;
  line-height: 60px;
}
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 1px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 120px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
