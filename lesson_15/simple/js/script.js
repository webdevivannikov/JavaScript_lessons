// Функция sum должна возвращать тип данных true. Проверить её на это.
let assert = require('chai').assert

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)


describe("sum", function() {
	it("Проверяем на true", function() {
		assert.typeOf(sum(2,2), 'boolean');
	});
});

// Переменная num должна быть равна 5. Проверить на соответствие.

/*let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe("num", function() {
	it("Проверяем значение num", function() {
		assert.equal(num, 5);
	});
});*/

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

console.log(typeof(each(arr, myFunc)));
describe("each", function() {
	it("Проверяем тип данных each", function() {
		assert.typeOf(each(arr, myFunc), 'array');
	});
});
describe("each", function() {
	it("Проверяем длину each", function() {
		assert.lengthOf(each(arr, myFunc), 5, "Длина массива равна 5");
	});
});