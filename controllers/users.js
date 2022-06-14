// Dependencies
const express = require('express')
const User = require('../models/users')
const bcrypt = require('bcryptjs')

// Create route
const router = express.Router()

// ROUTES
router.get('/signup', (req, res) => {
    res.render('users/signup.liquid')
})

// PASSWORD ENCRYPTION SUBMIT PASSWORD FOR SIGNUP
router.post('/signup', async (req, res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );
    User.create(req.body)
    .then((user) => {
        res.redirect('/users/login.liquid')
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})

// USER LOGIN GET ROUTE
router.get("/login", (req, res) => {
    res.render("users/login.liquid");
});

// POST INFO FOR COMPARISON
router.post('/login', (req,res) => {
    // user and password from body
    const {username, password} = req.body
    User.findOne({username})
    .then(async(user) => {
        // comparison for password 
        if(user){
            const result = await bcrypt.compare(password, user.password)
            // if password and user are correct
            if(result){
                req.session.username = username
                req.session.loggedIn = true
                res.redirect('users/show')
            }
            // if password is incorrect send error
            else{
                res.json({error: "Password doesn't match"})
            }
            // if user doesnt exit send error
        } else {
            res.json({error: "User doesn't exist"})
        }
    })
    // Send error as json 
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})

router.get("/logout", (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
      res.redirect("/");
    });
  });


  
// Export
module.exports = router;