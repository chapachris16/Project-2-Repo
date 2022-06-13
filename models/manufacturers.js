const mongoose = require('./connections')
const car = require('./cars')
// Destructuring to use mongoose
const {Schema, model} = mongoose

// Schema for manufacturer
const manufacturerSchema = new Schema(
    {
        name: {type: String, required: true},
        models: [carSchema],
        model_images: [String],
        avg_cost: Number,
        avg_hp: Number,
    }
)
// model
const manufacturer = model('Manufacturer', manufacturerSchema)

//Exports
module.exports = manufacturer