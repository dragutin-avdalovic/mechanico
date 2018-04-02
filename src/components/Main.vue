<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :span="24" :offset="0">
          <div class="grid-content bg-purple">
            <Table :fields="fields"></Table>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import ElHeader from '../../node_modules/element-ui/packages/header/src/main'
import ElFooter from '../../node_modules/element-ui/packages/footer/src/main'
import Table from './General/Table.vue'

export default {
  components: {
    ElFooter,
    ElHeader,
    Table
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
      fields: [{
        label: 'Project name',
        name: 'ProjectName',
        text: 'Project 1'
      }, {
        label: 'Designer',
        name: 'Designer',
        text: 'Mihail'
      }, {
        label: 'Consultant',
        name: 'Consultant',
        text: 'Mark'
      }, {
        label: 'Project size',
        name: 'ProjectSize',
        text: '300 kB'
      }, {
        label: 'Year',
        name: 'Year',
        text: '2020'
      },
      {
        label: 'Project name',
        name: 'ProjectName',
        text: 'Project 2'
      }, {
        label: 'Designer',
        name: 'Designer',
        text: 'Aleksandar'
      }, {
        label: 'Consultant',
        name: 'Consultant',
        text: 'Vlad'
      }, {
        label: 'Project size',
        name: 'ProjectSize',
        text: '30 kB'
      }, {
        label: 'Year',
        name: 'Year',
        text: '2018'
      }],
      visible: false,
      radio3: 'New York',
      input10: '',
      num1: 1,
      value33: true,
      value44: true,
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 1px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 120px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
