var number = 33721;

console.log(number);
function opNumbers(num) {
	var result = 1;
	if (isNaN(num)) {
	  alert( "Строка преобразовалась в NaN. Не число" );
	  return "ошибка";
	} 
	else {
		while (num != 0){
			result *= num % 10;
			num = Math.floor(num / 10);  
		}
	  return result;
	}	
};
console.log(opNumbers(number));
console.log(Math.pow(opNumbers(number),3));
var string = new String(Math.pow(opNumbers(number),3));
console.log(string.charAt(0) + string.charAt(1));
