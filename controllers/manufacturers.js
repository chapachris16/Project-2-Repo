const express = require('express')
const Car = require('../models/cars')
const manufacturer = require('../models/manufacturers')
const Manufacturer = require('../models/manufacturers')

// Create route
const router = express.Router()

// INDEX OF MANUFACTURERS

router.get('/', (req, res) => {
    Manufacturer.find({})
        .then((manufacturers) => {
            console.log(manufacturers)
            res.render('manufacturers/index.liquid', {manufacturers})
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})
// NEW ROUTE FOR MANUFACTURERS  
router.get('/new', (req, res) => {
    res.render('manufacturers/new.liquid')
})

// POST NEW MANUFACTURER TO INDEX
router.post('/', (req,res) => {
    Manufacturer.create(req.body)
        .then((manufacturer) => {
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
    Manufacturer.findByIdAndUpdate(id, req.body, {new: true})
        .then((manufacturer) => {
            res.redirect(`/manufacturers/${manufacturer._id}`)
        })
})

// EDIT MANUFACTURERS ROUTE 

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Manufacturer.findById(id)
        .then((manufacturer) => {
            res.render('manufacturers/edit.liquid', {manufacturer})
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})


// DELETE MANUFACTURER 
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Manufacturer.findByIdAndRemove(id)
        .then((manufacturer) => {
            res.redirect('/manufacturers')
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})




// SHOW ROUTE FOR SPECIFIC MANUFACTURER
router.get('/:id', (req, res) => {
    const id  = req.params.id
    Manufacturer.findById(id)
        .then((manufacturer) => {
            res.render('manufacturers/show.liquid', {manufacturer})
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
        })
})

module.exports = router