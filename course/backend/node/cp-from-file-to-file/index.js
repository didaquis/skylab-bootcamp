//const cp = require('./cp-1.0.0')
//const cp = require('./cp-2.0.0')
const cp = require('./cp-2.1.0')

const from = process.argv[2]
const to = process.argv[3]

cp(from, to)

console.log('continue...')

// GENERATE super sized files:
// $ dd if=/dev/zero of=xxl bs=1000000000 count=1