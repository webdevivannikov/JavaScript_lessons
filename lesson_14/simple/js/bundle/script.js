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