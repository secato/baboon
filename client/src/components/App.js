import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import M from 'materialize-css'

import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import Checkout from './Checkout/Checkout'
import NewSurveyButton from './NewSurveyButton'
import SurveyNew from './Survey/SurveyNew'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.auth) { M.toast({ html: 'Welcome user' }) }
  }

  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <main className='container'>
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route exact path='/billing' component={Checkout} />
            <Route path='/surveys/new' component={SurveyNew} />
          </main>
          <Footer />
          {/* render new survey button only when the user are logged */}
          {this.props.auth ? <NewSurveyButton /> : ''}
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(App)
