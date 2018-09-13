const passport = require('passport')

module.exports = app => {
    // we use the word 'google' because the strategy above register himself as 'google'
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'] // specifies to google service what access we want have
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