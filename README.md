# Baboon
A simple full stack app made when I was following a course. It is a simple survey system that send a yes/no question to a email list. Then it collect the feedback of users and shows the total of answers. The name is a joke with [Mailchimp](https://mailchimp.com) :smile:

## Tech:
 - Node / Express
 - MongoDB / Mongoose
 - React, Redux, Redux Form and so on.
 - [Materialize CSS](https://materializecss.com/)
 - [Stripe](https://stripe.com/) for payments (it is only a sandbox, don't really charge)
 - [SendGrid](https://sendgrid.com/)
 - Google Oauth with passport

## Folders
The react app is on **client** folder, it was created with create-react-app.
The other folders are related to the backend API.

## Getting started
Clone, then install both API and client dependencies after that run de dev script from root folder (it starts both client and server with concurrently):
```
# install api dependencies
cd baboon
npm i

# install client dependencies
cd client
npm i

# copy the prod.js config file to dev.js
# and fill with the keys values
cd config
cp prod.js dev.js

# start the app
npm run dev
```

:heart:
