var start = 0, end = 0, diff = 0, timerID = 0;

function chrono() {
	end = new Date();
	diff = end - start;
	diff = new Date(diff);
	var msec = diff.getMilliseconds();
	var sec = diff.getSeconds();
	var min = diff.getMinutes();
	var hr = diff.getHours() - 1;
	if (min < 10) {
		min = "0" + min;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}
	if (msec < 10) {
		msec = "00" + msec;
	} else if (msec < 100) {
		msec = "0" + msec;
	}
	document.getElementById("chronotime").innerHTML =
		hr + ":" + min + ":" + sec + ":" + msec;
	timerID = setTimeout("chrono()", 10);
}
function chronoStart() {
	start = new Date();
	chrono();
}
function chronoReset() {
	document.getElementById("chronotime").innerHTML = "0:00:00:000";
	start = new Date();
}
function chronoStop() {
	clearTimeout(timerID);
}