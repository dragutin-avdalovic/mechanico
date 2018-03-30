<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <Table></Table>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-button @click="visible = true">Button</el-button>
            <el-dialog :visible.sync="visible" title="Hello world">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="Activity name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone">
                  <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Activity time">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="Activity type">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type"></el-checkbox>
                    <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                    <el-checkbox label="Offline activities" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor"></el-radio>
                    <el-radio label="Venue"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">Create</el-button>
                  <el-button>Cancel</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <el-radio-group v-model="radio3">
            <el-radio-button label="New York"></el-radio-button>
            <el-radio-button label="Washington"></el-radio-button>
            <el-radio-button label="Los Angeles"></el-radio-button>
            <el-radio-button label="Chicago"></el-radio-button>
          </el-radio-group>
        </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="Please input"
              v-model="input10"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <el-switch
                  v-model="value33"
                  active-text="Pay by month"
                  inactive-text="Pay by year">
                </el-switch>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <el-switch
                  style="display: block"
                  v-model="value44"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="Pay by month"
                  inactive-text="Pay by year">
                </el-switch>
              </div>
            </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple bg-purple-light">
            <div class="block">
              <span class="demonstration">Format Tooltip</span>
              <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
            </div>
          </div>
        </el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
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
