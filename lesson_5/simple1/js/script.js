let menu_item = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	li = document.createElement('li'),
	body = document.querySelector('body'),
	title = document.getElementById("title"),
	marketing = document.getElementsByClassName("adv"),
	ask = document.getElementById("prompt");

li.classList.add("menu-item");
console.log(marketing);
menu.insertBefore(menu_item[1], menu_item[3]);
menu.appendChild(li);
li.innerHTML = "Пятый пункт";

body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.innerHTML = "Мы продаем только подлинную технику Apple";

marketing[0].parentNode.removeChild(marketing[0]);
setTimeout(()=>{
	ask.innerHTML = prompt("Какое Ваше отношение к технике Apple?", "")
}, 3000) 
