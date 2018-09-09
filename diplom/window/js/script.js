let header_btn = document.getElementsByClassName('header_btn')[0],
	popup_engineer = document.querySelector('.popup_engineer'),
	popup_close = document.querySelectorAll('.popup_close');

header_btn.addEventListener('click', () => {
	popup_engineer.style.display = 'block';
});

for (let i = 0; i < popup_close.length; i++) {
	popup_close[i].addEventListener('click', () => {
		popup_engineer.style.display = 'none';
	});
}