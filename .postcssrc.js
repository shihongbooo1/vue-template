// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['iOS >= 7', 'Android >= 4.1']
    },
    "postcss-pxtorem": {
      "rootValue": 75, // 对根元素大小进行设置
      "unitPrecision": 6, // 转换成rem后保留的小数点位数
      "propList": ["*"], // 存储哪些将被转换的属性列表
      "selectorBlackList": [ // 对css选择器进行过滤的数组
        ".vux-",
        ".weui-",
        ".scroller-",
        ".dp-",
        ".mt-",
        ".mint-",
        ".van-"
      ],
      "replace": true,
      "mediaQuery": false,
      "minPixelValue": 12 // 所有小于12px的样式都不被转换
    }
  }
}
