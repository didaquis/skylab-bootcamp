const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const restaurantSchema = new mongoose.Schema({

})

restaurantSchema.plugin(mongoosePaginate)

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

mongoose.connect('mongodb://localhost:27017/test')

Restaurant.paginate({}, { page: 3, limit: 10 }, function(err, result) {
    if (err) throw err

    console.log(result)

    // Object {docs: Array[10], total: 25359, limit: 10, page: 3, pages: 2536}
})