<template>
  <div class="home">
    <h3>1. 封装下拉分页远程搜索以及数据反显(需下载项目至本地查看效果)</h3>
    <RemoteSelect :remoteValue="remoteValue" api="/test/select" optionName="optionName" :rows="10"
      :option="{ code: 'optionCode', name: 'optionName' }" v-model="remoteSelectValue"
      @clear="() => (remoteValue = {})" />
    <h3>2. 通用查询条件组件，通过type控制</h3>
    <p># input输入框</p>
    <SearchCondition v-model="inputValue" type="input" :config="{ placeholder: '请输入名称', size: 'mini' }" />
    <p># select下拉框</p>
    <SearchCondition v-model="selectValue" type="select" :options="options" :option="{ code: 'code', name: 'name' }" />
    <p># mul_select下拉框</p>
    <SearchCondition v-model="mulSelectValue" type="mul_select" :options="options"
      :option="{ code: 'code', name: 'name' }" />
    <p># time时间选择</p>
    <SearchCondition v-model="timeValue" type="time" />
    <p># date日期选择</p>
    <SearchCondition v-model="dateValue" type="date" />
    <p># datetime日期时间选择</p>
    <SearchCondition v-model="dateTimeValue" type="datetime" />
    <h3>3. <router-link to="/about">富文本编辑器</router-link></h3>
    <h3>4. treeSelect封装</h3>
    <TreeSelect v-model="value" :data="list" style="width: 240px;" />
    <h3>5. <router-link to="/downloadImg">下载图片及文字</router-link></h3>
    <h3>6. <router-link to="/exportExcel">导出表格</router-link></h3>
  </div>
</template>

<script>
// @ is an alias to /src
import RemoteSelect from "@/components/remoteSelect.vue";
import SearchCondition from "@/components/searchCondition.vue";
import TreeSelect from "@/components/treeSelect.vue"

export default {
  name: "Home",
  components: {
    RemoteSelect,
    SearchCondition,
    TreeSelect,
  },
  data() {
    return {
      remoteSelectValue: "",
      remoteValue: {
        // 配置需要反显的select
        code: "xa",
        name: "西安",
      },

      inputValue: "", // 输入框
      selectValue: "", // 下拉
      mulSelectValue: "", // 多选下拉
      timeValue: "", // 时间选择
      dateValue: "", // 日期选择
      dateTimeValue: "", // 日期时间选择
      options: [
        {
          code: "1",
          name: "测试1",
        },
        {
          code: "2",
          name: "测试2",
        },
      ],

      // treeSelect数据
      list: [{
        label: '系统',
        id: 1,
        children: [
          { label: '用户', id: 2 },
          { label: '用户组', id: 3 },
          { label: '角色', id: 4 },
          { label: '菜单', id: 5 },
          { label: '组织架构', id: 6 }
        ]
      },
      {
        label: '商品',
        id: 7,
        children: [
          { label: '列表', id: 8 },
          { label: '添加', id: 9 },
          { label: '修改', id: 10 },
          { label: '删除', id: 11 },
          { label: '商品分类', id: 12 },
          { label: '分类修改', id: 13 }
        ]
      }],
      value: 1
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-input {
  width: 200px;
}
</style>
