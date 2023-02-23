<template>
  <div class="test">
    <p>
      <el-tooltip class="item" effect="dark" :disabled="valueList.length ? false : true" placement="top-start">
        <div slot="content">
          <p v-for="(item, index) in valueList" :key="index">{{ item.label }}</p>
        </div>
        <el-select multiple v-model="value" placeholder="请选择" @change="handleChange">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-tooltip>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: [],
      valueList: [],
    }
  },
  methods: {
    handleChange(val) {
      this.valueList = []
      if (val.length > 0) {
        val.forEach(ele => {
          let result = this.options.find(item => item.value == ele)
          if (result) {
            this.valueList.push(result)
          }
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.test {
  margin: 30px auto;
  border: 1px solid red;
  width: 300px;
  height: 300px;
}
</style>


