const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const {override,addDecoratorsLegacy,addWebpackAlias,fixBabelImports,useBabelRc,disableEsLint} = require('customize-cra')


module.exports = override(
    addDecoratorsLegacy(), // 支持装饰器
    addWebpackAlias({
        '@':path.join(__dirname,'src'), // D:\app\xx, /app/xxx
        '#': path.join(__dirname,'src/components'),
        '~': path.join(__dirname,'src/views')
    }), // 添加路径别名

    // ui框架按需加载
    fixBabelImports('import',{
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
    }),


    // 禁用eslint
    disableEsLint()
      
)