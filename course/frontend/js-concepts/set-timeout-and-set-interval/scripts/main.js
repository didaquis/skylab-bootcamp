var timeOut = setTimeout(function () {
    console.log('timeout', timeOut, 'finished');

    clearTimeout(timeOut);
}, 2000);

console.log('continue... setTimeout is asynchronous, does not block the execution of the following statements.');

// clearTimeout(timeOut);

var count = 10;

var interval = setInterval(function () {
    console.log('interval', interval, 'count down', count--);

    if (count === 0)
        clearInterval(interval);
}, 2000);

console.log('continue... setInterval is asynchronous, does not block the execution of the following statements.');