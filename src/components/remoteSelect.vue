<template>
  <el-select
    v-model="model"
    placeholder="请选择"
    size="mini"
    filterable
    clearable
    remote
    height="auto"
    v-loadmore="loadMore"
    :loading="loading"
    :remote-method="remoteMethod"
    @change="handleValueChange"
    @visible-change="handleVisible"
    @clear="handleClearSelected"
  >
    <el-option
      v-for="item in optionsSelect"
      :key="item[option.code]"
      :label="item[option.name]"
      :value="item[option.code]"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "RemoteSelect",
  model: {
    prop: "value",
    event: "input",
  },
  data() {
    return {
      loading: false,
      optionsSelect: [], // 搜索下拉框的数据
      opEntityToName: "", // 下拉框模糊查询
      srcollNum: 1, // 下拉框默认查询页数
      selTotal: 0, // 下拉框总条数
    };
  },
  props: {
    value: {
      type: [String, Number, Array, Object, Date],
    },
    // 默认回显数据
    remoteValue: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // 远程分页搜索接口
    api: {
      type: String,
      default: "",
      required: true,
    },
    // 模糊查询字段名
    optionName: {
      type: String,
      default: "optionName",
    },
    // 每页条数
    rows: {
      type: Number,
      default: 10,
    },
    // 选项code&name
    option: {
      type: Object,
      required: true,
      default: () => {
        return {
          code: "optionCode",
          name: "optionName",
        };
      },
    },
  },
  computed: {
    // 主要利用set来emit input 进行双向绑定 需要组件有input事件
    model: {
      get() {
        return this.value || "";
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
  methods: {
    // 下拉框加载更多
    loadMore() {
      this.srcollNum++;
      if (this.srcollNum < this.selTotal / this.rows + 1) {
        this.handleLikeSearch(this.opEntityToName);
      }
    },
    // 下拉框远程搜索
    remoteMethod(query) {
      this.srcollNum = 1;
      this.opEntityToName = query;
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.handleLikeSearch(query);
        }, 200);
      } else {
        this.handleLikeSearch();
      }
    },
    // 下拉框数据
    handleLikeSearch(query) {
      this.$axios
        .post(this.api, {
          page: this.srcollNum,
          [this.optionName]: query,
          rows: this.rows,
        })
        .then((res) => {
          // console.log(res);
          if (this.srcollNum == 1) {
            this.optionsSelect = res.data.data;
          } else {
            this.optionsSelect.push(...res.data.data);
          }
          if (Object.keys(this.remoteValue).length && !query) {
            this.model = this.remoteValue.code;
            this.optionsSelect.unshift({
              [this.option.code]: this.remoteValue.code,
              [this.option.name]: this.remoteValue.name,
            });
          }
          // 数组去重
          this.optionsSelect = this.optionsSelect.reduce((pre, cur) => {
            if (
              pre.findIndex(
                (item) => item[this.option.code] === cur[this.option.code]
              ) === -1
            ) {
              pre.push(cur);
            }
            return pre;
          }, []);
          this.selTotal = res.data.records; // 总条数
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 监听查询的数据
    handleValueChange(value) {
      if (!value) {
        this.srcollNum = 1;
        this.opEntityToName = "";
        this.handleLikeSearch("");
      }
    },
    // 下拉框出现 / 消失
    handleVisible(flag) {
      if (flag && !this.model) {
        this.srcollNum = 1;
        this.opEntityToName = "";
        this.handleLikeSearch("");
      }
    },
    // 清空下拉
    handleClearSelected() {
      this.$emit("clear");
    },
  },
  created() {},
  mounted() {
    this.handleLikeSearch(); // 远程搜索加载下拉框数据
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
