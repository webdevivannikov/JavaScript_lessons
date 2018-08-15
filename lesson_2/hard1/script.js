var week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
	D = new Date(),
    hour = D.getHours(),
    day = D.getUTCDay();
    arr = [456456465, 1324165, 35465123, 7894984, 7842543, 3546546, 818181];

for (let i = 0; i < 7; i++){
	switch (i) {
		case 5:
			document.writeln("<b>" + week[i] + "</b>"  + "<br>");
			break;
		case 6:
			document.writeln("<b>" + week[i] + "</b>"  + "<br>");
			break;
		case day-1:
			document.writeln("<i>" + week[i] + "</i>"  + "<br>");
			break;
		default:
			document.writeln(week[i] + "<br>");
			break;
	}	
}

for (let i = 0; i < 7; i++){
	let string = new String(arr[i]);
	switch (string.charAt(0)) {
		case "3":
			console.log(arr[i]);
			break;
		case "7":
			console.log(arr[i]);
			break;
		default:
			break;
	}
}

