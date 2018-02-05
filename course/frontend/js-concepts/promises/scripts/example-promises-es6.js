/* Chained promises (JS ES6 syntax) */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
	(resolve, reject) => {
		if (isMomHappy) {
			const phone = {
				brand: 'Samsung',
				color: 'black'
			};
			resolve(phone);
		} else {
			const reason = new Error('mom is not happy');
			reject(reason);
		}

	}
);

const showOff = function (phone) {
	const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
	return Promise.resolve(message);
};

// call our promise
const askMom = function () {
	willIGetNewPhone
		.then(showOff)
		.then(fulfilled => console.log(fulfilled))
		.catch(error => console.log(error.message));
};

askMom();