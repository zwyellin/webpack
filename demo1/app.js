import './page1'
let funA = ()=>{}
const a = new Set([])
console.log('test')
let b = [1,2,3]
let [...c] = b
let  d = {x:1,y:2}
let {x:f} = d
console.log(Object.fromEntries([['x',1]]))
// 如果没有使用babel，则会保留可能不被支持的代码，没办法使用新特性
// 安装：npm i babel-loader  @babel/core @babel/preset-env -s
// 然后进行webpack.config.js配置
// 如果需要使用新的api，则需要 npm install core-js@3 --save
// 然后配置.babelrc 
// 测试class
let arr = {}
arr[Symbol.iterator] = function() {
    let currentPoint = 0
    let that = this
    let len = that.length
    let isDone = false // 是否迭代完
    let hasError = false
     return {
        next:function() {
            console.log('next')
            isDone = currentPoint === (len - 1)
            return isDone ? {done: isDone} :  {value:that[currentPoint++],done: isDone}
        },
        throw:function() {
          console.log('throw')
          hasError = true
          return {value:'throw',done:false}
        },
        return:function() {
          console.log('return')
          return {value:'return',done:false}
        },
        isExecureReturn:function() {
            if(hasError || !isDone) {
                return this.return()
            }
        },

    }
}
for(let item of arr){}

var g = function* () {
    try {
      yield;
    } catch (e) {
      console.log('内部捕获', e);
    }
  };
  
  var i = g();
  i.next();
  
  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
