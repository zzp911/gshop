/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRating from '../pages/Shop/ShopRating/ShopRating'

// import Home from '../pages/Home/Home.vue'
// import Order from '../pages/Order/Order.vue'
// import Personal from '../pages/Personal/Personal.vue'
// import Search from '../pages/Search/Search.vue'

// 路由组件懒加载
const Home = () => import('../pages/Home/Home.vue')
const Order = () => import('../pages/Order/Order.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '',
          redirect: 'goods'
        },
        {
          path: 'goods',
          component: ShopGoods
        },
        {
          path: 'info',
          component: ShopInfo
        },
        {
          path: 'ratings',
          component: ShopRating
        }
      ]
    }
  ]
})
