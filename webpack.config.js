const { join } = require('path');

module.exports = {
    entry:'./src/main.js',//入口
    output:{
        path:join(__dirname, 'lib') ,//出口路径
        filename:"index.js"
    }
}