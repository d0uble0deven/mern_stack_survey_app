const express = require('express')
require('./services/passport')

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)


// key AIzaSyC9jJoHPULP5RIC5ybUtFczFToTiX0e3eQ


// https://gentle-depths-31305.herokuapp.com/
// https://gentle-depths-31305.herokuapp.com/oauth2callback




// git push heroku master

/*
Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later,  we can do one of two things here:

1. Leave the authorized URI Redirect blank, since we will be fixing this later.

2. Enter http://localhost:5000/auth/google/callback now, since that is what it will be changed to in a later lecture.
*/