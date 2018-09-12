const app = require('express')()
require('./services/passport')

// applying routes
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })       