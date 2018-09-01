window.addEventListener('DOMContentLoaded', function (){

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}
	};

	hideTabContent(1);

	function showTabContent(b){
		if (tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]){
					showTabContent(i);
					break;
				}

			}
		};
	});

	// Timer
	let deadline = '2018-09-30';

	function getTimeRemaining(endtime) {
		if (Date.parse(endtime) >= Date.parse(new Date())){
			let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds =  Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/1000/60/60) );

			return {
				'total' : t,
				'hours' : hours,
				'minutes' : minutes,
				'seconds' : seconds
			};
		} else {
			return {
				'total' : 0,
				'hours' : 0,
				'minutes' : 0,
				'seconds' : 0
			};
		}
		
	};

	function addZero(number){
		let a;
		if (number < 10){
			a = '0' + number;
		} else {
			a = number;
		}
		return a;
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		timeInterval;
		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = addZero(t.hours);
			minutes.innerHTML = addZero(t.minutes);
			seconds.innerHTML = addZero(t.seconds);
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		};
		updateClock();
		timeInterval = setInterval(updateClock, 900);

	};

	setClock('timer', deadline);

	//Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		infoTab = document.querySelectorAll('.info-tabcontent');

	more.addEventListener('click', () => {
		overlay.style.display = 'block';
		this.document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < infoTab.length; i++) {
		infoTab[i].addEventListener('click', (event) => {
			let target = event.target;
			if (target.className == 'description-btn') {
				overlay.style.display = 'block';
				this.document.body.style.overflow = 'hidden';
			};
		});
	}

	

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		this.document.body.style.overflow = '';
	});

	//Form
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByTagName('form'),
		statusMessage = document.createElement('div');
	
	for (let i = 0; i < form.length; i++) {
		let input = form[i].getElementsByTagName('input');
		form[i].addEventListener('submit', (event) => {
			form[i].appendChild(statusMessage);
			event.preventDefault();

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form[i]);
 
			request.send(formData);

			request.onreadystatechange = () => {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
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

	//Slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex +=n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', () => {
		plusSlides(-1);
	});

	next.addEventListener('click', () => {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', (event) => {
		for (let i = 1; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			};
		};
	});

	//calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0,
		koef = 1;

	totalValue.innerHTML = 0;


	persons.onkeydown = function(event) {
		let chr = event.which;
		if (chr == 16 || chr == 191 || chr == 187 || chr == 231) {
			return false;
		};
	}
	restDays.onkeydown = function(event) {
		let chr = event.which;
		if (chr == 16 || chr == 191 || chr == 187 || chr == 231) {
			return false;
		};
	}

	persons.addEventListener('change', function() {
		if (this.value == '') {
			totalValue.innerHTML = 0;
		} 
		else {
			personsSum = +this.value;
			total = (daysSum + personsSum) * 4000 * koef;
			if (restDays.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		}
		
	});

	restDays.addEventListener('change', function() {
		if (this.value == '') {
			totalValue.innerHTML = 0;
		} else {
			daysSum = +this.value;
			total = (daysSum + personsSum) * 4000 * koef;
			if (personsSum.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		}	
	});

	place.addEventListener('change', function() {
		koef = this.options[this.selectedIndex].value
		if (restDays.value == '' || personsSum.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * koef;
		}
	});


});