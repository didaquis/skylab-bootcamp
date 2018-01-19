var o = {
    name: 'i am o',
    map: function (arr) {
        var self = this;

        return arr.map(function (v) {
            return self.name + '-' + v;
        });
    },
    hello: function() {
        return 'hello ' + this.name;
    },
    who: function() {
        return this;
    },
    bindedMap: function (arr) {
        return arr.map(function (v) {
            return this.name + '-' + v;
        }.bind(this));
    },
}

var p = {
    name: 'i am p'
}

console.log(o.map([1, 2, 3]));
console.log(o.hello());

console.log(o.hello.call(p));
console.log(o.who.call(window));

var q = {
    name: 'i am q'
}

var f = o.who.bind(q);
console.log(f());

function bind(func, obj) {
    return function() {
        return func.call(obj);
    }
}

var r = {
    name: 'i am r'
}

var f2 = bind(o.who, r);
console.log(f2());
console.log(f2.call(this));

console.log(o.bindedMap([1, 2, 3]));