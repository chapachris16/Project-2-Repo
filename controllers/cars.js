// Dependencies
const express = require('express')
const Car = require('../models/cars')
const Manufacturer = require('../models/manufacturers')
// Create route
const router = express.Router()

// ROUTES

// INDEX OF MANUFACTURERS

router.get('/', (req, res) => {
    res.render('cars/index.liquid')
})
// NEW ROUTE FOR MANUFACTURERS  
router.get('/new', (req, res) => {
    res.render('cars/new.liquid')
})

// POST NEW MANUFACTURER TO INDEX
router.post('/', (req,res) => {
    Car.create(req.body)
        .then((car) => {
            res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})

// UPDATE MANUFACTURERS
router.put('/:id', (req, res) => {
    const id = req.params.id
    Car.findByIdAndUpdate(id, req.body, {new: true})
        .then((car) => {
            res.redirect(`/cars/${car._id}`)
        })
})

// EDIT MANUFACTURERS ROUTE 

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Car.findById(id)
        .then((car) => {
            res.render('cars/edit.liquid', {car})
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})


// DELETE MANUFACTURER 
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Car.findByIdAndRemove(id)
        .then((car) => {
            res.redirect('/cars')
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})




// SHOW ROUTE FOR SPECIFIC MANUFACTURER
router.get('/:id', (req, res) => {
    const id  = req.params.id
    Car.findById(id)
        .then((manufacturer) => {
            res.render('cars/show.liquid', {car})
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})



module.exports = router