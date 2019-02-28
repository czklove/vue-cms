//入口js文件
import Vue from 'vue'

// 导入路由包
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './App.vue'
import {Header} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


Vue.component(Header.name,Header)

//导入轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//到入自己的 router.js 模块

import router from './router.js'

var vm=new Vue({
  el:'#app',
  router,
  render:c=>c(app)
})