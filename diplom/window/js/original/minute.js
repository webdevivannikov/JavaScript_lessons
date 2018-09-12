function minute() {
	//modal 60
	setTimeout(function() {
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}, 60000);
}

module.exports = minute;