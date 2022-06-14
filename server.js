// Dependencies
require("dotenv").config()
const express = require('express') 
const path = require('path')
const CarRouter = require('./controllers/cars')
const ManufacturerRouter = require('./controllers/manufacturers')
const UserRouter = require('./controllers/users')
const HomeRouter = require('./controllers/home')
const middleware = require('./utils/middleware')

// Use Liquid Templating and directory path
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})




// MIDDLEWARE
middleware(app)

// 

// ROUTES SETUP 
app.use('/users', UserRouter)
app.use('/cars', CarRouter)
app.use('/manufacturers', ManufacturerRouter)
app.use('/', HomeRouter)

// SERVER LISTENER
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})