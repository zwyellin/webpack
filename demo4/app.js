// 学习处理css
// style-loader 创建style标签
// css-loader 实现js可以导入css文件


// 测试:
// pageA中:import '../style/base.css'
// 如果不使用 loaderr 则会报错: You may need an appropriate loader to handle this file type
// 首先使用,css-loader,打包后发现,把它加载进来了.格式为:
// var __WEBPACK_IMPORTED_MODULE_0__style_base_css___default = 
// [3, "body {
// ↵   background: red;
// ↵}
// ↵.f-12 {
// ↵    font-size: 12px;
// ↵}", ""]
// i: ƒ (modules, mediaQuery, dedupe)
// toString: ƒ toString()
// length: 1
// __proto__: Array(0)

// 如何使用,就需要再借助style-loader,按照该对象,在html中,生成style
// 策略: rules中,加上style-loader 注意顺序:rules是后面的先执行,所以是style-loader css-loader
// 效果:在html中,有<style></style>标签及模块内容
// 了解css-loader options 
// modules
// 1. boolean: 是否开启modules: 类会转化为md5名称(避免冲突)  等价于 module:'local'
// import style from '../style/base.css'
// console.log(style) => {f-12: "_3LuuKJRSB0WqyObZjcbFPj"} 给div设置Class
// 此时,不应该再给div 设置fs-12了.因为其名称已经改变了
// 关于:local 和 :global 如果其有:local则会md5.有global不会
// 2. string 有local global pure 表示缺省的是什么类型,可以切换看style内容
// 3. object {
//    mode:'local', // "local" | "global" | "pure"
//    exportGlobals: true // 是否global的类也会导出到(import style from '../style/base.css') style中
//    localIdentName: '[path]--[name]--[local]--[hash:base64:5]', 自定义类名 问题:path太长 ?
//    getLocalIdent: (context, localIdentName, localName, options) => {} 自定义随意类名
// }

// 了解style-loader options
// injectType: 
// styleTag 默认,每个模块 放到不同style中
// singletonStyleTag 合并到一个style中
// lazyStyleTag 此时,不会主动放到style中,(import style from '../style/base.css') style中 多了unuse: ƒ () use: ƒ () 方法
// lazySingletonStyleTag
// linkTag 以<link> 形式导入,注意此时,因为是href,所以需要使用file-loader,因为是远程加载:publicPath:'./dist/'
// attributes 生成的link或style 可以为其添加属性.如 attributes: { id: 'hcl' }
// insert 插入位置,默认是head 的后面


// 使用sass-
// https://webpack.js.org/loaders/sass-loader/
// 1. npm install sass-loader@7.3.0 sass --save-dev
// 修改test: test:/\.(c|sc)ss$/,底部加上 loader:'sass-loader' 即可
// 如果要使用全局变量，可以 data:'@import "./src/style/theme.scss";'

// 远程加载css: 设置linkTag 以<link> 形式导入,注意此时,因为是href,所以需要使用file-loader,因为是远程加载:publicPath:'./dist/'
// 本地加载css: 
// 方法1：extract-loader 
// 方法2：extraTextWebpackPlugin
// 注意此时，会把css打包成一个模块，但不会加载到html中。要么手动link导入。要么借助html-webpack-plugin

// 了解postcss 包含很多插件 相当于babel
// 配置可以放在 .postcssrc.js
// 第一步，安装postcss-loader
// 然后安装其插件(如autoprefix,css-nano(压缩css，其实css-loader用到的也是这里的功能),css-next,postcss-px-to-viewport)
// 
