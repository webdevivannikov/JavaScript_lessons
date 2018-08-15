let money,
	name,
	myPrice

function start(){
	money = +prompt("Ваш бюджет на месяц:");
	while (money == '') {
		money = +prompt("Ваш бюджет на месяц:");
	}

	myPrice = +prompt("Цена товара:");
	while (myPrice == '') {
		myPrice = +prompt("Цена товара:");
	}
	
	name = prompt("Название вашего магазина:").toUpperCase();
}

start();

let	mainList = {
		budget: money,
		nameShop: name,
		shopGoods: [],
		employers: {
			name: [],
			number: []
		},
		open: false,
		discount: false,
		price: myPrice
	}

function chooseGoods() {
	for (let i = 0; i < 3; i++){
		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
			mainList.shopGoods[i] = a;
		} else {
			alert("Введенное значение пустое или больше 50 символов!")
			i--;
		}
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

function budget(account) {
	return account/30;
};

console.log(budget(mainList.budget));
mainList.discount = true;

function disc(discount, fixprice){
	if (discount) {
		fixprice();
	}
};

disc(mainList.discount, function(){
	mainList.price = mainList.price * 0.8
});

function addEmployers() {
	for (let i = 0; i < 4; i++){
		let a = prompt("Имя сотрудника:");

		if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
			mainList.employers.name[i] = a;
			mainList.employers.number[i] = i + 1;
		} else {
			alert("Введенное значение пустое или больше 50 символов!")
			i--;
		}
	}
}
addEmployers();
console.log(mainList.employers);
