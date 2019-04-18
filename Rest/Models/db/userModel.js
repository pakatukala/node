const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    city: String,
    state: String,
    hobbies: String
})

module.exports = mongoose.model('User', userSchema)