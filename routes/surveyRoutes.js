const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const mongoose = require('mongoose')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const { URL } = require('url')
const Path = require('path-parser').default
const _ = require('lodash')

const Survey = mongoose.model('surveys')

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for Voting!')
  })

  app.get('/api/surveys', requireLogin, async (req, res) => {
    // const surveys = await Survey.find({ _user: req.user.id }).
    //   .select({ recipients: false })
    // res.send(surveys)

    const surveys = await Survey.aggregate([
      { $unwind: '$recipients' },
      { $group: {
        _id: {
          _id: '$_id',
          title: '$title',
          subject: '$subject',
          body: '$body',
          dateSent: '$dateSent'
        },
        total: { $sum: 1 },
        yesCount: { $sum: { $cond: ['$recipients.yes', 1, 0] } },
        noCount: { $sum: { $cond: ['$recipients.no', 1, 0] } }
      } },
      { $sort: { '_id.dateSent': -1 } }
    ])
    res.send(surveys)
  })

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    // destructuring to get the survey data

    const { title, subject, body, recipients } = req.body

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user,
      dateSent: Date.now()
    })

    try {
      const mailer = new Mailer(survey, surveyTemplate(survey))
      await mailer.send()
      await survey.save()

      // subtract 1 credit from the user
      req.user.credits -= 1
      const user = await req.user.save()
      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  // webhook to get events from sendgrid
  // get only click events with the url that corresponds to survey
  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body)
    const p = new Path('/api/surveys/:surveyId/:choice')

    _.chain(req.body)
      .map(({ url, email }) => {
      // create a object with a surveyId and a choice
        const match = p.test(new URL(url).pathname)
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice }
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(event => updateDb(event.surveyId, event.email, event.choice))
      .value()

    res.send('thanks')
  })
}

const updateDb = (surveyId, email, choice) => {
  let setObject = {}
  setObject['recipients.$.' + choice] = true

  Survey.updateOne({
    _id: surveyId,
    recipients: {
      $elemMatch: { email: email, yes: false, no: false }
    }
  }, {
    $set: setObject,
    lastResponded: new Date()
  }).exec()
}
