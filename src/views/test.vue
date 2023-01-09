<template>
  <div ref="fulls">
    test
    <el-button @click="handlerAdd">按钮</el-button>
    <el-button @click="handlerExit">关闭</el-button>
  </div>
</template>

<script>
import { cins } from "cins";
export default {
  data() {
    return {};
  },
  methods: {
    getSearchParams(name) {
      const url = window.location.href;
      const search = url && url.split("?")[1];
      const obj = new URLSearchParams(search);
      if (obj.get(name)) {
        return obj.get(name);
      } else {
        return "";
      }
    },
    handlerAdd() {
      let dom = this.$refs.fulls;
      cins.launchFullscreen(dom);
    },
    handlerExit() {
      cins.exitFullscreen();
    },
  },
  created() {
    console.log(this.getSearchParams("id"));
  },
  mounted() {
    console.log(cins.getOSType());
  },
};
</script>

<style lang="scss" scoped>
#fulls {
  width: 200px;
  height: 200px;
}
</style>
