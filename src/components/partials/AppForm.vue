<template>
  <div class="Modal">
    <el-form ref="form" :model="form" class="form">
      <el-row :gutter="70">
        <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
          <el-form-item class="label" label="Project Name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
          <el-form-item class="Item2" label="Size">
            <el-input v-model="form.size"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="70">
        <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
          <el-form-item label="Designer">
            <el-input v-model="form.designer"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
          <el-form-item class="Item2" label="Equipment">
            <el-input v-model="form.equipment"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="70">
        <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
          <el-form-item label="Consultant">
            <el-input v-model="form.consultant"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
          <el-form-item class="Item2" label="Year">
            <el-input v-model="form.year"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      form: {
        name: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .Modal {
    width: 100%;
  }

  .el-form-item {
    width: 100%;
  }
  .el-button {
    width: 100%;
    background-color: #0d80ca;
  }

  .button {
    display: flex;
    justify-content: center;
  }
</style>
