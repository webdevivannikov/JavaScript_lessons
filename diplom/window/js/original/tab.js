function tab() {
	//tab
	let glazing_block = document.querySelectorAll('.glazing_block'),
		stuff = document.querySelectorAll('.stuff');

	function hideTabContent(obj, className, elem, index) {

		for (let i = 0; i < obj.length; i++){
			if (obj[i].childNodes[index].classList.contains(className)) {
				obj[i].childNodes[index].classList.remove(className);
				elem[i].style.display = "none";
			}

		};
		
	};


	function showTabContent(a, i, className, arrayStyle, obj){
		hideTabContent(obj, className, arrayStyle, i);

		arrayStyle[a].style.display = "block";
		obj[a].childNodes[i].classList.add(className);
	};

	for (let i = 0; i < glazing_block.length; i++){
		glazing_block[i].addEventListener('click', (event) => {
			let target = event.target;
			if (target.parentNode.childNodes[3].classList.contains(glazing_block[i].childNodes[3].classList)){
				showTabContent(i, 3, 'active', stuff, glazing_block);
			}
		});

	};


	let decoration_item = document.querySelectorAll('.decoration_item'),
		decor = document.querySelectorAll('.decor');

	for (let i = 0; i < decoration_item.length; i++){
		decoration_item[i].addEventListener('click', (event) => {
			let target = event.target;
			if ((target.classList.contains("no_click") || target.parentNode.classList.contains("no_click")) == (decoration_item[i].childNodes[1].classList.contains("no_click"))){
				showTabContent(i, 1, 'after_click', decor, decoration_item);
			}
		});

	};



}

module.exports = tab;