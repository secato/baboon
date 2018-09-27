const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 plan',
      source: req.body.id // token id
    })

    // increase user credits
    req.user.credits += 5
    const user = await req.user.save()

    // send back the user with the credits added
    res.send(user)
  })
}
