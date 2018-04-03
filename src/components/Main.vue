<template>
  <el-container style="height: 100vh; border: 0px solid #eee">
    <el-main>
      <el-row type="flex" class="row-bg" justify="flex-start">
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <MyProjectsPage></MyProjectsPage>
          </div>
        </el-col>
        <el-col :span="6">
          <h1>status-irma</h1>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ElFooter from '../../node_modules/element-ui/packages/footer/src/main'
import MyProjectsPage from './partials/MyProjectsPage.vue'
export default {
  components: {
    ElFooter,
    MyProjectsPage
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
.bg-purple {
  background: #fefefe;
}
.grid-content {
  min-height: 120px;
}
.row-bg {
  background-color: #f9fafc;
}
</style>
