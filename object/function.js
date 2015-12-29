"use strict";
function test(args1, args2){
	console.log("args1: " + args1 + "  args2: "+args2);
	console.log("arguments: " + arguments.length);
	console.log("function length: " + test.length);
	console.log("this: " + (this?this.name:this));
}

console.log("==================================function");
var o1 = {name:"o1"};
test("1",1,2);

console.log("==================================object");

o1.testF = test;

o1.testF("1",1,2);

console.log("==================================call");

var o2 = {name:"o2"};
o1.testF.call(o2, "1",1,2);

console.log("==================================立即执行");
(function(a, b){
	console.log(a+b);
})(1,2);


console.log("==================================闭包");
function autoAdd(){
	var num = 1;
	return function(){
		num++;
		return num;
	};
}
var auto1 = autoAdd();
var auto2 = autoAdd();
console.log("auto1: " + auto1());
console.log("auto1: " + auto1());
console.log("auto2: " + auto2());
console.log("auto2: " + auto2());

console.log("==================================monkey path");

function path(o, name){
	var oldFunction = o[name];
	o[name] = function(){
		console.log("方法前");
		oldFunction.apply(this, arguments);
		console.log("方法后");
	};
}

path(o1, "testF");

o1.testF("1",2);

console.log("==================================bind null");
//currying 柯里化
var testProxy = test.bind(null, 1);
testProxy(2, 3);
console.log("prototype1: " + testProxy.prototype);
console.log("prototype2: " + Object.getPrototypeOf(new testProxy(2)));

console.log("==================================bind other");
testProxy = test.bind({name:"other"}, 1);
testProxy();

console.log("==================================toString");
console.log("toString: " + autoAdd.toString());
console.log("==================================isFunction");
console.log("isFunction: " + Object.prototype.toString.call(autoAdd));
console.log("isFunction: " + Object.prototype.toString.call({}));
console.log("isFunction: " + Object.prototype.toString.call([]));
console.log("isFunction: " + Object.prototype.toString.call(/w/));
console.log("isFunction: " + Object.prototype.toString.call(new Error()));
console.log("isFunction: " + Object.prototype.toString.call(null));
console.log("isFunction: " + Object.prototype.toString.call(undefined));
console.log("isFunction: " + Object.prototype.toString.call(NaN));
console.log("isFunction: " + Object.prototype.toString.call(true));
