import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields () {
    return formFields.map(({ label, name }) => (
      <Field
        key={name}
        type='text'
        component={SurveyField}
        label={label}
        name={name} />
    ))
  }

  render () {
    return (
      <div className='container'>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <Fragment>
            {this.renderFields()}
          </Fragment>
          <Link to='/surveys' className='red btn-flat lighten-2 waves-effect white-text left'>
            <i className='material-icons right'>clear</i>Cancel
          </Link>
          <button className='blue btn-flat waves-effect white-text right' type='submit' name='action'>Next
            <i className='material-icons right'>arrow_forward</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate (values) {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')
  formFields.forEach(({ name }) => {
    if (!values[name]) { errors[name] = `You must providade a ${name} value.` }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
