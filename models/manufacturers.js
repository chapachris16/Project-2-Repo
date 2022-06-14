const mongoose = require('./connections')
// const Car = require('./cars')
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
// Schema for manufacturer
const manufacturerSchema = new Schema(
    {
        name: {type: String, required: true},
        img: String,
        cars: [carSchema],
        avg_cost: {type:Number, default: 0},
        avg_hp: {type:Number, default: 0},
    }
)
// model
const manufacturer = model('Manufacturer', manufacturerSchema)

//Exports
module.exports = manufacturer