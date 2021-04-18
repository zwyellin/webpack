import style from '../style/base.css'
import style1 from '../style/common.css'
import sassTest from '../style/sass-test.scss'
import sassTest1 from '../style/sass-test1.scss'
import {testRequest} from '../utils/request'
console.log(style,style1)
console.log(sassTest)
console.log(sassTest1)
console.log('test121222223444567')
testRequest().then(res => {
    console.log(res)
})
// this is pageA 

// 测试 lazyStyleTag 代码
// let flag = true
// setInterval(() => {
//     if(flag) {
//         style.use()
//         style1.unuse()
//     }else {
//         style1.use()
//         style.unuse()
//     }
//     flag = !flag
// }, 1000);
// let sass = require('dart-sass');

// console.log(sass);