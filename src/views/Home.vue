<template>
  <div class="home">
    <h3>1. 封装下拉分页远程搜索以及数据反显(需下载项目至本地查看效果)</h3>
    <RemoteSelect
      :value="remoteValue"
      api="/test/select"
      optionName="optionName"
      :rows="10"
      :option="{ code: 'optionCode', name: 'optionName' }"
      @updateValue="(v) => (remoteSelectValue = v)"
      @clear="() => (remoteValue = {})"
    />
    <h3>2. 通用查询条件组件，通过type控制</h3>
    <p># input输入框</p>
    <SearchCondition
      v-model="inputValue"
      type="input"
      :config="{ placeholder: '请输入名称', size: 'mini' }"
    />
    <p># select下拉框</p>
    <SearchCondition
      v-model="selectValue"
      type="select"
      :options="options"
      :option="{ code: 'code', name: 'name' }"
    />
    <p># mul_select下拉框</p>
    <SearchCondition
      v-model="mulSelectValue"
      type="mul_select"
      :options="options"
      :option="{ code: 'code', name: 'name' }"
    />
    <p># time时间选择</p>
    <SearchCondition v-model="timeValue" type="time" />
    <p># date日期选择</p>
    <SearchCondition v-model="dateValue" type="date" />
    <p># datetime日期时间选择</p>
    <SearchCondition v-model="dateTimeValue" type="datetime" />
  </div>
</template>

<script>
// @ is an alias to /src
import RemoteSelect from "@/components/remoteSelect.vue";
import SearchCondition from "@/components/searchCondition.vue";

export default {
  name: "Home",
  components: {
    RemoteSelect,
    SearchCondition,
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
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-input {
  width: 200px;
}
</style>
