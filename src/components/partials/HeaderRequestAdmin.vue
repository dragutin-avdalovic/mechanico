<template>
  <div class="header-div">
    <el-tabs type="border-card">
      <el-tab-pane class="tab-products">
        <div slot="label" class="header">
          <div class="my-projects-icon"><i class="el-icon-goods"></i></div>
          <div class="projects-label">PRODUCTS AND MANUFACTURERS</div>
        </div>
        <ProductsAndManufacturers></ProductsAndManufacturers>
      </el-tab-pane>
      <el-tab-pane class="tab-products">
        <div slot="label" class="header">
          <div class="my-projects-icon"><i class="el-icon-sold-out"></i></div>
          <div class="projects-label">PRODUCT REQUEST</div>
        </div>
        <div class="row-header">
          <el-input clearable class="search-input" size="mini" placeholder="Search manufacturers" v-model="input_search">
              <el-button size="mini" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <TableRequestAdmin :fields="fields" :selectable="false" :editable="false"></TableRequestAdmin>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TableRequestAdmin from './TableRequestAdmin.vue'
import ProductsAndManufacturers from './ProductsAndManufacturers.vue'
export default {
  components: {
    TableRequestAdmin,
    ProductsAndManufacturers
  },
  props: ['fields'],
  data () {
    return {
      input_search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  .header-div {
    .header {
      display: flex;
      flex-direction: row;
      .my-projects-icon {
        font-size: 1.5em;
        padding-right: 0.2em;
      }
      .projects-label {
        font-weight: 500;
        font-size: 1em;
        color: white;
      }
    }
    .row-header
    {
      .search-input {
        min-width: 5em;
        max-width: 20em;
        margin-right: 15px;
        float: right;
        border: none;
        outline: none;
        padding: 0.5em;
        &:focus {
          border: none;
          outline: none;
        }
        .el-button {
          background-color: #0D72B9;
          color: white;
          font-weight: 900;
          font-size: 1em;
          -moz-border-radius-bottomleft: 0;
          -moz-border-radius-bottomright: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
      }
      }
  }
.el-tabs {
  height: calc(45vh - 372px);
  background-color: $grey-my-projects-lighter;
}
</style>
