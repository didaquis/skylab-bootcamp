/**
 * Diferentes implementaciones para el mismo ejercicio.
 */


/* ************************************************************** */
/* ************************************************************** */
/* ************************************************************** */

function calc(num) {
	function sum(num2) {
		num = num + num2;

		return this;
	}

	function rest(num3) {
		num = num - num3;

		return this;
	}

	function mult(num3) {
		num = num * num3;

		return this;
	}

	function result() {
		return num;
	}

	return {
		sum: sum,
		rest: rest,
		mult: mult,
		result: result
	};
}

console.log(
	calc(4)
		.sum(3)
		.rest(5)
		.mult(2)
		.result()
);

/* ************************************************************** */
/* ************************************************************** */
/* ************************************************************** */

(function() {
	function calc(val) {
		return {
			sum: function(v) {
				val += v;
				return this;
			},
			mult: function(v) {
				val *= v;
				return this;
			},
			div: function(v) {
				val /= v;
				return this;
			},
			subs: function(v) {
				val = val - v;
				return this;
			},
			equal: function() {
				return val;
			}
		};
	}

	console.log(
		calc(1)
			.sum(1)
			.equal()
	);
	console.log(
		calc(2)
			.sum(1)
			.equal()
	);

	//   console.log(
	//     calc(2)
	//       .sum(2)
	//       .mult(3)
	//       .equal()
	//   );
})();


/* ************************************************************** */
/* ************************************************************** */
/* ************************************************************** */


(function() {
	// chain  && constructor

	function Calc(val) {
		this._result = val;
	}

	Calc.prototype.num = function(val) {
		this._result = val;
		return this;
	};

	Calc.prototype.sum = function(val) {
		this._result += val;
		return this;
	};

	Calc.prototype.mult = function(val) {
		this._result *= val;
		return this;
	};

	Calc.prototype.div = function(val) {
		this._result /= val;
		return this;
	};

	Calc.prototype.subs = function(val) {
		this._result = this._result - val;
		return this;
	};

	Calc.prototype.equal = function() {
		return this._result;
	};

	function calc(val) {
		return new Calc(val);
	}

	console.log(
		calc(1)
			.sum(1)
			.equal()
	);
	console.log(
		calc(2)
			.sum(1)
			.equal()
	);

	//   var calc1 = new Calc(2);
	//   var calc2 = new Calc(3);

	//   calc1.sum(1);
	//   calc2.sum(1);

	//   console.log(calc1.equal());
	//   console.log(calc2.equal());

	//   console.log(
	//     calc1
	//       .sum(2)
	//       .mult(3)
	//       .equal()
	//   );
})();
