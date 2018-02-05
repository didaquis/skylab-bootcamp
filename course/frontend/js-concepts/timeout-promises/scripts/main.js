if (false)
	setTimeout(function (val) {
		console.log(val)

		setTimeout(function (val) {
			console.log(val)

			setTimeout(function (val) {
				console.log(val)
			}, 1000, ++val)
		}, 1000, ++val)
	}, 1000, 1)

//

if (false)
	timeout(val => {
		console.log(val)

		return ++val
	}, 1000, 1)
		.then(val => {
			return timeout(val => {
				console.log(val)

				return ++val
			}, 1000, val)
		})
		.then(val => {
			return timeout(val => {
				console.log(val)

				return ++val
			}, 1000, val)
		})
		.catch(err => console.error(err))

//

const logNIncrease = val => {
	return timeout(val => {
		console.log(val)

		return ++val
	}, 1000, val)
}

logNIncrease(1)
	.then(logNIncrease)
	.then(logNIncrease)
	.catch(err => console.error(err))