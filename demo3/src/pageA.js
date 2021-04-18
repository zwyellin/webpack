// require.include('./common')
// require.include('./common')
// require.ensure 方法
setTimeout(() => {
    // 相当于amd,插件script async 加载脚本
    // require.ensure(['lodash'],function() {
    //     // 回调,下载下来之后,导入
    //     let _ = require('lodash')
    //    console.log(_.join(['1','2'],'3'))
    // },'lodash')

    // 这边测试 本地 page
    // require.ensure(['./subPageB'],function() {
       
    // },'pageB')

    // 测试 多个异步 公共提取问题 :此时,其实common是公共代码
    // require.ensure(['./subPageA'],function() {
       
    // },'subPageA')

    // 
    require.ensure([],function(require) {
        // do something
        const a = require('./subPageA')
    },'subPageB')

    // 测试 import()
    import('./subPageA').then((res)=> {
        // do something
        console.log(res)
    })
}, 5000);

export default 'pageA'