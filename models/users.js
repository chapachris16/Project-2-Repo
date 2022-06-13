const mongoose = require('./connections')

// Deconstructing for schema and model
const {Schema, model} = mongoose


//  Schema for Users
const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})


// User Models
const User = model('user', UserSchema)

// Export Model
module.exports = User