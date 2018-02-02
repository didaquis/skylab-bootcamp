fun(); // results NaN

var y = 2;

function fun() {
    var x = 1;
    console.log(x + y);
    var y = 1;
}

fun2(); // results 2

function fun2() {
    var x = 1;
    y = 1;
    console.log(x + y);
    var y;
}