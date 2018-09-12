function timer() {
	//timer
	let deadline = '2019-07-04';

	function getTimeRemaining(endtime) {
		if (Date.parse(endtime) >= Date.parse(new Date())){
			let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds =  Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/1000/60/60) % 24 ),
			days = Math.floor((t/1000/60/60/24));

			return {
				'total' : t,
				'days' : days,
				'hours' : hours,
				'minutes' : minutes,
				'seconds' : seconds
			};
		} else {
			return {
				'total' : 0,
				'days' : 0,
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
		let timer = document.querySelector(id),
		days_first = timer.querySelector('.days_first'),
		days_second = timer.querySelector('.days_second'),
		days_third = timer.querySelector('.days_third'),

		hours_first = timer.querySelector('.hours_first'),
		hours_second = timer.querySelector('.hours_second'),
		minutes_first = timer.querySelector('.minutes_first'),
		minutes_second = timer.querySelector('.minutes_second'),
		seconds_first = timer.querySelector('.seconds_first'),
		seconds_second = timer.querySelector('.seconds_second'),
		timeInterval;
		function updateClock() {
			let t = getTimeRemaining(endtime);
			if (t.days > 99) {
				days_first.innerHTML = String(addZero(t.days))[0];
				days_second.innerHTML = String(addZero(t.days))[1];
				days_third.innerHTML = String(addZero(t.days))[2];
			} else {
				days_second.innerHTML = String(addZero(t.days))[0];
				days_third.innerHTML = String(addZero(t.days))[1];
			}
			

			hours_first.innerHTML = String(addZero(t.hours))[0];
			hours_second.innerHTML = String(addZero(t.hours))[1];

			minutes_first.innerHTML = String(addZero(t.minutes))[0];
			minutes_second.innerHTML = String(addZero(t.minutes))[1];

			seconds_first.innerHTML = String(addZero(t.seconds))[0];
			seconds_second.innerHTML = String(addZero(t.seconds))[1];
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		};
		updateClock();
		timeInterval = setInterval(updateClock, 1000);

	};

	setClock('.eTimer', deadline);
	
}

module.exports = timer;