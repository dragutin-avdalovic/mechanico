<template>
  <div class="product-container">
    <el-row type="flex" class="row-header" justify="center">
      <el-col :span="24">
        <div class="grid-content">
          <el-input class="search-input" size="mini" placeholder="Search manufacturers" v-model="input_search" clearable>
            <el-button size="mini" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <TableProductsAndManufacturers :fields="fields" :selectable="true" :editable="true"></TableProductsAndManufacturers>
    </el-row>
  </div>
</template>

<script>
import TableProductsAndManufacturers from './TableProductsAndManufacturers.vue'
import TableHeader from './TableHeader.vue'

export default {
  components: {
    TableProductsAndManufacturers,
    TableHeader
  },
  data () {
    return {
      fields: [
        {
          productName: 'Artesi - AHU',
          manufacturer: 'Artesi',
          productType: 'AHU'
        },
        {
          productName: 'Artesi - Condenser',
          manufacturer: 'Artesi',
          productType: 'Condenser'
        },
        {
          productName: 'Artesi - Condenser',
          manufacturer: 'Artesi',
          productType: 'Condenser'
        },
        {
          productName: 'Artesi - Condenser',
          manufacturer: 'Artesi',
          productType: 'Condenser'
        }
      ],
      input_search: ''
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
  .row-header
  {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    .search-input {
      min-width: 5em;
      max-width: 20em;
      float: right;
      margin-right: 15px;
      .el-button
      {
        background-color: $blue-my-projects;
        color: white  ;
      }
    }
  }
</style>
