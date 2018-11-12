'use strict'
// 开发环境接口域名配置
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API_FULL: '"http://shmalldev.cps998.com/"' // API接口路径
})
