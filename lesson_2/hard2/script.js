//let x = 5; alert( x++ ); //постфиксное форма, выведется 5, но после значение х будет присвоино 6

console.log([ ] + false - null + true); //NaN

//let y = 1; let x = y = 2; alert(x); //2

console.log([ ] + 1 + 2); //12

//alert( "1"[0] ); //1

console.log(2 && 1 &&null&& 0 &&undefined); //null

//let a = 1; b = 2;
//console.log(!!( a && b )); // преобразует в логическое значение
//console.log(a && b); //логическое умножение

//alert( null || 2 && 3 || 4 ); //3

let a = [1, 2, 3]; b = [1, 2, 3]; 
console.log(a == b); //false - объекты уникальны

//alert( +"Infinity" ); //infinity
console.log ("ёжик" > "яблоко"); //true - видимо сравнивает посимвольно, а ё раньше я
console.log(0 || "" || 2 || undefined || true || falsе ); //2