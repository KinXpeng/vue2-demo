import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './directives'; // 自定义指令

import axios from 'axios';
Vue.prototype.$axios = axios;
// 判断环境为生产环境还是开发环境
if (process.env.NODE_ENV === 'production') {
  // 生产环境
  if (process.env.VUE_APP_FLAG === 'pro') {
    axios.defaults.baseURL = 'https://api.kinxpeng.com:3000/';
  } else {
    axios.defaults.baseURL = 'https://api.kinxpeng.com:3000/';
  }
} else {
  axios.defaults.baseURL = '/api'; // 开发环境
}

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
