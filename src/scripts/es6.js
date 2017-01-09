//块作用域
//if(true){
//	var x = 2;
//}
//console.log(x);
/*if(true){
	let  x = 2;
}
console.log(x);   //会报错

*/

//衡量   const

//const  fruit = 'apple';
//fruit = '1';   报错 衡量只能赋值一次

//const  不变指的是引用指针不变
//const fruit = [];
//fruit.push('apple');
//console.log(fruit);
//fruit.push('lemon');
//console.log(fruit);


//默认参数  es6可以有默认参数
//function breakfast(dessert='bread'){
//	console.log(dessert);
//}
//breakfast();

//箭头函数
let  breakfast = function (dessert){
	return dessert;
}
console.log(breakfast('bread'));
//注意不能用关键字 作为变量名  如break
////简写
let  breakfast1 = (dessert) => {
	return dessert;
}
console.log(breakfast1('bread'));


//模块化开发

'use strict'
let fruit = 'lemon';
let dessert = 'cake';

export {
	fruit,
	dessert
};









export default 'name';
