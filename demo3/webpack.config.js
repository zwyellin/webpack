const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry:{
        'pageA':'./src/pageA',
        // 'pageB':'./src/pageB',
        // 'others':['lodash']
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
        publicPath:'./dist/',
        chunkFilename:'[name].check.js'
    },
}