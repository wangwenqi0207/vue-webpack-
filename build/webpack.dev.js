const path = require('path')  //需要引入node模块
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')  //vue插件
const HtmlWebpackPlugin = require('html-webpack-plugin')  //html插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");  //自动清理打包后文件插件

module.exports={
    entry:{
        index:'./src/main.js',
    },
    output:{                    //导出文件配置
        path:path.join(__dirname,'../dist'),  //目录文件夹
        filename:'bundle.[hash].js'   //打包后的文件名 加一串hash用于版本控制
    },
    mode:"development", //开发环境
    module:{     
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader' 
            },
            {
                test:/\.less$/,             
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/    //node_modules里面不需要转es6
            },
            {
                test:/.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    //devServer配置 在package.json配置
    devServer:{
        contentBase:'./dist', //打开目录为dist下
        hot:true,   //热更新开启
        port:8000,
        //避免路由错误页面报错
        historyApiFallback:{
            index:'./src/index.html'
        }
    }
}