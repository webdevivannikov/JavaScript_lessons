window.addEventListener('DOMContentLoaded', function (){
	let h, m, s,
		time = setTimeout(now,1000)
		Data = new Date(),
		hours = document.getElementsByClassName('hours')[0],
		minutes = document.getElementsByClassName('minutes')[0],
		seconds = document.getElementsByClassName('seconds')[0];
	console.log(Data.getHours())
	function addZero(number){
		let a;
		if (number < 10){
			a = '0' + number;
		} else {
			a = number;
		}
		return a;
	}
	hours.textContent = addZero(Data.getHours());
	minutes.textContent = addZero(Data.getMinutes());
	seconds.textContent = addZero(Data.getSeconds());
	function now() {
		Data = new Date(),
		hours.textContent = addZero(Data.getHours());
		minutes.textContent = addZero(Data.getMinutes());
		seconds.textContent = addZero(Data.getSeconds());
		time = setTimeout(now, 1000);
	}
	
	

});