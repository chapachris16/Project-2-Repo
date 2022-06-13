const mongoose = require('mongoose')

// Destructuring
const {Schema, model} = mongoose

// Schema for car 
const CarSchema = new Schema(
    {
        name: {type:String, required: true},
        img: {type:String, required: true},
        manufacturer: {type:String, required: true},
        year: {type:Number, required: true},
        price: {type:Number, required: true},
        hp: {type:Number, required: true},
        seats: {type:Number, required: true}
    }
)

// Model for car
const Car = model('car', CarSchema)
