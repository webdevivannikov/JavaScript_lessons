(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function (){

	let tab = require('../parts/tab.js');
		timer = require('../parts/timer.js');
		modal = require('../parts/modal.js');
		slider = require('../parts/slider.js');
		calc = require('../parts/calc.js');
		ajax = require('../parts/ajax.js');

	tab();
	timer();
	modal();
	ajax();
	slider();
	calc();

});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
"use strict";

function ajax() {
  //Form
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с Вами свяжемся";
  message.failure = "Что-то пошло не так...";
  var form = document.getElementsByTagName('form'),
      statusMessage = document.createElement('div');

  var _loop = function _loop(i) {
    var input = form[i].getElementsByTagName('input');
    form[i].addEventListener('submit', function (event) {
      form[i].appendChild(statusMessage);
      event.preventDefault(); //AJAX

      var request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      var formData = new FormData(form[i]);
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
          } else {
            statusMessage.innerHTML = message.failure;
          }
        }
      };

      for (var _i = 0; _i < input.length; _i++) {
        input[_i].value = '';
      }
    });
  };

  for (var i = 0; i < form.length; i++) {
    _loop(i);
  }

  ;
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
"use strict";

function calc() {
  //calc
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      koef = 1;
  totalValue.innerHTML = 0;

  persons.onkeydown = function (event) {
    var chr = event.which;

    if (chr == 191 || chr == 187 || chr == 231 || chr == 190 || chr == 188 || chr == 110) {
      return false;
    }

    ;
  };

  restDays.onkeydown = function (event) {
    var chr = event.which;

    if (chr == 191 || chr == 187 || chr == 231 || chr == 190 || chr == 188 || chr == 110) {
      return false;
    }

    ;
  };

  persons.addEventListener('change', function () {
    if (this.value == '' || this.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      personsSum = +this.value;
      daysSum = +restDays.value;
      koef = place.options[place.selectedIndex].value;
      total = (daysSum + personsSum) * 4000 * koef;

      if (restDays.value == '' || restDays.value == '0') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  restDays.addEventListener('change', function () {
    if (this.value == '' || this.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      daysSum = +this.value;
      personsSum = +persons.value;
      koef = place.options[place.selectedIndex].value;
      total = (daysSum + personsSum) * 4000 * koef;

      if (persons.value == '' || persons.value == '0') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  place.addEventListener('change', function () {
    daysSum = +restDays.value;
    personsSum = +persons.value;
    koef = 1;
    koef = this.options[this.selectedIndex].value;

    if (restDays.value == '' || personsSum.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      total = (daysSum + personsSum) * 4000 * koef;
      var a = total;
      totalValue.innerHTML = a;
    }
  });
}

module.exports = calc;
},{}],4:[function(require,module,exports){
"use strict";

function modal() {
  var _this = this;

  //Modal
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      infoTab = document.querySelectorAll('.info-tabcontent');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    _this.document.body.style.overflow = 'hidden';
  });

  for (var i = 0; i < infoTab.length; i++) {
    infoTab[i].addEventListener('click', function (event) {
      var target = event.target;

      if (target.className == 'description-btn') {
        overlay.style.display = 'block';
        _this.document.body.style.overflow = 'hidden';
      }

      ;
    });
  }

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    _this.document.body.style.overflow = '';
  });
}

module.exports = modal;
},{}],5:[function(require,module,exports){
"use strict";

function slider() {
  //Slider
  var slideIndex = 1,
      slides = document.getElementsByClassName('slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.getElementsByClassName('dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    ;

    if (n < 1) {
      slideIndex = slides.length;
    }

    ;

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    ;

    for (var _i = 0; _i < dots.length; _i++) {
      dots[_i].classList.remove('dot-active');
    }

    ;
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 1; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }

      ;
    }

    ;
  });
}

module.exports = slider;
},{}],6:[function(require,module,exports){
"use strict";

function tab() {
  var tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0];

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  ;
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  ;
  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'info-header-tab') {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }

    ;
  });
}

module.exports = tab;
},{}],7:[function(require,module,exports){
"use strict";

function timer() {
  // Timer
  var deadline = '2018-09-30';

  function getTimeRemaining(endtime) {
    if (Date.parse(endtime) >= Date.parse(new Date())) {
      var t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / 1000 / 60 / 60);
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    } else {
      return {
        'total': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
      };
    }
  }

  ;

  function addZero(number) {
    var a;

    if (number < 10) {
      a = '0' + number;
    } else {
      a = number;
    }

    return a;
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval;

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    ;
    updateClock();
    timeInterval = setInterval(updateClock, 900);
  }

  ;
  setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
