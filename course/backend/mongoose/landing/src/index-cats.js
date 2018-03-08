const mongoose = require('mongoose')
const assert = require('assert')

mongoose.connect('mongodb://localhost/test')

//const Cat = mongoose.model('Cat', { name: String })

//const kitty = new Cat({ name: 'Zildjian' })
// const kitty = new Cat({ name: 'Sucio' })

// kitty.save()
//     .then(() => console.log('meow'))

// Cat.find({ name: 'Sucio' }, (err, cat) => {
//     console.log(cat)
// })

// Cat.find({ name: 'Sucio'})
//     .then(cat => {
//         console.log(cat)
//     })
//     .catch(console.error)

// Cat.findOneAndUpdate({ name: 'Sucio' }, { name: 'Dirty' }, /*options,*/)
//     .then(console.log)
//     .catch(console.error)

// Cat.find({ name: 'Dirty' })
//     .then(cats => {
//         const cat = cats[0]

//         console.log(cat)

//         cat.name = 'Sucio'

//         return cat.save()
//     })
//     .then(console.log)
//     .catch(console.error)

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Cat = mongoose.model('Cat', schema)

// This cat has no name :(

const cat = new Cat()

cat.save(function (error) {
    console.error(error)
    
    assert.equal(error.errors['name'].message, 'Path `name` is required.')

    error = cat.validateSync()

    assert.equal(error.errors['name'].message, 'Path `name` is required.')
})

