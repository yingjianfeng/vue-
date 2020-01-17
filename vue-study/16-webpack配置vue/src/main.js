//使用commonjs的模块化
const {add,mul} = require("./js/mathUtil")

console.log(add(10, 20));
console.log(mul(10, 20));

//使用es6的模块化
import {name,age,height} from './js/info';

console.log(name);
console.log(age);
console.log(height);

//依赖css文件
require("./css/normal.css");

require("./css/special.less")

//使用vue进行开发
import Vue from "vue"

//import App from "./vue/app"

import App from "./vue/App.vue"

const app = new Vue({
  el: "#app",
  template: `<App></App>`,
  components:{
    App
  }
})