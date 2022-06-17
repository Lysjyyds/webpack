const { join } = require('path');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/main.js',//入口
    output:{
        path:join(__dirname, 'lib') ,//出口路径
        filename:"index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html'
        })
      ]
}