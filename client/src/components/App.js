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
    if (this.props.auth !== prevProps.auth && this.props.auth) { M.toast({ html: 'Welcome user' }) }
  }

  state = {
    breadCrumb: [
      {path: '/', name: 'Home'}
    ]
  }

  updateBreadCrumb = path => {
    this.setState({
      breadCrumb: path
    })
  }

  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header breadCrumbs={this.state.breadCrumb}/>
          <main className='container'>
            <Route exact path='/' render={(props) => <Landing {...props} updateBreadCrumb={this.updateBreadCrumb} />}/>
            <Route exact path='/surveys' render={(props) => <Dashboard {...props} updateBreadCrumb={this.updateBreadCrumb} />}/>
            <Route exact path='/billing' render={(props) => <Checkout {...props} updateBreadCrumb={this.updateBreadCrumb} />} />
            <Route path='/surveys/new' render={(props) => <SurveyNew {...props} updateBreadCrumb={this.updateBreadCrumb} />} />
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
