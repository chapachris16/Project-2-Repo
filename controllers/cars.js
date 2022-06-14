// Dependencies
const express = require('express')
// const Car = require('../models/cars')
const Manufacturer = require('../models/manufacturers')
// Create route
const router = express.Router()

// ROUTES

// // INDEX OF ALL CAR

// router.get('/', (req, res) => {
//     res.render('cars/index.liquid')
// })

// NEW ROUTE FOR CARS
router.get('/new', (req, res) => {
    res.render('cars/new.liquid')
})

// POST NEW CAR
router.post('/', (req,res) => {
    Manufacturer.findById(req.params.id, (error, manufacturer) => {
        manufacturer.cars.push(req.body)
        manufacturer.save((error) =>{
            res.redirect(`/manufacturers/${manufacturer.id}`)
        })
    })
    // Car.create(req.body)
    //     .then((car) => {
    //         res.redirect('/')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //         res.json({error})
    //     })
})

// UPDATE CARS
router.put('/:id', (req, res) => {
    const id = req.params.id
    Car.findByIdAndUpdate(id, req.body, {new: true})
        .then((car) => {
            res.redirect(`/cars/${car._id}`)
        })
})

// EDIT CARS ROUTE 

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


// DELETE CARS
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




// SHOW ROUTE FOR SPECIFIC CAR
router.get('/:id', (req, res) => {
    const id  = req.params.id
    Manufacturer.findById(id)
        .then((car) => {
            console.log(car)
            res.render('cars/show.liquid', {car})
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})



module.exports = router