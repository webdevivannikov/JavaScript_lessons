var acc = +prompt("Ваш бюджет на месяц:", "30");
var nameShop = prompt("Название вашего магазина:", "Магазин");

var mainList = {}
var staff = new Object();

mainList = {
	account: 12,
	shopName: "name",
	shopGoods: ['plum'],
	open() {
		return false;
	} 
}

mainList.account = acc;
mainList.shopName = nameShop;
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?", "Апельсины");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?", "Мандарины");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?", "Арбузы");
console.log("бюджет на 1 день - " + mainList.account/30 + " тыс. руб.");
