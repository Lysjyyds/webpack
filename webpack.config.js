const { join } = require("path");
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/main.js", //入口
  output: {
    path: join(__dirname, "lib"), //出口路径
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer:{
      open:true,
      port: 30000,
  },
  module: {
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
        generator: {
          filename:'images/[hash:6][ext]'
        }
      },
      { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[hash:6][ext]'
        }
    }
    ],
  },
};
