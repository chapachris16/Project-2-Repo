const mongoose = require('./connections')
const manufacturer = require('./manufacturers')
// Destructuring to use mongoose
const {Schema, model} = mongoose

// Car Schema
const carSchema = new Schema(
    {
        name: {type:String, required: true},
        img: {type:String, required: true},
        year: {type:Number, required: true},
        price: {type:Number, required: true},
        hp: {type:Number, required: true},
        seats: {type:Number, required: true}
    }
)

// model
const car = model('Car', carSchema)
//Exports
module.exports = car, carSchema
