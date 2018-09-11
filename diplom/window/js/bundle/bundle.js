(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	let modal = require('../parts/modal.js');

	modal();
});
},{"../parts/modal.js":2}],2:[function(require,module,exports){
function modal() {
	let header_btn = document.getElementsByClassName('header_btn')[0],
		popup_engineer = document.querySelector('.popup_engineer'),
		popup_close = document.querySelectorAll('.popup_close'),
		phone_link = document.querySelectorAll('.phone_link'),
		popup = document.querySelector('.popup'),
		popup_form = document.querySelectorAll('.popup_form');

	header_btn.addEventListener('click', (event) => {
		event.preventDefault();
		let target = event.target;
			if (target.className == 'header_btn') {
				popup_engineer.style.display = 'block';
				document.body.style.overflow = 'hidden';
			};
		
	});

	for (let i = 0; i < popup_close.length; i++) {
		popup_close[i].addEventListener('click', (event) => {
			popup_engineer.style.display = 'none';
			popup.style.display = 'none';
			document.body.style.overflow = '';
		});
		phone_link[i].addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;
			console.log(1);
			if (target.className == 'phone_link' || target.className != 'popup_form') {
				popup.style.display = 'block';
				document.body.style.overflow = 'hidden';
			};
		});
	}
}


module.exports = modal;
},{}]},{},[1]);
