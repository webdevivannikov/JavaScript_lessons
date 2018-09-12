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

	/*function closePopup(object, content){
		object.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;
			if (!target == content || !content.contains(target) ) {
			
				object.style.display = "none";
				document.body.style.overflow = '';
			}
		});
	}*/

	//closePopup(popup, popup_form[0]);
	//closePopup(popup_engineer, popup_form[1]);

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
		statusMessage = document.createElement('div'),
		mainList = {};

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
			formData.append('object', mainList);

			request.send(formData);

			for (let key in mainList) {
			    delete mainList[key];
			}

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

	//calc

	let popup_calc_btn = document.querySelectorAll('.popup_calc_btn'),
		popup_calc = document.querySelector('.popup_calc'),
		popup_calc_close = document.querySelector('.popup_calc_close'),
		popup_calc_content = document.querySelector('.popup_calc_content'),
		popup_calc_button = document.querySelector('.popup_calc_button'),
		popup_calc_profile = document.querySelector('.popup_calc_profile'),
		popup_calc_profile_content = document.querySelector('.popup_calc_profile_content'),
		popup_calc_profile_button = document.querySelector('.popup_calc_profile_button'),
		popup_calc_profile_close = document.querySelector('.popup_calc_profile_close'),
		popup_calc_end = document.querySelector('.popup_calc_end'),
		popup_calc_end_close = document.querySelector('.popup_calc_end_close'),
		balcon_icons = document.querySelector('.balcon_icons'),
		big_img = document.querySelector('.big_img');

	//появляется калькулятор
	for (let i = 0; i < popup_calc_btn.length; i++){
		popup_calc_btn[i].addEventListener('click', () => {

			popup_calc.style.display = "block";
			document.body.style.overflow = 'hidden';

		});

	}

	//close
	popup_calc_close.addEventListener('click', (event) => {
		event.preventDefault();
		popup_calc.style.display = "none";
		document.body.style.overflow = '';
	});

	popup_calc_profile_close.addEventListener('click', (event) => {
		popup_calc.style.display = "none";
		popup_calc_profile.style.display = "none";
		document.body.style.overflow = '';
	});	

	popup_calc_end_close.addEventListener('click', (event) => {
		popup_calc.style.display = "none";
		popup_calc_profile.style.display = "none";
		popup_calc_end.style.display = "none";

		document.body.style.overflow = '';
	});


	//closePopup(popup_calc, popup_calc_content);

/*	popup_calc_profile.addEventListener('click', (event) => {
		event.preventDefault();
		let target = event.target;
		console.log(target)
		if (!target.matches popup_calc_profile_content || !popup_calc_profile_content.contains(target) ) {
		
			popup_calc_profile.style.display = "none";
			document.body.style.overflow = '';
		} 

	});*/
	document.body.addEventListener('click', function (event) {
		let target = event.target;
			if(target.matches('.popup, .popup_calc, .popup_engineer')) {
				popup_calc.style.display = 'none';
				popup.style.display = 'none';
				popup_engineer.style.display = 'none';
			}
		});
	balcon_icons.addEventListener('click', (event)=> {
		event.preventDefault();
		let target = event.target;
		switch (target.parentElement.className) {
		 	case 'type1':
		 		document.getElementById("type2").style.display = "none";
		 		document.getElementById("type3").style.display = "none";
		 		document.getElementById("type4").style.display = "none";
		 		document.getElementById("type1").style.display = "inline-block";
		 		mainList.type = 'type1';
		 		break;
	 		case 'type2':
	 			document.getElementById("type1").style.display = "none";
			 	document.getElementById("type3").style.display = "none";
			 	document.getElementById("type4").style.display = "none";
		 		document.getElementById("type2").style.display = "inline-block";
		 		mainList.type = 'type2';
	 			break;
		 	case 'type3':
		 		document.getElementById("type1").style.display = "none";
			 	document.getElementById("type2").style.display = "none";
			 	document.getElementById("type4").style.display = "none";
		 		document.getElementById("type3").style.display = "inline-block";
		 		mainList.type = 'type3';
		 		break;
	 		case 'type4':
	 			document.getElementById("type1").style.display = "none";
			 	document.getElementById("type2").style.display = "none";
			 	document.getElementById("type3").style.display = "none";
		 		document.getElementById("type4").style.display = "inline-block";
		 		mainList.type = 'type4';
	 			break;
		 	default:
		 		break;
		 };
	});


	//закрываем окно с шириной и высотой
	popup_calc_button.addEventListener('click', (event) => {
		mainList.width = document.getElementById('width');
		mainList.height = document.getElementById('height');
		popup_calc.style.display = "none";
		popup_calc_profile.style.display = "block";
		
	});

	popup_calc_profile_button.addEventListener('click', (event) => {
		let i = document.getElementById("view_type").options.selectedIndex;
		mainList.view_type = document.getElementById("view_type").options[i].text;

		let checkbox = document.getElementsByName('checkbox-test');
		  for (let i = 0; i < checkbox.length; i++) {
		    if (checkbox[i].type === 'radio' && checkbox[i].checked) {
		        mainList.profile = checkbox[i].value;       
		    }
		  }

		console.log(mainList);
		popup_calc.style.display = "none";
		popup_calc_profile.style.display = "none";
		popup_calc_end.style.display = "block";
	});


	


	//modal 60
	setTimeout(function() {
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}, 60000);

	// let modal = require('../parts/modal.js');

	// modal();
});