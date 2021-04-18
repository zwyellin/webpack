const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports  = {
    entry: {
        'app':'./src/views/pageA'
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
        chunkFilename:'[name].check.js',
        publicPath:'./dist/'
    },
    module: {
        rules:[
           {
               test:/\.css$/,
               use:[
                   {
                       loader:'style-loader',
                   },
                   {
                       loader:'css-loader'
                   }
               ]
           },
           {
               test:/\.(png|jpg|jpeg|gif)$/,
               use:[
                   {
                       loader:'file-loader',
                       options: {
                           name:'[name]1.[ext]',
                           outputPath:'img'
                       }
                   },
                //    {
                //        loader:'url-loader',
                //        options:{
                //            limit: 20000,
                //            name:'[name]1.[ext]',
                //            outputPath:'img'
                //        }
                //    },
                   {
                       loader:'img-loader',
                       options:{
                           pngquant:{
                               quality:20
                           }
                        //    plugin: [
                        //     require('imagemin-pngquant')({
                        //         quality: [0.1,0.2]
                        //       }),
                        //    ]
                       }
                   }
               ]
           }
        ]
    },
    plugins:[
        new BundleAnalyzerPlugin()
    ]
}