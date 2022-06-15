// Dependencies
const express = require('express')
const manufacturer = require('../models/manufacturers')
// const Car = require('../models/cars')
const Manufacturer = require('../models/manufacturers')
// Create route
const router = express.Router()

// ROUTES

// NEW ROUTE FOR CARS
router.get('/:id/cars/:car_id/new', (req, res) => {
    res.render('cars/new.liquid')
})

// POST NEW CAR
router.post('/:id/cars/:car_id', (req,res) => {
    Manufacturer.findById(req.params.id, (error, manufacturer) => {
        manufacturer.cars.push(req.body)
        manufacturer.save((error) =>{
            res.redirect(`/manufacturers/${manufacturer.id}`)
        })
    })
    Car.create(req.body)
        .then((car) => {
            res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})

// UPDATE CARS
router.put('/:id/cars/:car_id', (req, res) => {
    const id = req.params.id
    const car_id = req.params.car_id
    Manufacturer.findByIdAndUpdate(id, req.body, {new: true})
        .then((car) => {
            res.redirect(`/:id/cars/${car_id}`)
        })
})

// EDIT CARS ROUTE 

router.get('/:id/cars/:car_id.edit', (req, res) => {
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
router.delete('/:id/cars/:car_id', (req, res) => {
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




// // SHOW ROUTE FOR SPECIFIC CAR
// router.get('manufacturers/:id/cars/:car_id', (req, res) => {
//     console.log(req.params)
//     // const manufacturerId  = req.params.id
//     // const carId = req.params.car_id
//     // console.log(id)
//     // const test = Manufacturer.findById(id)
//     // .populate('cars')
//     // console.log(test)//
//         // .then((car) => {
//         //     console.log(id)
//         //     res.render('cars/show.liquid', {car})
//         // })
//         // .catch((error) => {
//         //     console.log(error)
//         //     res.json({error})
//         // })
// })



module.exports = router