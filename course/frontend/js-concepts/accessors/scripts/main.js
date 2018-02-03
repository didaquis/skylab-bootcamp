var auto = {
    _name: 'porsche',

    set name(name) {
        console.log('renaming', this._name, 'to', name);

        this._name = name;
    },

    get name() {
        console.log('retrieving name', this._name);

        return this._name;
    }
};

console.log(auto.name);

auto.name = 'maseratti';

console.log(auto.name);

// ***********************************************

var audi = {};

Object.defineProperty(audi, 'price', {
    set: function (price) {
        console.log('updating price to', price);

        this._price = price;
    },

    get: function () {
        console.log('retrieving price', this._price);

        return this._price;
    }
});

audi.price = 100;

console.log(audi.price);

// ***********************************************

// making name private...

var auto2;
(function () {
    var _name = 'porsche';

    auto2 = {
        set name(name) {
            console.log('renaming', _name, 'to', name);

            _name = name;
        },

        get name() {
            console.log('retrieving name', _name);

            return _name;
        }
    };
})();

console.log(auto2.name);

auto2.name = 'maseratti';

console.log(auto2.name);

// ***********************************************

// making price private...

var audi2;

(function () {
    var _price = 0;

    audi2 = {};

    Object.defineProperty(audi2, 'price', {
        set: function (price) {
            console.log('updating price to', price);

            _price = price;
        },

        get: function () {
            console.log('retrieving price', _price);

            return _price;
        }
    });
})();

audi2.price = 100;

console.log(audi2.price);

