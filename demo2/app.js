// 提取公共代码
// 第一步，不使用CommonsChunkPlugin，会发现全都打到一个包里面
// 第二步，pageA只导入subPageA ，然后使用CommonsChunkPlugin，会发现打了两个包
// 即把公共代码提交到了Common中，如果使用，需要先script加载common，然后再script加载pageA

// 然后，pageA导入subPageA和subPageB,然后使用CommonsChunkPlugin，会发现打了两个包
// 但是并没有把common.js打包到common
// 因为CommonsChunkPlugin是针对多entry的

// 修改entry为多入口

// 会发现
// common中，有公共代码块，commo代码

// 分离业务代码和第三方库
// 策略:增加一个第三方库入口  key:['lodash]
// 此时，第三方库也会打包成一个独立的bundle,但导入该库的文件依然会导入该库,
// 此时,CommonsChunkPlugin 指定name为第三方库,则可以提取出该库,然后不进行其它提取,设置minChunks:Infinity

// 分离业务代码和第三方库，以及公共代码
// 策略:再新建一个 new CommonsChunkPlugin 实例
// 注意:多个CommonsChunkPlugin 为了避免冲突,前面的需要指定范围 chunks:[]
// 即:小范围的在前面先执行,然后再执行大范围的.避免冲突
