var week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
    day = new Date().getDay();
    arr = [456456465, 1324165, 35465123, 7894984, 7842543, 3546546, 818181];
    console.log(day);
for (let i = 0; i < 7; i++){
	if (i >= 5) {
		document.writeln("<b>" + week[i] + "</b>"  + "<br>");
	} else if (i == day-1)
	{
		document.writeln("<i>" + week[i] + "</i>"  + "<br>");
	}
	else if ((i == day-1) && (i >= 5))
	{
		document.writeln("<b><i>" + week[i] + "</i></b>"  + "<br>");
	}
	else {
		document.writeln(week[i] + "<br>");
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

