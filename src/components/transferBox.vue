<template>
  <div class="transfer-content">
    <!-- 左侧穿梭框 -->
    <div class="transfer-box" :style="{ 'height': height + 'px' }">
      <div class="box-title">
        <el-input placeholder="请输入内容" v-model="searchKey" size="mini">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <div class="title-select">
          <el-checkbox :value="transferList.length > 0 && selectedLength(transferList) == transferList.length"
            @change="handleLeftChange" :disabled="transferList.length == 0"
            :indeterminate="selectedLength(transferList) > 0 && selectedLength(transferList) != transferList.length">列表1</el-checkbox>
          <span>{{ selectedLength(transferList) + '/' + transferList.length }}</span>
        </div>
      </div>
      <div class="box-info">
        <div class="info-item" v-show="!searchKey || item.name.includes(searchKey)" v-for="(item, index) in transferList"
          :key="index">
          <el-checkbox v-model="item.selected">{{ item.name }}</el-checkbox>
        </div>
      </div>
    </div>

    <!-- 右侧穿梭框及箭头 -->
    <div class="transfer-right">
      <div class="right-content" v-for="(item, index) in groupList" :key="index"
        :style="{ 'height': groupHeight + 'px' }">
        <div class="transfer-arrow">
          <el-button :disabled="selectedLength(item.list) == 0" type="primary" icon="el-icon-arrow-left"
            @click="handleLeftTransfer(index)"></el-button>
          <el-button :disabled="selectedLength(transferList) == 0" type="primary" icon="el-icon-arrow-right"
            @click="handleRightTransfer(index)"></el-button>
        </div>
        <div class="transfer-box" :style="{ 'height': groupHeight + 'px' }">
          <div class="box-title">
            <el-input placeholder="请输入内容" v-model="item.search" size="mini">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div class="title-select">
              <el-checkbox :value="item.list.length > 0 && selectedLength(item.list) == item.list.length"
                @change="value => handleRightChange(value, index)" :disabled="item.list.length == 0"
                :indeterminate="selectedLength(item.list) > 0 && selectedLength(item.list) != item.list.length">{{
                  item.name }}</el-checkbox>
              <span>{{ selectedLength(item.list) + '/' + item.list.length }}</span>
            </div>
          </div>
          <div class="box-info">
            <div class="info-item" v-show="!item.search || item1.name.includes(item.search)"
              v-for="(item1, index1) in item.list" :key="index1">
              <el-checkbox v-model="item1.selected">{{ item1.name }}</el-checkbox>
            </div>
          </div>
        </div>
      </div>

    </div>
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

    // 穿梭框高度
    height: {
      type: Number,
      default: 600
    },

    // 分组名称
    groupNames: {
      type: Array,
      default: () => []
    }
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
    // 右侧高度
    groupHeight() {
      const singleHeight = (this.height - 30) / this.groupLength
      return singleHeight
    },
  },
  data() {
    return {
      searchKey: '', // 左侧搜索
      groupList: [], // 右侧分组
      originTransferList: [], // 原有的穿梭数组
    }
  },

  methods: {
    // 选中的数量
    selectedLength(list) {
      const newArr = list.filter(item => item.selected)
      return newArr.length
    },

    // 左侧全选
    handleLeftChange(value) {
      this.transferList.forEach(item => {
        item.selected = value
      })
    },

    // 右侧全选
    handleRightChange(value, index) {
      this.groupList[index].list?.forEach(item => {
        item.selected = value
      })
    },

    // 左箭头
    handleLeftTransfer(index) {
      const filterList = this.groupList[index].list.filter(item => item.selected)
      this.groupList[index].list = this.groupList[index].list.filter(item => !item.selected)
      filterList.forEach(item => item.selected = false)
      this.transferList.push(...filterList)
    },

    // 右箭头
    handleRightTransfer(index) {
      const filterList = this.transferList.filter(item => item.selected)
      this.transferList = this.transferList.filter(item => !item.selected)
      filterList.forEach(item => item.selected = false)
      this.groupList[index].list.push(...filterList)
    },
  },
  created() {
    // console.log(this.transferList);
    this.groupNames.forEach(item => {
      this.groupList.push({
        name: item,
        search: '',
        list: []
      })
    })
  },
}
</script>
<style lang="scss" scoped>
.transfer-content {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  // border: 1px solid red;

  .transfer-box {
    overflow: auto;
    width: 200px;
    // min-height: 160px;
    border: 1px solid #eee;
    border-radius: 6px;

    .box-title {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60px;
      background-color: #f5f7fa;
      border-bottom: 1px solid #eee;
      padding: 6px 16px;
      z-index: 9;

      .title-select {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
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
    width: calc(100% - 200px);
    height: 100%;

    .right-content {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }

      .transfer-arrow {
        width: 200px;
      }
    }
  }
}
</style>


