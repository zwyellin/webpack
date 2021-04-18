const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry:{
        'pageA':'./src/pageA',
        'pageB':'./src/pageB',
        'others':['lodash']
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
        chunkFilename:'[name].check.js'
    },
    plugins:[

        new webpack.optimize.CommonsChunkPlugin({
            name:'others',
            minChunks:Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2,
            chunks:['pageA','pageB']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'mini',
            minChunks:Infinity
        })
    ]
}