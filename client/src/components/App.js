import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Checkout from './Checkout/Checkout'
import NewSurveyButton from './NewSurveyButton'
import SurveyNew from './Survey/SurveyNew'
const Dashboard = () => <h2>Dashboard</h2>

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className='container'>
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route exact path='/billing' component={Checkout} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
          <NewSurveyButton />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
