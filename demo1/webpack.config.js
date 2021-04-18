const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry:{
        'app':'./app.js'
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            hcl: JSON.stringify(Date.parse(new Date()))
          })
    ]
}