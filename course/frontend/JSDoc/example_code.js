
// Ejemplos: https://code.google.com/archive/p/jsdoc-toolkit/wikis/DocExamples.wiki
// 
// Listado de tags: https://code.google.com/archive/p/jsdoc-toolkit/wikis/TagReference.wiki
// 
// file:///Users/didac/repos/skylab-bootcamp/course/frontend/JSDoc/JS_Doc/example_code.js.html

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



// Class (with prototype object)
/**
 * Base class of a game entity
 * @class Entity
 */
Entity = function() {
};
 
/**
 * Render entity
 * @param {CanvasRenderingContext2D} dc Device context
 */
Entity.prototype.render = function(dc) {
   // Instance method!
};
 
/**
 * Get new instance of entity
 * @param {string} type Type of entity to instantiate
 * @returns {@link Entity}
 */
Entity.getInstance = function(type) {
   // Static method!
};


// Class (with classical approach)
/**
 * Base class of a game entity
 * @class Entity
 */
$class('Entity', /** @lends Entity# **/ {
   /**
   * Render entity
   * @param {CanvasRenderingContext2D} dc Device context
   */
   render: function(dc) {
      // Instance method!
   }
}, /** @lends Entity **/ {
   /**
    * Get new instance of entity
    * @param {string} type Type of entity to instantiate
    * @returns {@link Entity}
    */
   getInstance: function(type) {
      // Static method!
   }
});
/**
 * Ball entity
 * @class Ball
 * @extends Entity
 */
$class('Ball', 'Entity', /** @lends Ball# **/ {
   /**
    * Force ball to bounce
    */
   bounce: function() {
      // Instance method!
   }
});



// namespace
/**
 * Root namespace
 * @namespace root
 */
root = {
   /**
    * Do something really neat
    */
   foo: function() {
   }
};
 
/**
 * Nested namespace
 * @namespace root.nested
 */
root.nested = {
   /**
    * Do something else that is really neat
    */
   bar: function() {
   }
};


// function
/**
  * Do something really neat with parameters - last is optional!
  * @param {string|number} lookup Name or ID of user
  * @param {string} type Type of records to lookup
  * @param {string} [count] Maximum count of entries to retrieve
  * @returns List of records
  */
function getRecords(lookup, type, count) {
}



// object
/**
  Construct a new component

  @class Component
  @classdesc A generic component

  @param {Object} options - Options to initialize the component with
  @param {String} options.name - This component's name, sets {@link Component#name}
  @param {Boolean} options.visible - Whether this component is vislble, sets {@link Component#visible}
*/
function Component(options) {
  /**
    Whether this component is visible or not

    @name Component#visible
    @type Boolean
    @default false
  */
  this.visible = options.visible;

  /**
    This component's name

    @name Component#name
    @type String
    @default "Component"
    @readonly
  */
  Object.defineProperty(this, 'name', {
    value: options.name || 'Component',
    writable: false
  });
}



// Interesante ejemplo de como introducir HTML en la documentación generada. Fíjate en el "." (punto)que hay detrás de la descripción!
/** 
 * The ReplaceSlang method replaces the string &quot;hi&quot; with &quot;hello&quot;.
 *   <script language="javascript">
 *     function testFunc() {
 *       alert(ReplaceSlang(prompt("Enter sample argument")));
 *     }
 *   </script>
 *   <input type="button" value="Test" onclick="testFunc()" />
 * @param {String} str The text to transform
 * @return {String}
 */
exports.ReplaceSlang = function(str) {
  return str.replace("hi", "hello");
};