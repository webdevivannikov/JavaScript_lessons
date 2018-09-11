function popup() {
	let phone_link = document.querySelectorAll('.popup_engineer'),
		popup = document.querySelector('.popup');

	for (let i = 0; i < popup_close.length; i++) {
		phone_link[i].addEventListener('click', () => {
			popup.style.display = 'block';
		});
	}
}


module.exports = popup;