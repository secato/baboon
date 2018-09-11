const express = require('express')
const keys = require('./config/keys')
const app = express()

// google oauth setup
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // access token allows us to read, add, delete and other things. But it is not used here
    console.log('access token', accessToken)

    // access token expire in a TimeRanges, we can use refresh token to get a new
    console.log('refresh token', refreshToken)

    // profile information
    console.log('profile: ', profile)
}))

// we use the word 'google' because the strategy above register himself as 'google'
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'] // specifies to google service what access we want have
}))

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })       