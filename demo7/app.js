// 搭建本地开发环境


// 1、webpack watch mode  =>webpack -w|-watch
// 2、webpack-dev-server
// 3、express + webpack-dev-middleware


// 第一种：webpack -w|-watch 
// 在demo4做的测试
// 做法：直接webpack -w 
// 其它：可以在配置文件里面：https://webpack.js.org/configuration/watch/#root
// module.exports = {
//     watch:true,
//     watchOptions: {
//         ignored:[/pageA\.js$/, 'node_modules/**'], //忽略某个文件/文件夹下的内容修改触发watch
//         aggregateTimeout: 2000, // 防抖
//         poll:1000 // 轮询时间
//     },
// 说明：此时如果有监听的内容，有修改，则会重新打包
// 只是监听文件修改，重新打包而已，并不会开发服务器



// 第二种：webpack-dev-server
// 说明，会开启服务器，此时运行在内容。我们看不到新的打包内容
// 路径重定向，接口代理，模块热更新，等功能
// https://webpack.js.org/configuration/dev-server/#root
// npm install webpack-dev-server -D
// 这边webpack为3.12.0 所以webpack-dev-server版本我这边安装的是"webpack-dev-server": "^2.11.1"
// 否则，兼容问题会报错
// 配置：
// module.exports = {
//    devserve: {
//       port:8000
//    }
// 运行：此时用webpack-dev-server 来启动
//因为没有全局安装，所以需要： node_modules/.bin/webpack-dev-server
// 或npm run serve 然后再script中增加这个bin就可以
//  "serve":"webpack-dev-server"