/**
 * Created by user1 on 2018/1/15.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports={
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"a.html",
            template:"index.html",
            inject:false,
            title:'this is a.html',
            excludeChunks:['b','c']
        }),
        new HtmlWebpackPlugin({
            filename:"b.html",
            template:"index.html",
            inject:false,
            title:'this is b.html',
            excludeChunks:['a','c']

        }),
        new HtmlWebpackPlugin({
            filename:"c.html",
            template:"index.html",
            inject:false,
            title:'this is c.html',
            excludeChunks:['b','a']
        })
    ]
}