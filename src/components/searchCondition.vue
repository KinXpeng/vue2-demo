<template>
  <div>
    <!-- 输入框 -->
    <el-input v-model="model" v-if="show(['input'])" v-bind="parseConfig"></el-input>

    <!-- select选项 -->
    <el-select
      v-model="model"
      v-if="show(['select', 'mul_select'])"
      v-bind="parseConfig"
      :multiple="type == 'mul_select' ? true : false"
      filterable
    >
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item[option.name]"
        :value="item[option.code]"
      ></el-option>
    </el-select>

    <!-- 时间选择器 -->
    <el-time-picker
      v-model="model"
      v-if="show(['time'])"
      v-bind="parseConfig"
      value-format="HH:mm:ss"
    >
    </el-time-picker>

    <!-- 日期/日期时间 -->
    <el-date-picker
      v-model="model"
      :type="type"
      v-if="show(['date', 'datetime'])"
      :value-format="type == 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
      v-bind="parseConfig"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    /**
     * @description 展示的类型, 必须和组件同名
     * @example
     * 例如你需要el-input
     * 则type 为input
     * <SearchCondition type='input' />
     */
    type: {
      type: String,
      default: () => "input",
    },
    /**
     * @description 双向绑定的值
     * @example
     * <SearchCondition v-model="value" />
     */
    value: {
      type: [String, Number, Array, Object, Date],
    },

    /**
     * @description 组件配置，配置同element
     * @example
     * <SearchCondition v-model="value" :config="{}" />
     * <SearchCondition v-model="value" :config="{ input: {} }" />
     */
    config: {
      type: Object,
      default: () => {
        return {
          size: "mini",
          clearable: true,
        };
      },
    },

    /**
     * @description select组件配置
     * @example
     * <SearchCondition v-model="value" :option="{code:'code',name:'name'}" />
     */
    option: {
      type: Object,
      default: () => {
        return {
          code: "code",
          name: "value",
        };
      },
    },

    /**
     * @description select组件配置
     * @example
     * <SearchCondition v-model="value" :options="[
     *  {code:'code',name:'name'},
     * ]" />
     */
    options: {
      type: Array,
      default: () => [],
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

    // 其它配置，详见config
    parseConfig() {
      return this.config[this.type] ? this.config[this.type] : this.config;
    },
  },
  methods: {
    show(typeArr) {
      return typeArr.includes(this.type);
    },
  },
};
</script>

<style lang="scss" scoped></style>
