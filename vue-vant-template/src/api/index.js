import axios from 'axios'
import router from '../router'
import Cookies from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API_FULL, // 来自config下面配置的api地址
  timeout: 600000 // 请求超时时间
})

// request请求拦截器
service.interceptors.request.use(config => {
  if (config.permission === true) { // config.token = true 则携带token 等于false 则不携带token
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
  if (res.code === '401') {
    router.push({ path: '/' })
  }
}, error => {
  // Do something with request error
  console.log(error) // for debug
})

export default service
