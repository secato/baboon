const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

// google oauth setup
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