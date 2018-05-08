<template>
  <div class="header-div">
    <el-tabs type="border-card">
      <el-tab-pane>
        <div slot="label" class="header">
          <div class="my-projects-icon"><i class="icon-project"></i></div>
          <div class="projects-label">PRODUCTS AND MANUFACTURERS</div>
          lala
        </div>
      </el-tab-pane>
      <el-tab-pane class="tab">
        <div slot="label" class="header">
          <div class="my-projects-icon"><i class="el-icon-picture"></i></div>
          <div class="projects-label">PRODUCT REQUEST</div>
          lala
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import UsersTableHeader from './UsersTableHeader.vue'
export default {
  components: {
    UsersTableHeader
  },
  props: ['fields', 'columns', 'selectable', 'editable', 'fieldsUsers', 'columnsUsers', 'selectableUsers', 'editableUsers'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  .header {
    display: flex;
    flex-direction: row;
    .my-projects-icon {
      font-size: 1.5em;
      padding-right: 1em;
    }
    .projects-label {
      font-weight: 500;
      font-size: 1em;
    }
  }
</style>
