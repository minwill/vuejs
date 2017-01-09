require('./styles/app.scss');
//虽然 css文件单独打包，但是还是要依赖在入口文件添加require('./styles/app.scss');

//var string = require('./scripts/common');
//console.log(string);

//import string from './scripts/common';
//console.log(string);

var common = require('./scripts/common');
//common.getList();


//import ES6 from './scripts/es6.js';
//console.log(ES6);
//import {fruit} from './scripts/es6.js';
//console.log(fruit);
import d from './scripts/es6.js';
console.log(d);
