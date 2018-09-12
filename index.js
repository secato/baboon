const app = require('express')()
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

console.log('Trying to connec to database')
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

// applying routes
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })       