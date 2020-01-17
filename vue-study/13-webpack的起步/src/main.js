//使用commonjs的模块化
const {add,mul} = require("./mathUtil")

console.log(add(10, 20));
console.log(mul(10, 20));

//使用es6的模块化
import {name,age,height} from './info';

console.log(name);
console.log(age);
console.log(height);