"use strict";
console.log("============1=============");
var sum = function(x, y){
	return x+y;
};
var nums = [1,1,3,5,5];
var meanNum = nums.reduce(sum)/nums.length;

var squareNums = nums.map(function(elt, i) {
	return Math.pow(elt-meanNum, 2);
});
console.log(Math.sqrt(squareNums.reduce(sum)/(nums.length -1)));


function not(f){
	return function(){
		return !(f.apply(this, arguments));
	};
}
function isEven(x){
	return x%2===0;
}
var isOdd = not(isEven);
console.log("1=============isOdd============" + isOdd(1));
console.log("2=============isOdd============" + isOdd(2));



