/** ********** 属性测试 *********** */
(function() {
	"use strict";
	var parentClass = {
		parent : "parent"
	};
	var o = Object.create(parentClass);
	o.self = "self";
	Object.defineProperty(o, "disableEnumerable", {
		enumerable : false
	});

	/** 获取属性值 * */
	console.log("o['self'] >> " + o['self']);
	console.log("o.self >> " + o.all);

	/** 枚举属性 * */
	// for in 可枚举 自有和继承的可枚举属性
	var ps = [];
	for ( var p in o) {
		ps.push(p);
	}
	console.log("for in o >> " + ps);
	// Object.keys获取自有的可枚举属性
	console.log("Object.keys >> " + Object.keys(o));
	// Object.keys获取所有自有属性
	console.log("Object.getOwnPropertyNames >> "
			+ Object.getOwnPropertyNames(o));

	/** 删除属性 * */
	delete o.all;
	console.log("delete o.self >> " + " o.self = " + o.self);

	/** 定义属性及其特性 * */
	Object.defineProperty(o, "self", {
		// 属性值
		value : "self",
		// 是否可写: 默认true
		writable : true,
		// 是否可枚举: 默认true
		enumerable : true,
		// 是否可配置(delete 或 defineProperty): 默认true
		configurable : true
	});

	console.log("defineProperty o.self >> " + " o.self = " + o.self);

	// 不可写
	Object.defineProperty(o, "self", {
		writable : false
	});
	try {
		o.self = 11231;
	} catch (e) {
		console.log("writable false >> " + e);
	}
	// 不可配置: 不能删除也不能修改为可配置
	Object.defineProperty(o, "self", {
		writable : true,
		configurable : false
	});
	try {
		// 不可删除
		delete o.self;
	} catch (e) {
		console.log("configurable false >> " + e);
	}
	try {
		// 不可重新配置
		Object.defineProperty(o, "self", {
			configurable : true
		});
	} catch (e) {
		console.log("configurable false >> " + e);
	}
	/** geter seter 配置属性 * */
	var test = (function(){
		var x = 1;
		return {
			get x(){
				return x++;
			},
			set x(newValue){
				x += newValue;
			}
		};
	})();
	console.log("get test.x >> " + test.x);
	console.log("get test.x >> " + test.x);
	test.x=3;
	console.log("set test.x=3 >> " + test.x);
	Object.defineProperties(test, {
		y:{
			get: function(){
				return "y";
			}
		},
		z:{}
	});
	/** 检测属性* */
	//in 可检测所有属性
	console.log("self in o >> " + ('self' in o));
	//hasOwnProperty 可检测自有属性
	console.log("hasOwnProperty o.self >> " + o.hasOwnProperty("self"));
	console.log("hasOwnProperty o.parent >> " + o.hasOwnProperty("parent"));
	//propertyIsEnumerable 可检测自有可枚举属性
	console.log("propertyIsEnumerable o.self >> " + o.propertyIsEnumerable("self"));
	console.log("propertyIsEnumerable o.disableEnumerable >> " + o.propertyIsEnumerable("disableEnumerable"));
})();
