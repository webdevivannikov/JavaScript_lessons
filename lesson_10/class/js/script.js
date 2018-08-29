class options {
	constructor(height, width, bg){
		this.height = height;
		this.width = width;
	}

	createDiv(text) {
		let div = document.createElement('div');
		div.innerHTML = text;
		div.style.cssText = `height: $(this.height);
		width: $(this.width)
		`;
		document.body.appendChild(div);
	}
 }

 const newDiv = new options("200px","150px");

 newDiv.createDiv("Новый Div");

