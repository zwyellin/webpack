// 代码分割(懒加载)
// 实现:通过改变写代码方式
// 1:webpack methods : require.ensure() require.include 只是引进,不执行
// 2:es 2015 loader spec :import().then() 可以通过注释的方式 /* webpackChunkName: */


// 分离业务代码和第三方依赖
// 分离业务代码 和 业务员公共代码 和第三方 依赖
// 分离首次加载 和访问后加载的代码

// 再Demo2基础上处理

//  require.ensure 相当于 amd 动态创建script async 然后 加载脚本
// 执行脚本: webpackJsonp  => 脚本本身内容是被包裹了的,并不会执行
// 加载相关依赖 及 注册本脚本的 installedModules 及表明是否加载installedChunks:如果为0,则ok
// 然后执行回调 resolves.shift()(); 我们就可以在require.ensure 的回调中(其实是promise.then())中
// 像本地模块一样引入使用了
// 及,脚本Script会执行onload或Onerror,如果installedChunks[chunkId] !== 0 说明脚本代码没有执行,说明加载失败

// 如果异步加载的模块,含有公共模块,则如何提取公共模块呢?
// 场景: pageA 异步加载subpageA(包含common) 和subpageB(包含common) :即存在公共代码
// 不做处理,会发现,subpageA和subPageB中都有common的代码
// 策略: 使用ensure.include(['']) 相当于直接放在include位置.然后不导入到其它模块中.相当于作用域提升


// 测试 import()


// 总结:
// require.ensure 是webpack 提供的用于动态加载
// import() 内部实现其实也是require.ensure

// 区别: 
// require.ensure 加载脚本,执行脚本,返回的是__webpack_require__,没有自动执行脚本本身内容.需要手动再导入
// 说明: require.ensure([]) 第一个参数可以为空函数,此时,webpack检测回调函数中的require来添加到该位置

// import 加载脚本,执行脚本,返回的是__webpack_require__.bind(null, id) 
// 并且执行了这个代码(即:导入了该模块,即执行了脚本本身内容)
// 也可以 可以通过注释的方式 /* webpackChunkName: */

