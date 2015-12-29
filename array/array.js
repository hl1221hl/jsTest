/** ********** 数组测试 *********** */
(function() {
	"use strict";
	//创建数组
	var a1 = [];
	var a2 = [1,,2];
	var a3 = new Array();
	var a4 = new Array(3);
	var a5 = new Array(1,2,3,4,5,6,7,8);
	var as = [a1,a2,a3,a4,a5];
	for(var a of as){
		console.info(a + " -> " + a.length);
	}
	var forEach;
	as.forEach(function(value, i) {
		forEach += " | " + i + ":{" + value+"}";
	});
	console.info("forEach: " + forEach);

	console.info(2 in a2);
	delete a2[2];
	console.info(a5);

	console.info(a5);
	console.info("concat: " + a5.concat([11,12,13]));
	console.info("slice: " + a5.slice(0, 3));
	console.info("join: " + a5.join("--"));
	console.info("splice: " + a5 + " remove  " + a5.splice(0, 3, 2, 3, 4) + " to " + a5);// 修改
	console.info("reverse: " + a5.reverse());// 修改
	console.info("sort: " + a5.sort(function(a, b) {// 修改
		return a-b;
	}));
	a5.push(6);
	console.info("push: " + a5);// 修改
	a5.pop();
	console.info("pop: " + a5);// 修改
	a5.unshift(0);
	console.info("unshift: " + a5);// 修改
	a5.shift();
	console.info("shift: " + a5);// 修改
	console.info("map: " + a5.map(function(elt, i) {
		return elt+1;
	}));
	console.info("filter: " + a5.filter(function(elt, i) {
		return elt%2===0;
	}));
	console.info("reduce: " + a5.reduce(function(sum, elt, i) {
		return sum + elt;
	}, 0));
	console.info("reduceRight: " + a5.reduceRight(function(sum, elt, i) {
		return sum + elt;
	}, 0));
	console.info("indexOf: " + a5.indexOf(8));
	console.info("lastIndexOf: " + a5.lastIndexOf(8));
	console.info("isArray: " + Array.isArray(a5));
	console.info("every: " + a5.every(function(elt, i) {
		return elt>5;
	}));
	console.info("some: " + a5.some(function(elt, i) {
		return elt>5;
	}));

	// 类数组
	function isArrayLike(a){
		if(a &&  
			typeof(a) === "object" &&
			isFinite(a.length) &&
			a.length >=0 && 
			a.length === Math.floor(a.length) &&
			a.length < 2e32){
			return true;
		}
		return false;
	}
})();
