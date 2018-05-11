<template>
  <div>
    <div class="radio" v-for="item in items" v-bind:key="item.id">
      <el-radio v-model="radio" :label="item.id" @change="sendChecked(radio)">{{item.text}}</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  },
  props: [
    'items'
  ],
  methods:
    {
      sendChecked (id) {
        console.log(id)
        this.$emit(id)
      }
    }
}
</script>
<style lang="scss" scoped>
  .radio{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    .el-radio+.el-radio {
      margin-left: 0;
    }
    .el-radio{
      line-height: 0;
    }
  }
</style>
