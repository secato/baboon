import React from 'react'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import formFields from './formFields'
import { withRouter } from 'react-router-dom'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className='blue btn-flat waves-effect white-text left'
        name='action'
        onClick={onCancel}>Back
        <i className='material-icons right'>arrow_back</i>
      </button>
      <button
        className='teal btn-flat waves-effect white-text right'
        name='send'
        onClick={() => submitSurvey(formValues, history)}>Send
        <i className='material-icons right'>send</i>
      </button>
    </div>
  )
}

// state was passed as parameter and we destructure the form key
function mapStateToProps ({ form: { surveyForm } }) {
  console.log(surveyForm)
  return {
    formValues: surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
