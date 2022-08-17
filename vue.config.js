module.exports = {
  devServer: {
    port: '8000', // 本地项目启动默认端口
    open: true, // 启动项目时是否自动打开页面
    proxy: {
      // 请求代理地址
      '/api': {
        target: 'https://api.kinxpeng.com:3000/', //目标地址
        ws: true, //是否代理websocket
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '', //url重写
        },
      },
    },
  },
  publicPath: './',
  outputDir: 'docs', // 输出文件目录(默认dist文件夹)
  productionSourceMap: false, // 去掉打包后的map文件
};
