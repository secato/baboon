const app = require('express')()
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

// loading models
require('./models/User')

// loading services
require('./services/passport')

console.log('Trying to connect to database')
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

// applying routes
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
