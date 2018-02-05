function timeout(callback, millis, value) {
	return new Promise((resolve, reject) => {
		setTimeout(val => {
			try {
				const res = callback(val)

				resolve(res)
			} catch (err) {
				reject(err)
			}
		}, millis, value)
	})
}