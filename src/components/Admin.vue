<template>
  <el-container>
    <el-main style="height: 100vh;">
      <el-row type="flex" class="row-bg" justify="flex-start">
        <el-col :span="16">
          <div class="grid-content">
            <AdminProjectsPage></AdminProjectsPage>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <StatusAdmin :city="'Sarajevo'" :mail="'mick@gmail.com'" :phone="'+342223333'" :user="'Mick Jagger'" :company="'Ramones'"></StatusAdmin>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg-bottom" justify="flex-start">
        <el-col :span="10">
          <div class="grid-content-bottom">
            <AdminRequestPage></AdminRequestPage>
          </div>
        </el-col>
        <el-col :span="6">
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
import AdminProjectsPage from './partials/AdminProjectsPage.vue'
import AdminRequestPage from './partials/AdminRequestPage.vue'
import ProductRequest from './partials/ProductRequest.vue'
import Inbox from './partials/Inbox.vue'
import Activity from './partials/Activity.vue'
import Status from './partials/Status.vue'
import MessageTitle from './partials/MessageTitle.vue'
import StatusAdmin from './partials/StatusAdmin.vue'
export default {
  components: {
    ElFooter,
    AdminProjectsPage,
    ProductRequest,
    Inbox,
    Activity,
    Status,
    MessageTitle,
    AdminRequestPage,
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
    height: 55vh;
  }

  .row-bg-bottom {
    background-color: $grey-my-projects-darker;
    margin-top: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    height: calc(45vh - 1.5em);
  }

  .grid-content {
    min-width: 15em;
    background-color: $grey-my-projects-lighter;
    margin-left: 0.5em;
    margin-right: 0.5em;
    height: 55vh;
  }

  .grid-content-bottom {
    background-color: $grey-my-projects-lighter;
    margin-left: 0.5em;
    margin-right: 0.5em;
    height: calc(45vh - 1.5em);
  }

  .el-main {
    background-color: $grey-my-projects-darker;
    padding: 0;
  }

</style>
