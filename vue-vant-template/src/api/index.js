import axios from 'axios'
import router from '../router'
import Cookies from 'js-cookie'

let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API_FULL, // 来自config下面配置的api地址
  timeout: 600000 // 请求超时时间
})

// request请求拦截器
service.interceptors.request.use(config => {
  removePending(config)
  if (config.permission === true) { // config.permission = true 则携带token 等于false 则不携带token
    config.headers['Authorization'] = 'Bearer ' + Cookies.get('token') // 让每个请求携带自定义token 根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error, 111) // for debug
})

// respone 请求响应拦截器
service.interceptors.response.use(config => {
  const res = config.data
  removePending(config)
  if (res.code === '401') {
    router.push({ path: '/' })
  }
}, error => {
  // Do something with request error
  console.log(error) // for debug
})

export default service

