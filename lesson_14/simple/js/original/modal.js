function modal() {
	//Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		infoTab = document.querySelectorAll('.info-tabcontent');

	more.addEventListener('click', () => {
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < infoTab.length; i++) {
		infoTab[i].addEventListener('click', (event) => {
			let target = event.target;
			if (target.className == 'description-btn') {
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			};
		});
	}

	

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	});

}

module.exports = modal;