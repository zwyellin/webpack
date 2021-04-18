// 这里学习 图片/字体/第三方库 加载
// 一、图片处理
// 1、css中引入 优化：雪碧图、base64、压缩
// 相关loader file-loader url-loader img-loader postcss-spries
// 第一步，用file-loader处理css中的图片，发现打包后放在output.path 目录下
// 然后设置publicPath:'./dist/ 即可按照这个路径去加载资源
// 然后想把这些资源放在某个目录下，怎么做，配置file-loader
// name : 配置生成文件的名字
// outputPath ： 打包后存放的目录名 请求路径为：output.path/outputPath/name

// 使用url loader => base64   首先安装npm i url-loader -D
// options和 file-loader 一样，多了limit  encoding编码格式等

// 使用 压缩 图片 img-loader
// 然后配置
// options:{plugin:[]} 也就是要借助imagemin的插件来完成某一类的压缩，按需安装
// https://www.npmjs.com/search?q=keywords:imageminplugin
// 如果安装失败，可以npm install imagemin-mozjpeg --ignore-script
// 但  感觉没效果

// 雪碧图
// 安装 postcss-sprites
// 这个是postcss的插件。可以在上节课那里配置
// 这次试下效果
// 
