function minute() {
	//modal 60
	let popup = document.querySelector('.popup');
	setTimeout(function() {
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}, 60000);
}

module.exports = minute;