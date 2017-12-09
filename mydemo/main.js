// alert(1)

// 使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象。
require.config({
	// baseUrl: '../lib/',
	path: {
		// 'jquery': '../lib/jquery.min',
		// 'jqWheel': '../lib/jquery.mousewheel',
		// 'vue': '../lib/vue.min',
		'math': 'math',
		'b': 'b'

	},
	shim: {   // 用于配置不符合AMD规范的模块
		'jqWheel': {
			deps: ['jquery'],
			exports: 'jqWheel'
		}
	}
})

// require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块。第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
// require.js要求，每个模块是一个单独的js文件。
require(['math','b'],function(math,b){
	// ...
	alert(math.add(1,3));
})