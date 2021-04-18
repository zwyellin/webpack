const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const postcssPxToViewport = require('postcss-px-to-viewport')
module.exports = {
    // watch:true,
    // watchOptions: {
    //     // ignored:[/pageA\.js$/, 'node_modules/**'],
    //     aggregateTimeout: 200,
    //     poll:100
    // },

    entry: {
        'app':'./src/views/pageA'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
    },

    devServer: {
        port:8120,
        open: 'Chrome',
        contentBase: path.join(__dirname, 'dist'),
        // openPage: './different/page',
        // useLocalIp: true,
        // compress: true,
        // host: '0.0.0.0',
        // writeToDisk: true
    },
    module: {
        // rules:[
        //     {
        //         test:/\.(c|sc)ss$/,
        //         use:[
        //             {
        //                 loader: 'style-loader',
        //                 options: {
        //                     injectType: 'singletonStyleTag',
        //                     attributes: { id: 'hcl',  nonce: '12345678', },
        //                     esModule: true,
        //                 }
        //             },
        //             {
        //                 loader:'css-loader',
        //                 options: {
        //                     modules:{
        //                         mode:'local',
        //                         exportGlobals: true,
        //                         localIdentName: '[path]--[name]--[local]--[hash:base64:5]',
        //                         // getLocalIdent: (context, localIdentName, localName, options) => {
        //                         //     return 'whatever_random_class_name';
        //                         // },
        //                     }
        //                 }
        //             },
        //             // {
        //             //     loader:'file-loader'
        //             // }
        //             {
        //                 loader:'sass-loader',
        //                 options: {
        //                     sourceMap: true,
        //                     // outputStyle: 'compressed'
        //                     data:'@import "./src/style/theme.scss";'
        //                 }
        //             }
        //         ]
        //     }
        // ]
        rules: [
            {
                test:/\.(c|sc)ss$/,
                use: ExtractTextPlugin.extract({
                    fallback:{
                        loader: 'style-loader',
                        options: {
                            injectType: 'linkTag',
                            // attributes: { id: 'hcl',  nonce: '12345678', },
                            // esModule: true,
                        }
                    },
                    use:[
                        {
                            loader:'css-loader',
                            options: {
                                modules:{
                                    mode:'local',
                                    exportGlobals: true,
                                    localIdentName: '[path]--[name]--[local]--[hash:base64:5]',
                                    // getLocalIdent: (context, localIdentName, localName, options) => {
                                    //     return 'whatever_random_class_name';
                                    // },
                                }
                            }
                        },
                        {
                            loader:'postcss-loader'
                        },
                        {
                            loader:'sass-loader',
                            options: {
                                sourceMap: true,
                                // outputStyle: 'compressed'
                                data:'@import "./src/style/theme.scss";'
                            }
                        }

                    ]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new postcssPxToViewport(),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        })
    ]
    
}