//var name = 'minhui';
//module.exports =  name;
//let name = 'zhangsan';
//
//export default name;

var $ = require('./lib/jquery');
//console.log($);
var common = {
	getList:function(){
		$.ajax({
			url:'/api/list',
			success:function(res){
				console.log(res);
			}
		})
	}
};

module.exports = common;

