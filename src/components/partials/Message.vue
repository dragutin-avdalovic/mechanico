<template>
  <div>
    <el-row type="flex" class="row-bg-message" justify="center">
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" size="medium" class="center">
        <template>
          <el-checkbox v-model="checked"></el-checkbox>
        </template>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="center">
        <div class="green-circle"></div>
      </el-col>
      <el-col :xs="13" :sm="13" :md="13" :lg="13" :xl="13" class="center-left">
        <span>John Doe</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="center-left">
          <span>
            Sep. 2018
          </span>
        </el-col>
      </el-row>
    <el-row>
    </el-row>
  </div>
</template>
<script>
import TableRequest from './TableRequest.vue'
import TableHeader from './TableHeader.vue'
export default {
  components: {
    TableRequest,
    TableHeader
  },
  data () {
    return {
      fields: [{
        manufacturer: 'Project 1',
        product: 'Fan Coil',
        status: 'Approved',
        type: 'success'
      }, {
        manufacturer: 'Project 2',
        product: 'Fan Coil',
        status: 'Requested',
        type: ''
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied',
        type: 'danger'
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied',
        type: 'danger'
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied',
        type: 'danger'
      }],
      input_search: '',
      checked: false
    }
  }
}
</script>
<style>
  @import '../../assets/font/fontello/css/fontello.css';
.green-circle
{
  border-radius: 50%;
  background-color: green;
  width: 0.7em;
  height: 0.7em;
}
.center
{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.center-left
{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.row-bg-message
{
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
