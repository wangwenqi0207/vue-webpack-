const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin=require('mini-css-extract-plugin'); //css文件指纹

module.exports={
    entry:{
        index:'./src/main.js',
    },
    output:{                    //导出文件配置
        path:path.join(__dirname,'../dist'),  //目录文件夹
        filename:'bundle.[hash].js'   //打包后的文件名
    },
    mode:"production",   //生产环境
    module:{     
        rules:[
            {
                test:/\.css$/,        
                use:[
                    miniCssExtractPlugin.loader,  //css文件指纹  此插件与style-loader不兼容  生产环境可以删去style-loader
                    'css-loader',
                ]
            },
            {
                test:/\.less$/,             
                use:[
                    miniCssExtractPlugin.loader,  //文件指纹
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/    //node_modules里面不需要转es6
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
                test:/.vue$/,
                loader:'vue-loader'
            }
        ],
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin({
            filename:'[name]_[contenthash:8].css'
        }),
    ],
}