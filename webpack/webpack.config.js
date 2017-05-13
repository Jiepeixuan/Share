var path = require('path');
var webpack = require('webpack');


var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'src');
var APP_FILE=path.resolve(APP_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');


module.exports = {
    entry: {
        app:APP_FILE
    },
    output: {
        // path: __dirname + '/build',
        path:BUILD_PATH,
        filename: '[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',  //npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test: /\.css$/, 
                loader: 'style!css'  // 需要使用npm install css-loader style-loader --save-dev   
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192' //npm install url-loader file-loader --save-dev  限制字节大小为8192
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false  // js 代码混淆
            }
        })
    ]
};