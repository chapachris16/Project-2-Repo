// DEPENDENCIES
const mongoose = require('./connections')
const Car = require('./cars')
const Manufacturer = require('./manufacturers')
const db = mongoose.connection

db.on("open", () => {
    // ////////////////////////////////////
    // ////////////////////////////////////
    // ///// Seed for manufacturer here //
    // ////////////////////////////////////
    
    // ////////////////////////////////////
    // ////////////////////////////////////
    // ///// Seed for cars here //
    // ////////////////////////////////////

    Manufacturer.deleteMany({Manufacturer})
    .then((deletedManufacturers) => {
        Manufacturer.create(startManufacturers)
        .then((newManufacturer)=>{
            console.log(newManufacturer)
            db.close()
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
            db.close()
        })
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })

    Car.deleteMany({Car})
    .then((deletedCars) => {
        Car.create(startCars)
        .then((newCars)=>{
            console.log(newCars)
            db.close()
        })
        .catch((error) => {
            console.log(error)
            res.json({error})
            db.close()
        })
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})