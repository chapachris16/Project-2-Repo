const mongoose = require('mongoose')

// Destructuring to use mongoose
const {Schema, model} = mongoose

// Schema for manufacturer
const ManufacturerSchema = new Schema(
    {
        name: {type: String, required: true},
        models: [String],
        model_images: [String],
        avg_cost: Number,
        avg_hp: Number,
    }
)
// Model for manufacturer
const Manufacturer = model('manufacturer', ManufacturerSchema)

module.exports = Manufacturer