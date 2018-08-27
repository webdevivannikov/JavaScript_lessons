let open = document.getElementById("open-btn"),
	name_value = document.getElementsByClassName("name-value")[0],
	budget_value = document.getElementsByClassName("budget-value")[0],
	goods_value = document.getElementsByClassName("goods-value")[0],
	items_value = document.getElementsByClassName("items-value")[0],
	employers_value = document.getElementsByClassName("employers-value")[0],
	discount_value = document.getElementsByClassName("discount-value")[0],
	isopen_value = document.getElementsByClassName("isopen-value")[0],
	goods_item = document.getElementsByClassName("goods-item"),
	main_functions = document.getElementsByClassName("main-functions")[0],
	good_btn = document.getElementsByTagName("button")[1],
	budget_btn = document.getElementsByTagName("button")[2],
	employers_btn = document.getElementsByTagName("button")[3],
	buy_btn = document.getElementsByTagName("button")[4],
	choose_item = document.querySelector(".choose-item"),
	time_value = document.querySelector(".time-value"),
	count_budget_value = document.querySelector(".count-budget-value"),
	hire_employers_item = document.querySelectorAll(".hire-employers-item"),
	budget = document.getElementById('budget'),
	goods_1 = document.getElementById('goods_1'),
	goods_2 = document.getElementById('goods_2'),
	goods_3 = document.getElementById('goods_3'),
	goods_4 = document.getElementById('goods_4');


let money;

good_btn.disabled = 1;
budget_btn.disabled = 1;
employers_btn.disabled = 1;



open.addEventListener('click', () => {
	money = +prompt("Ваш бюджет на месяц:", "");
	while (money == '' || isNaN(money)) {
		money = +prompt("Ваш бюджет на месяц:", "");
	}
	budget_value.textContent = money;
	budget_btn.disabled = 0;
/*	myPrice = +prompt("Цена товара:", "");
	while (myPrice == '' || isNaN(myPrice)) {
		myPrice = +prompt("Цена товара:", "");
	}
*/

	name_value.textContent = prompt("Название вашего магазина:", "").toUpperCase();
	
	employers_btn.disabled = 0;
	good_btn.disabled = 0;
});



good_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++){
		let a = goods_item[i].value;

		if ((typeof(a)) === 'string' || (typeof(a)) === null || a != "" || a.length < 50) {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
			i--;
		}
	}
});

choose_item.addEventListener('change', () => {
	let a = choose_item.value
	if ((typeof(a)) === 'string' && a != '' && a.length < 70) {
		mainList.shopItemes = a.split(",");
		mainList.shopItemes.sort();

		items_value.textContent = mainList.shopItemes;
	} 
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
	if (time < 0) {
		mainList.open = false;
		mainList.discount = false;
	} else if (time > 8 && time < 20) {
			if (time >= 9 && time <= 12)
			{
				alert("Во время с 9 до 12 часов в магазине действуют скидки 10%!");
				mainList.discount = true;	
			}
			else {
				mainList.discount = false;
			}
			mainList.open = true;
		} else {
			mainList.open = false;
			mainList.discount = false;
			}
	if (mainList.open){
		isopen_value.style.backgroundColor = 'green';
	}
	else{
		isopen_value.style.backgroundColor = 'red';
	}
	if (mainList.discount){
		discount_value.style.backgroundColor = 'green'; 
	}
	else{
		discount_value.style.backgroundColor = 'red'; 
	}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money/30;
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length; i++){
		let a = hire_employers_item[i].value;

		if ((typeof(a)) === 'string' || (typeof(a)) === null || a != '' || a.length < 50) {
			mainList.employers[i] = a;
			employers_value.textContent += mainList.employers[i] + ', ';
		}
	}
});

buy_btn.addEventListener('click', () => {
	let time = time_value.value;
	let summa = +prompt("Сумма покупки", "");
	let skidka = 0;
	if ((time >= 9) && (time <= 12)){
		skidka = 0.1;
		alert ("Ваша скидка составляет 10%");
	}
	if (summa >= 3000) {
		skidka = 0.15;
		alert ("Сумма покупки больше 3000. Ваша скидка составляет 15%");
	}
	console.log(skidka);
	console.log(summa);
	summa = summa - summa*skidka;
	console.log(summa);
	alert ("Итоговая цена покупки: " + summa);
});

let	mainList = {
		budget: money,
		nameShop: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItemes: []
	}

