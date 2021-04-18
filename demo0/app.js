// es6
import {sum} from './es-module'
// 会把es modules 转化为webpack 的__webpack_exports__ 和 __webpack_require__
// 收集导入过的模块和该模块的export 然后cache（放到一个对象中）和 判断是否__webpack_exports__ 过该特性
// 只有导入的特性才会收集到该__webpack_exports__中，没有导入的会 /* unused harmony export a */
console.log("sum(10,20) =",sum(10,20))
// common js
const {minus} = require('./common')
console.log("minus(10,20) =",minus(10,20))
// 尝试使用wepack entry output 或 weback 的配置形式运行