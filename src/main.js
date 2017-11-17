//main为入口文件，导入vue
import Vue from 'vue';
//创建一个vue的实例
import App from './App.vue'
//导入路由
//导入轮播图
require('swiper/dist/css/swiper.css')

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper);
import router from './router/index'

new Vue({
  el: '#app',
  router,
  render: function (createElement) {
    return createElement(App)
  }
  //  render:(h)=>h(App)
  // ...App
})

