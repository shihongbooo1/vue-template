// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import store from './store'
import 'vant/lib/index.css'
import 'lib-flexible'
import Vuex from 'vuex'

Vue.use(Vant)
Vue.use(Vuex)

Vue.config.productionTip = false

let WeixinJSBridge = window.WeixinJSBridge

// 禁止设置字体大小 避免局部错乱
if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
  handleFontSize()
} else {
  if (document.addEventListener) {
    document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
  } else if (document.attachEvent) {
    document.attachEvent('WeixinJSBridgeReady', handleFontSize)
    document.attachEvent('onWeixinJSBridgeReady', handleFontSize)
  }
}

function handleFontSize () {
  // 设置网页字体为默认大小
  WeixinJSBridge.invoke('setFontSizeCallback', {
    'fontSize': 0
  })
  // 重写设置网页字体大小的事件
  WeixinJSBridge.on('menu:setfont', function () {
    WeixinJSBridge.invoke('setFontSizeCallback', {
      'fontSize': 0
    })
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
