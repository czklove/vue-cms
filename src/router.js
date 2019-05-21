import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MenberContainer from './components/tabbar/MenberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

// 3. 创建路由对象
// 选中路由高亮 mui-active
var router = new VueRouter({
  routes: [ // 配置路由规则
    {path: '/',redirect: '/home'},
    {path: '/home',component:HomeContainer},
    {path: '/menber',component:MenberContainer},
    {path: '/search',component:SearchContainer},
    {path: '/shopcar',component:ShopcarContainer}
  ],
  linkActiveClass:'mui-active' //覆盖默认的路由高亮的类
  /* mode:'history' */
})

// 把路由对象暴露出去
export default router