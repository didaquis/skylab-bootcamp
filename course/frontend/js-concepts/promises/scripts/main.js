// custom promise demo

promise(function () {
    console.log('START async task...')

    // SEE what happens when uncommenting the following statement, which console.log finally runs?
    // throw Error('hey an error here!') 

    return '...END async task'
})
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log('CONTINUE doing other stuff...')

// Promise

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('---')

        try {
            // DO something

            // throw new Error('ERROR on doing something')

            resolve('RUN me async')
        } catch (err) {
            // throw err // WARN! UNCONTROLLED error!

            // reject(err)
        }

    }, 1000)
})
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log('CONTINUE beyond p...')

// chaining promises

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('---')

        try {
            // DO something

            // throw new Error('ERROR on doing something')

            resolve('RUN me async p2')
        } catch (err) {
            // throw err // WARN! UNCONTROLLED error!

            reject(err)
        }

    }, 500)
})
    .then(res => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('---')

            try {
                // DO something

                throw new Error('ERROR on doing something')

                resolve(res + ' / RUN me async p2-2')
            } catch (err) {
                // throw err // WARN! UNCONTROLLED error!

                reject(err)
            }

        }, 500)
    }))
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log('CONTINUE beyond p2...')

// promise with multiple thens

const p3 = new Promise((resolve, reject) => {
    resolve('RUN me async p3')
})
    .then(res => res + ' / RUN me async p3-2')
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log('CONTINUE beyond p3...')

// math about promise thens chained

const calc = new Promise((resolve, reject) => {
    resolve(1)
})
    .then(res => res + 1)
    .then(res => res * 2)
    .then(res => res / 3)
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log('CONTINUE beyond calc...')

// concat about promise thens chained

const concat = new Promise((resolve, reject) => {
    resolve('a')
})
    .then(res => res + 'b')
    .then(res => res + 'c')
    .then(res => res + 'd')
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log('CONTINUE beyond concat...')