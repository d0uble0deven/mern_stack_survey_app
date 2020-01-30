const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new GoogleStrategy())

const PORT = process.env.PORT || 5000
app.listen(PORT)


// https://gentle-depths-31305.herokuapp.com/

// git push heroku master


//Enter http://localhost:5000/auth/google/callback now, since that is what it will be changed to in a later lecture.