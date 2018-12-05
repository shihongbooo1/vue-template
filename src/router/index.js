import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'// 导入默认模板
import Error from '@/components/common/error'// 导入错误路由模板
import pages from '../pages'// 获取路由列表

Vue.use(Router)

// 加载默认模板
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      document.getElementById('docTitle').innerHTML = '首页'
      next()
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: Error,
    beforeEnter: (to, from, next) => {
      document.getElementById('docTitle').innerHTML = '404页面不存在'
      next()
    }
  }
]

for (let item in pages) { // 遍历路由列表自动匹配模板
  routes.push({
    path: '/' + item,
    name: item,
    component: () => import('../components/page/' + item),
    beforeEnter: (to, from, next) => {
      document.getElementById('docTitle').innerHTML = pages[item]
      next()
    }
  })
}

const router = new Router({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition || typeof savedPosition === 'undefined') { // 从第二页返回首页时savePosition为undefined
      // 只处理设置了路由元信息的组件
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : false
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : true
      if (savedPosition) {
        return savedPosition
      }
    } else {
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : true
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : false
    }
  }
})

export default router
