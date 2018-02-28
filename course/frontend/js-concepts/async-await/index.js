function request() {
    return new Promise((resolve, reject) => setTimeout(() => resolve(123), 2000))
}

request().then(console.log)

// resolve

async function fun() {
    let res = await request()

    return res
}

fun().then(console.log)

console.log('continue')

// reject with try-catch

async function fun() {
    try {
        let res = await request()
    } catch (err) {
        console.error(err)
    }
}

fun()

console.log('continue')

// with .catch

async function fun() {
    let res = await request()
    
    return res
}

fun().catch(console.error)

console.log('continue')