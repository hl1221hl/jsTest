(function() {
	"use strict";
	//定义一个方法
	function Test() {
	}
	console.log("==========使用Object的原生toString方法获取内置类型==========");
	console.log(Object.prototype.toString.call(Test));
	console.log(Object.prototype.toString.call(new Test()));
	console.log(Object.prototype.toString.call([]));
	console.log(Object.prototype.toString.call(/w/));
	console.log(Object.prototype.toString.call(new Error()));
	console.log(Object.prototype.toString.call(new Date(20151110)));
	console.log(Object.prototype.toString.call(null));
	console.log(Object.prototype.toString.call(undefined));
	console.log(Object.prototype.toString.call(NaN));
	console.log(Object.prototype.toString.call(1));
	console.log(Object.prototype.toString.call(""));
	console.log(Object.prototype.toString.call(true));
	console.log("==========使用Function的原生toString方法获取Function类型==========");
	console.log(Function.prototype.toString.call(Test));
	console.log(Function.prototype.toString.call(Error));
	console.log(Function.prototype.toString.call(Date));
	console.log(Function.prototype.toString.call(RegExp));
	console.log("==========使用typeof方法获取类型==========");
	console.log(typeof (Test));
	console.log(typeof (new Test()));
	console.log(typeof ([]));
	console.log(typeof (/w/));
	console.log(typeof (new Error()));
	console.log(typeof (new Date(20151110)));
	console.log(typeof (null));
	console.log(typeof (undefined));
	console.log(typeof (NaN));
	console.log(typeof (1));
	console.log(typeof (""));
	console.log(typeof (true));
	console.log("==========结合Object、Function原生的toString方法获取类型==========");

	var getType = (function() {
		/**
		 * 使用Object.prototype.toString获取内置类型
		 */
		function getBasicTypeByToObjectString(o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		}

		/**
		 * 使用Function.prototype.toString获取方法或对象构造函数的名称
		 */
		function getTypeByFunctionToString(o) {
			if (typeof (o) === "object") {
				//如果是对象,就获取对象的构造函数
				o = o.constructor;
			}
			return Function.prototype.toString.call(o).match(
					/function\s*(.*)\s*\(/)[1];
		}

		return function(o) {
			if (o !== o) {
				return "NaN";
			}
			//获取内置类型
			var objectType = getBasicTypeByToObjectString(o);
			if (objectType !== "Object") {
				//如果不是Object就直接返回
				return objectType;
			}
			try {
				//获取构造函数名称
				return getTypeByFunctionToString(o);
			} catch (e) {
				return "Object";
			}
		};
	})();
	console.log(getType(Test));
	console.log(getType(new Test()));
	console.log(getType([]));
	console.log(getType(/w/));
	console.log(getType(new Error()));
	console.log(getType(new Date(20151110)));
	console.log(getType(null));
	console.log(getType(undefined));
	console.log(getType(NaN));
	console.log(getType(1));
	console.log(getType(""));
	console.log(getType(true));
	console.log(getType({}));

})();
