/*********对象原型*********/
(function() {
	"use strict";
	/**继承**/
	function SuperClass(){
		console.log("SuperClass 构造: " + Array.prototype.join.call(arguments, ","));
	}
	
	function SubClass(){
		//继承构造函数
		SuperClass.apply(this, arguments);
		console.log("SubClass 构造: " + Array.prototype.join.call(arguments, ","));
	}
	
	SubClass.prototype = Object.create(SuperClass.prototype);
	SubClass.prototype.constructor = SubClass;
	
	var sub = new SubClass("1", "2", "3");
	console.log("sub instanceof  SuperClass >>> " + (sub instanceof  SuperClass));
	console.log("sub instanceof  SubClass >>> " + (sub instanceof  SubClass));
	
	console.log("sub Prototype >>> " + Object.getPrototypeOf(sub));
})();