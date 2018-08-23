for (let i = 2; i < 101; i++){
	let rez = true;
	for (let j = 2; j <= Math.sqrt(i); j++){
		if (i % j == 0) {
			rez = false; 
			break;
		}
	}
	if (rez) {
			console.log(i + " - Делители этого числа: 1 и " + i);
	}
	
}
