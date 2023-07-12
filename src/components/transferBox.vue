<template>
  <div class="transfer-content">
    <!-- 左侧穿梭框 -->
    <div class="transfer-box">
      <div class="box-title">
        <el-checkbox v-model="list1Title">列表1</el-checkbox>
        <span>0/7</span>
      </div>
      <div class="box-info">
        <div class="info-item" v-for="item in 12" :key="item">
          <el-checkbox v-model="list1Title">列表1</el-checkbox>
        </div>
      </div>
    </div>

    <!-- 右侧穿梭框及箭头 -->
    <div class="transfer-right">
      <div class="right-content" v-for="item in groupLength" :key="item">
        <div class="transfer-arrow">
          <el-button type="primary" icon="el-icon-arrow-left"></el-button>
          <el-button type="primary" icon="el-icon-arrow-right"></el-button>
        </div>
        <div class="transfer-box">
          <div class="box-title">
            <el-checkbox v-model="list1Title">列表1</el-checkbox>
            <span>0/7</span>
          </div>
          <div class="box-info">
            <div class="info-item" v-for="item1 in 3" :key="item1">
              <el-checkbox v-model="list1Title">列表1</el-checkbox>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- <div>
      <el-button @click="handleAddList">点击</el-button>
    </div> -->
  </div>
</template>

<script>
export default {
  transferList: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    // 分组数量
    groupLength: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    transferList: {
      get() {
        return this.value || [];
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
  data() {
    return {
      list1Title: false,
    }
  },

  methods: {
    handleAddList() {
      this.transferList.push({})
    },
  },
  created() {
    console.log(this.value);
  },
}
</script>
<style lang="scss" scoped>
.transfer-content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  // border: 1px solid red;

  .transfer-box {
    width: 160px;
    // min-height: 160px;
    border: 1px solid #eee;
    border-radius: 6px;

    .box-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      background-color: #f5f7fa;
      border-bottom: 1px solid #eee;
      padding: 0 16px;
    }

    .box-info {
      .info-item {
        line-height: 30px;
        text-align: left;
        padding: 0 16px;
      }
    }
  }

  .transfer-right {
    width: calc(100% - 160px);
    height: 100%;

    .right-content {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }

      .transfer-arrow {
        width: 160px;
      }
    }
  }
}
</style>


