const crypto = require('crypto');

function success(data) {
	const res = { status: 'OK' };

	if (data) res.data = data;

	return res;
}

function fail(error) {
	const res = { status: 'KO' };

	if (error) res.error = error;

	return res;
}


function validate(user) {
	for (const prop in user) {
		const value = user[prop];

		if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or empty`);
	}
}


/**
 * Hash string with sha-256 algorithm (require 'crypto')
 * @param  {String} text
 * @return {String} Hashed result, format hexadecimal
 */
function sha256(text){
	return crypto.createHash('sha256').update(text).digest('hex');
}


/**
 * Check if password have numbers, minus chars, mayús chars and at least a length of 8. These symbols are valid: ! * ^ ? + - _ @ # $ % & 
 * 
 * @param  {String} password
 * @throws Will throw an error if password providad not pass the check
 */
function validatePassword(password){
	if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!*^?+-_@#$%&]{8,}$/).test(password)){
		throw Error('password is not enough secure or have invalid chars');
	}
}

module.exports = { success, fail, sha256, validatePassword, validate };