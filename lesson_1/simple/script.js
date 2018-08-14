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
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
}

console.log("бюджет на 1 день - " + mainList.account/30 + " тыс. руб.");
