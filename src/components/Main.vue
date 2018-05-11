<template>
  <el-container style="height: 100vh;">
    <el-main>
      <el-row type="flex" class="row-bg" justify="flex-start">
        <el-col :span="16">
          <div class="grid-content">
            <MyProjectsPage></MyProjectsPage>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <Admin></Admin>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg-bottom" justify="flex-start">
        <el-col :span="9">
          <div class="grid-content-bottom">
            <ProductRequest></ProductRequest>
          </div>
        </el-col>
        <el-col :span="7">
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
import Status from './partials/Status.vue'
import MessageTitle from './partials/MessageTitle.vue'
import NewMessage from './partials/NewMessage.vue'
import StatusAdmin from './partials/StatusAdmin.vue'
export default {
  components: {
    ElFooter,
    MyProjectsPage,
    ProductRequest,
    Inbox,
    Activity,
    Status,
    MessageTitle,
    NewMessage,
    StatusAdmin
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
<style lang="scss" scoped>
  @import '../assets/styles/varibles';

  .row-bg {
    background-color: $grey-my-projects-darker;
    margin-top: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;

  }

  .row-bg-bottom {
    background-color: $grey-my-projects-darker;
    margin-top: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;

  }

  .grid-content {
    min-width: 15em;
    background-color: $grey-my-projects-lighter;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .grid-content-bottom {
    background-color: $grey-my-projects-lighter;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .el-main {
    background-color: $grey-my-projects-darker;
    padding: 0;
  }
</style>
