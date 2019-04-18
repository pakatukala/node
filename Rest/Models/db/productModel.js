const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: String,
    phone: Number,
    password: String
})

module.exports = mongoose.model('Product', productSchema)