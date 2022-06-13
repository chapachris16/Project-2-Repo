// Dependencies
const express = require('express')
const Car = require('../models/cars')
const Manufacturer = require('../models/manufacturers')
// Create route
const router = express.Router()

// ROUTES

// INDEX
router.get('/', (req, res) => {
    Car.find({})
    .then((car) => {
        res.render('cars')
    })
})