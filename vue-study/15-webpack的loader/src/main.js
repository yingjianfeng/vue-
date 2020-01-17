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