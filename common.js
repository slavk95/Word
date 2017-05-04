function tbl() {
	var text = document.getElementById("text").value,
	num = document.getElementById("num").value,
	tbl = document.getElementById("tbl");
	var count = text.length - num;
	var arr = text.split("");
	
	for (var i=0; i< num; i++){
		var elemTr = document.createElement("tr");
		tbl.appendChild(elemTr);
		var elemTd = document.createElement("td");
		elemTr.appendChild(elemTd);
		var content = document.createTextNode(text.charAt(i));
		elemTd.appendChild(content);
		// for (var j=0; j<text.length; j++){
		// 	var content = document.createTextNode(text.charAt(i));
		// 	elemTr.appendChild(content);
		// // alert(text.charAt(i))
		// }
	}
	var j=0;
	var newArr = arr.slice(num);
	var elemNew = document.getElementsByTagName("tr");
	for (j=0; j< count; j++){
			var lastText = document.createTextNode((newArr[j]));
			elemNew[j].appendChild(elemTd.appendChild(lastText));
			// elemNew[j].appendChild(elemTd);
			// alert(text.charAt(3));
			alert(newArr[j]);
		}


}
var inp = document.getElementsByTagName("input");
inp[1].addEventListener("change", tbl, false)


