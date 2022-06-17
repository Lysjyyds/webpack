import  { marquee } from './marquee.js'
import  { tab } from './tab.js'
import './styles/index.css'
import './styles/index.less'
tab();
marquee();
//1.引入图片
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
//2.创建图片
const gif = document.createElement('img')
const png = document.createElement('img')
//3.给src赋值
gif.src = gifSrc
png.src = pngSrc
//4.插入节点
document.body.appendChild(gif)
document.body.appendChild(png)
// 引入字体图标文件
import './assets/fonts/iconfont.css'

import app from "./app.vue"


