

window.addEventListener('DOMContentLoaded', function() {
	//modal

	let header_btn = document.getElementsByClassName('header_btn')[0],
		popup_engineer = document.querySelector('.popup_engineer'),
		popup_close = document.querySelectorAll('.popup_close'),
		phone_link = document.querySelectorAll('.phone_link'),
		popup = document.querySelector('.popup'),
		popup_form = document.querySelectorAll('.popup_form');

	
	header_btn.addEventListener('click', (event) => {
		event.preventDefault();
		popup_engineer.style.display = 'block';
		document.body.style.overflow = 'hidden';
			
	});

	popup.addEventListener('click', (event) => {
		let target = event.target;

		//console.log(target)
		if (!target == popup_form[0] || !popup_form[0].contains(target)) {
			popup.style.display = 'none';
			document.body.style.overflow = '';
		}

	});
	popup_engineer.addEventListener('click', (event) => {
		let target = event.target;

		//console.log(target)
		if (!target == popup_form[1] || !popup_form[1].contains(target)) {
		
			popup_engineer.style.display = 'none';
			document.body.style.overflow = '';
		}

	});

	for (let i = 0; i < popup_close.length; i++) {
		popup_close[i].addEventListener('click', (event) => {
			event.preventDefault();
			popup_engineer.style.display = 'none';
			popup.style.display = 'none';
			document.body.style.overflow = '';

		});
		phone_link[i].addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;
			
			if (target.className == 'phone_link') {

				popup.style.display = 'block';
				document.body.style.overflow = 'hidden';
			};
		});
		
	}
	//Form
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByTagName('form'),
		statusMessage = document.createElement('div');

	function setCursorPosition(pos, elem) {
	    elem.focus();
	    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	    else if (elem.createTextRange) {
	        var range = elem.createTextRange();
	        range.collapse(true);
	        range.moveEnd("character", pos);
	        range.moveStart("character", pos);
	        range.select()
	    }
	}

	function mask(event) {
	    var matrix = "+7 (___) ___ ____",
	        i = 0,
	        def = matrix.replace(/\D/g, ""),
	        val = this.value.replace(/\D/g, "");
	    if (def.length >= val.length) val = def;
	    this.value = matrix.replace(/./g, function(a) {
	        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	    });
	    if (event.type == "blur") {
	        if (this.value.length == 2) this.value = ""
	    } else setCursorPosition(this.value.length, this)
	};
	    
	for (let i = 0; i < form.length; i++) {
		let input = form[i].getElementsByTagName('input'),
			input_tel = document.getElementsByName("user_phone");

		input_tel[i].addEventListener("input", mask);
	    input_tel[i].addEventListener("focus", mask);
	    input_tel[i].addEventListener("blur", mask);
		form[i].addEventListener('submit', (event) => {
			form[i].appendChild(statusMessage);
			event.preventDefault();

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form[i]);
	
			request.send(formData);
			
			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						console.log(form[i])
						statusMessage.innerHTML = message.success;
					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
			
		});
	};

	//tab
	let glazing_block = document.querySelectorAll('.glazing_block'),
		stuff = document.querySelectorAll('.stuff');

	function hideTabContent(obj, className, elem, index) {

		for (let i = 0; i < obj.length; i++){
			if (obj[i].childNodes[index].classList.contains(className)) {
				obj[i].childNodes[index].classList.remove(className);
				elem[i].style.display = "none";
			}

		};
		
	};


	function showTabContent(a, i, className, arrayStyle, obj){
		hideTabContent(obj, className, arrayStyle, i);

		arrayStyle[a].style.display = "block";
		obj[a].childNodes[i].classList.add(className);
	};

	for (let i = 0; i < glazing_block.length; i++){
		glazing_block[i].addEventListener('click', (event) => {
			let target = event.target;
			if (target.parentNode.childNodes[3].classList.contains(glazing_block[i].childNodes[3].classList)){
				showTabContent(i, 3, 'active', stuff, glazing_block);
			}
		});

	};


	let decoration_item = document.querySelectorAll('.decoration_item'),
		decor = document.querySelectorAll('.decor');

	for (let i = 0; i < decoration_item.length; i++){
		decoration_item[i].addEventListener('click', (event) => {
			let target = event.target;
			if ((target.classList.contains("no_click") || target.parentNode.classList.contains("no_click")) == (decoration_item[i].childNodes[1].classList.contains("no_click"))){
				showTabContent(i, 1, 'after_click', decor, decoration_item);
			}
		});

	};



	//modal 60
	setTimeout(function() {
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}, 60000);

	// let modal = require('../parts/modal.js');

	// modal();
});