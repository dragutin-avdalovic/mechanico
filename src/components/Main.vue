<template>
  <el-container style="height: 100vh; border: 0px solid #eee">
    <el-main>
      <el-row type="flex" class="row-bg" justify="flex-start">
        <el-col :span="18">
          <div class="grid-content">
            <MyProjectsPage></MyProjectsPage>
          </div>
        </el-col>
        <el-col :span="6">
          <h1>status-irma</h1>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg-bottom" justify="flex-start">
        <el-col :span="8">
          <div class="grid-content-bottom">
          <ProductRequest></ProductRequest>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content-bottom">
            <Inbox></Inbox>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content-bottom">
            <Activity></Activity>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ElFooter from '../../node_modules/element-ui/packages/footer/src/main'
import MyProjectsPage from './partials/MyProjectsPage.vue'
import ProductRequest from './partials/ProductRequest.vue'
import Inbox from './partials/Inbox.vue'
import Activity from './partials/Activity.vue'
export default {
  components: {
    ElFooter,
    MyProjectsPage,
    ProductRequest,
    Inbox,
    Activity
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
<style>
.row-bg {
  margin: 0.5em;
  background-color: #cccccc;
}
.row-bg-bottom {
  background-color: #cccccc;
  min-height: calc(100vh - 415px);
}
.grid-content
{
  min-height: 2.5em;
  min-width: 15em;
  background-color: #E9E9E9;
}
.grid-content-bottom
{
  min-width: 30vw;
  height: 100%;
  margin-right: 0.5em;
  margin-left: 0.5em;
  background-color: #E9E9E9;
}
.el-main
{
  background-color: #cccccc;
  padding: 0;
}
</style>
