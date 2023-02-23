<template>
  <div ref="fulls">
    <el-button @click="handlerAdd">按钮</el-button>
    <el-button @click="handlerExit">关闭</el-button>
    <div class="download_img" ref="canvas">
      <img src="https://img0.baidu.com/it/u=2171411284,1924893541&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="">
      <p>城市风景图</p>
    </div>
    <el-button type="primary" @click="handleDownload('测试')">下载图片及文字</el-button>
  </div>
</template>

<script>
import { cins } from "cins";
import html2canvas from "html2canvas"
export default {
  data() {
    return {};
  },
  methods: {
    handlerAdd() {
      let dom = this.$refs.fulls;
      cins.launchFullscreen(dom);
    },
    handlerExit() {
      cins.exitFullscreen();
    },

    // 下载
    handleDownload(name) {
      window.pageYoffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // 先获取你要转换为img的dom节点
      // var node = document.getElementById("canvas"); //传入的id名称
      const node = this.$refs.canvas
      // console.log("node", node);
      const width = node.offsetWidth; //dom宽
      const height = node.offsetHeight; //dom高
      const scale = 4; //放大倍数 这个相当于清晰度 调大一点更清晰一点
      html2canvas(node, {
        width: width,
        heigth: height,
        backgroundColor: "#ffffff", //背景颜色 为null是透明
        dpi: window.devicePixelRatio * 2, //按屏幕像素比增加像素
        scale: scale,
        X: 0,
        Y: 0,
        scrollX: -3, //如果左边多个白边 设置该偏移-3 或者更多
        scrollY: -10,
        useCORS: true, //是否使用CORS从服务器加载图像 !!!
        allowTaint: true, //是否允许跨域图像污染画布  !!!
      }).then((canvas) => {
        // console.log("canvas", canvas);
        const url = canvas.toDataURL(); //这里上面不设值cors会报错
        const a = document.createElement("a"); //创建一个a标签 用来下载
        a.download = name; //设置下载的图片名称
        const event = new MouseEvent("click"); //增加一个点击事件
        //如果需要下载的话就加上这两句
        a.href = url;//此处的url为base64格式的图片资源
        a.dispatchEvent(event); //触发a的单击事件 即可完成下载
      });
    },
  },
  created() {
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.download_img {
  width: 270px;
  height: 300px;
  margin: 20px auto;

  img {
    width: 270px;
    height: 270px;
    vertical-align: top;
  }

  p {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
