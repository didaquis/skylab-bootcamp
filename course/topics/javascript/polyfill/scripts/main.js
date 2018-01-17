// # Polyfill

Array.prototype.nyancat = function(){console.log("nyan!")};
a = new Array;
a.nyancat(); // "nyan!"



a.__proto__.happy = function() { console.log(this); };
a[0] = "foo";
a.happy(); // ["foo"]

