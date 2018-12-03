'use strict'

// 生产环境接口配置

const env = process.env.BUILD_TYPE
let BASE_API_FULL = env === 'prod' ? '"https://m.cjg.emoney.cn/"' : '"http://shmalldev.cps998.com/"'

module.exports = {
  NODE_ENV: '"production"',
  BASE_API_FULL: BASE_API_FULL // API接口路径
}
