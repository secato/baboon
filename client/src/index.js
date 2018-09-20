import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/App'
import reducers from './reducers'

// first param: reducers | second param: innitial state | third param: middlewares
const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)