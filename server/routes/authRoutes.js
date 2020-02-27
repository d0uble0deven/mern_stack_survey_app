const passport = require('passport')

// JWPZ1hmFnjjkvZkQ
// mongodb+srv://dev-prod:JWPZ1hmFnjjkvZkQ@cluster0-s1zr0.mongodb.net/test?retryWrites=true&w=majority

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google'))

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user)
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

}
