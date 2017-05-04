/*Розв'яжемо дану задачу за допомогою таблиці*/
function tbl() {
	var text = document.getElementById("text").value, //отримуємо введений текст
	num = document.getElementById("num").value, // отримуємо введене число
	tbl = document.getElementById("tbl"); // отримуємо нашу таблицю
	var count = text.length - num; // отримуємо кількість літер, які не вмістилися у перший стовпчик
	var arr = text.split(""); // розбиваємо нашу стрічку на літери
	if (num == 1){
		for (var n=0; n<text.length; n++){
			var elemTr = document.createElement("tr"); // створюємо рядок таблиці
			tbl.appendChild(elemTr); // додаємо рядок в таблицю
			/*розбиваємо рядок таблиці*/
			var elemTd = document.createElement("td"); 
			elemTr.appendChild(elemTd);
			var content = document.createTextNode(text.charAt(n));
			elemTd.appendChild(content);// додаємо по одній літері у кожен рядок
		}
	}
	else {
		for (var i=0; i< num; i++){
			var elemTr = document.createElement("tr"); // створюємо рядок таблиці
			tbl.appendChild(elemTr); // додаємо рядок в таблицю
			/*розбиваємо рядок таблиці*/
			var elemTd = document.createElement("td"); 
			elemTr.appendChild(elemTd);
			var content = document.createTextNode(text.charAt(i));
			elemTd.appendChild(content);// додаємо по одній літері у кожен рядок
		}
		var j=0,k=-1; // k - це змінна, яку ми використали для того, щоб коли будемо додавати літери, і в нас під час
		//цього закінчаться рядки для розбиття тегом td, то розбиття почнеться знову спочатку.
		var newArr = arr.slice(num);// обрізаємо рядок так, щоб залишилися літери, які ще не додалися
		var lastElemTr = document.getElementsByTagName("tr"); // отримуємо всі рядки
		for (j=0; j< count; j++){
			k++;
			if (lastElemTr[k] == undefined) {
				k=0;
			}
			var lastElemTd = document.createElement("td");
			lastElemTr[k].appendChild(lastElemTd);
			var lastContent = document.createTextNode((newArr[j])); 
			lastElemTd.appendChild(lastContent);
		}
	}
}
var inp = document.getElementsByTagName("input");
inp[1].addEventListener("change", tbl, false); // стандартна модель обробника подій


