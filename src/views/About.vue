<template>
  <div class="about">
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
