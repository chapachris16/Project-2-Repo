// Dependencies
require("dotenv").config()
const express = require('express') 
const path = require('path')
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
app.use('/manufacturers', ManufacturerRouter)
app.use('/', HomeRouter)

// app.listen(process.env.PORT || 3000)

// SERVER LISTENER
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})