import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './style.css'

// Development only helper
import axios from 'axios'
window.axios = axios

// first param: reducers | second param: innitial state | third param: middlewares
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_PK)
// console.log('ENV is', process.env.NODE_ENV)
