/**
 * @summary Sum two numbers
 * @function
 * @public
 *
 * @param {Number} x - first number
 * @param {Number} y - second number
 * @returns {Number} the sum of the two numbers
 *
 * @example
 * const result = math.sum(5, 3);
 * console.log(result);
 * > 8
 */
exports.sum = (x, y) => {  
  return x + y;
}; // Public Function



/**
 * @summary Split a string
 * @function
 * @public
 *
 * @param {String} string - input string
 * @param {String} [delimiter=' '] - delimiter
 * @returns {String[]} splitted string
 *
 * @example
 * const result = utils.split('foo bar baz');
 * console.log(result);
 * > [ 'foo', 'bar', 'baz' ]
 *
 * @example
 * const result = utils.split('hello_world', '_');
 * console.log(result);
 * > [ 'hello', 'world' ]
 */
exports.split = (string, delimiter = ' ') => {  
  return string.split(delimiter);
}; // Optional Parameter


class Person {

  /**
   * @summary Create an instance of Person
   * @name Person
   * @class
   * @public
   *
   * @param {String} name - person name
   * @returns {Person} Person instance
   *
   * @example
   * const person = new Person('Juan Cruz Viotti');
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * @summary Greet
   * @method
   * @public
   *
   * @example
   * const person = new Person('Juan Cruz Viotti');
   * person.greet();
   * > Hi, my name is Juan Cruz Viotti
   */
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }

} // class



/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @this {Circle}
 * @param {number} r The desired radius of the circle.
 */
function Circle(r) {
    /** @private */ this.radius = r;
    /** @private */ this.circumference = 2 * Math.PI * r;
}

/**
 * Creates a new Circle from a diameter.
 *
 * @param {number} d The desired diameter of the circle.
 * @return {Circle} The new Circle object.
 */
Circle.fromDiameter = function (d) {
    return new Circle(d / 2);
};

/**
 * Calculates the circumference of the Circle.
 *
 * @deprecated
 * @this {Circle}
 * @return {number} The circumference of the circle.
 */
Circle.prototype.calculateCircumference = function () {
    return 2 * Math.PI * this.radius;
};

/**
 * Returns the pre-computed circumference of the Circle.
 *
 * @this {Circle}
 * @return {number} The circumference of the circle.
 */
Circle.prototype.getCircumference = function () {
    return this.circumference;
};

/**
 * Find a String representation of the Circle.
 *
 * @override
 * @this {Circle}
 * @return {string} Human-readable representation of this Circle.
 */
Circle.prototype.toString = function () {
    return "A Circle object with radius of " + this.radius + ".";
};

