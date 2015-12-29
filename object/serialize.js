/** *******对象序列化******** */
(function() {
	"use strict";
	var o = {
		a : "a",
		get b(){
			return "b";
		}
	};
	//toString 会返回  [object Object]
	console.log(o.toString());
	//JSON.stringify 转化为 json string, 只会序列化可枚举的自有属性
	var str = JSON.stringify(o);
	console.log("JSON.stringify >> " + str +  "  type: " + typeof(str));
	//JSON.parse 转化 json string为对象
	var newO = JSON.parse(str);
	console.log("JSON.parse >> " + newO +  "  type: " + typeof(newO));
	
	//如果对象有toJSON方法, JSON.stringify会直接调用
	o.toJSON = function(){
		return "aaaaaaaaaaaaaaa";
	};
	str = JSON.stringify(o);
	console.log("JSON.stringify >> " + str +  "  type: " + typeof(str));
})();


