const express = require('express')
const app = express()
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

app.use(express.json())
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
require('./routes/billingRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // serve up production assets like main.js and main.css
  // public static folder
  app.use(express.static('client/build'))

  // serve index.html if is not a recognized express route (react route for example)
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
