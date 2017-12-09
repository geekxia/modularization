// define()函数，用于定义一个模块。第一个参数代表所依赖的模块，第二个参数是回调。

define([],function(){

	var add = function(x,y){
		return x+y;
	}

	return {
		add: add
	}
})