// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react'
import {reduxForm} from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
  componentDidMount () {
    this.props.updateBreadCrumb([
      { path: '/', name: 'Home' },
      { path: '/surveys', name: 'Surveys' },
      { path: '/surveys/new', name: 'New' }
    ])
  }

  state = { showFormReview: false }

  renderContent() {
    if(this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({showFormReview: false})} />
    } 
    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true})} />  
  }

  render () {
    return (
      <div className='row'>
        <h5>Survey form</h5>
        <blockquote>Fill the form to send an awesome survey email</blockquote>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)