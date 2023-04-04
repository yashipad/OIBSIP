function convoCel(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputCel").innerHTML=(tempvalue).toFixed(2) + ' &degC';
	document.getElementById("outputFahr").innerHTML=((tempvalue*(9/5)+32)).toFixed(2) + ' &degF';
	document.getElementById('inputFahr').value = "";
	}
}

function convoFahr(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputFahr").innerHTML=(tempvalue).toFixed(2) + ' &degF';
	document.getElementById("outputCel").innerHTML=((tempvalue-32)/1.8).toFixed(2) + ' &degC';
	document.getElementById('inputCel').value = "";
	}
}

