

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
	let glazing_slider = document.querySelector('.glazing_slider'),
		glazing_block = document.querySelectorAll('.glazing_block'),
		tree = document.querySelector('.tree'),
		aluminum = document.querySelector('.aluminum'),
		plastic = document.querySelector('.plastic'),
		french = document.querySelector('.french'),
		rise = document.querySelector('.rise');

	function hideTabContent() {

		for (let i = 0; i < glazing_block.length; i++){
			if (glazing_block[i].childNodes[3].classList.contains('active')) {
				glazing_block[i].childNodes[3].classList.remove('active');
			}

		};
		tree.style.display = "none";
		aluminum.style.display = "none";
		plastic.style.display = "none";
		french.style.display = "none";
		rise.style.display = "none";
		
	};

	function showTabContent(b){
		hideTabContent();
		let str = glazing_block[b].childNodes[3].classList[0]
		switch (str.substr(0, str.length - 5)) {
			case "tree":
				tree.style.display = "block";
				break;
			case "aluminum":
				aluminum.style.display = "block";
				break;
			case "plastic":
				plastic.style.display = "block";
				break;
			case "french":
				french.style.display = "block";
				break;
			case "rise":
				rise.style.display = "block";
				break;
		}
		glazing_block[b].childNodes[3].classList.add('active');
	};

	for (let i = 0; i < glazing_block.length; i++){
		glazing_block[i].addEventListener('click', (event) => {
			let target = event.target;

			if (target.classList.contains(glazing_block[i].childNodes[3].classList)){
				console.log()
				showTabContent(i);
			}
		});

	};
	// let modal = require('../parts/modal.js');

	// modal();
});