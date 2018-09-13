function pict() {
	//pictures
	let images = document.querySelectorAll('.images'),
		newImage,newDiv;

	for (let i = 0; i < images.length; i++){
		images[i].addEventListener('click', function(event) {
			event.preventDefault();
			newDiv = document.createElement('div');
			newImage = document.createElement('img');
			newImage.setAttribute('src', `img/our_works/big_img/${i+1}.png`); 
			newImage.setAttribute('alt', "pict"); 
			newDiv.className += "popup_image";
			newImage.style.width = "550px";
			newDiv.style.display = "block";
			newImage.className += "popup_image_content";
			document.body.appendChild(newDiv);
			newDiv.appendChild(newImage);
			newDiv.addEventListener('click', (event) => {
				event.preventDefault();
				let target = event.target;
				if (target != newImage) {
					newImage.parentNode.removeChild(newImage);
					newDiv.parentNode.removeChild(newDiv);

				}
			});
		});
	}

}

module.exports = pict;