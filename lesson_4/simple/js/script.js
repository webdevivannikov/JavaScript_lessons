
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

let money,
	name,
	myPrice,
	time;

function start(){
	money = +prompt("Ваш бюджет на месяц:", "");
	while (money == '' || isNaN(money)) {
		money = +prompt("Ваш бюджет на месяц:", "");
	}

	myPrice = +prompt("Цена товара:", "");
	while (myPrice == '' || isNaN(myPrice)) {
		myPrice = +prompt("Цена товара:", "");
	}
	time = 21;
	name = prompt("Название вашего магазина:", "").toUpperCase();
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
		price: myPrice,
		shopItemes: [],
		chooseGoods: function chooseGoods() {
			for (let i = 0; i < 3; i++){
				let a = prompt("Какой тип товаров будем продавать?", "");

				if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
					mainList.shopGoods[i] = a;
				} else {
					alert("Введенное значение пустое или больше 50 символов!")
					i--;
				}
			}
		},
		dayBudget: function dayBudget() {
			alert("Ежедневный бюджет: " + mainList.budget/30);
		},
		workTime: function workTime(time){
			if (time < 0) {
				console.log('Такого не может быть!');
			} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
				} else {
						console.log('В сутках только 24 часа');
					}
		},
		makeDiscount: function makeDiscount() {
			if (mainList.discount == true){
				mainList.price = mainList.price * 0.8;
			}
		},
		hireEmployers: function hireEmployers() {
			for (let i = 0; i < 4; i++){
				let a = prompt("Имя сотрудника:", "");

				if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
					mainList.employers.name[i] = a;
					mainList.employers.number[i] = i + 1;
				} else {
					alert("Введенное значение пустое или больше 50 символов!")
					i--;
				}
			}
		},
		chooseShopItems: function chooseShopItems() {
			if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 70) {
				let items = prompt("Перечислите через запятую товары", "");
				mainList.shopItemes = items.split(",");
				mainList.shopItemes.push(prompt("Подождите, может введете еще?",""));
			} else {
					alert("Введенное значение пустое или больше 70 символов!")
				}
		},
		selectGoods: function selectGoods() {
			mainList.shopGoods.forEach( function(element, index) {
				index++;
				document.writeln("У нас вы можете купить: " + index + ": " + element + '<br>');
				// statements
			});
		}
	}

mainList.chooseGoods();
mainList.selectGoods();
console.log(mainList);

for (let key in mainList) {
	console.log("Наш магазин включает в себя: " + key + " " + mainList[key] );
}

