const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})


const PORT = process.env.PORT || 5000
app.listen(PORT)


// https://gentle-depths-31305.herokuapp.com/

// git push heroku master