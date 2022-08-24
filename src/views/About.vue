<template>
  <div class="about">
    <div class="button-fold">
      <el-button type="primary" size="mini" @click="handleClearContent">清空</el-button>
      <el-button type="primary" size="mini" @click="handleSaveContent">保存</el-button>
    </div>
    <TinyEditor
      ref="editor"
      v-model="value"
      @input="handleInput"
      width="100%"
      height="400"
    />
  </div>
</template>

<script>
import TinyEditor from "@/components/tinyEditor.vue";
export default {
  components: {
    TinyEditor,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    // 输入
    handleInput(value) {
      this.value = value;
    },

    // 清空
    handleClearContent() {
      this.$refs.editor.clear("");
    },

    // 保存
    handleSaveContent() {
      console.log(this.value);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.button-fold {
  margin: 10px auto;
}
</style>
