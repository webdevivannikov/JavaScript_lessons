var myAccount = +prompt("Ваш бюджет на месяц:", "30");
	shopName = prompt("Название вашего магазина:", "Магазин");
	mainList = {
		account: myAccount,
		nameShop: shopName,
		shopGoods: [],
		employers: {},
		open: false
	}

for (let i = 0; i < 3; i++){
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
		mainList.shopGoods[i] = a;
	} else {
		alert("Введенное значение пустое или больше 50 символов!")
	}
}

/*let i = 0;
while (i < 3) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert("Введенное значение пустое или больше 50 символов!")
	}
}
*/
/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert("Введенное значение пустое или больше 50 символов!")
	}
	
}
while (i < 3)*/

console.log(mainList);

console.log("бюджет на 1 день - " + mainList.account/30 + " тыс. руб.");
