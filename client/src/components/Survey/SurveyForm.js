import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'
import M from 'materialize-css'

class SurveyForm extends Component {
  componentDidMount () {
    M.updateTextFields()
  }
  renderFields () {
    return formFields.map(({ label, name, help }) => (
      <Field
        key={name}
        type='text'
        component={SurveyField}
        label={label}
        name={name}
        help={help} />
    ))
  }

  render () {
    return (
      <div className='row valign-wrapper'>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className='col s12'>
          <Fragment>
            {this.renderFields()}
          </Fragment>
          <br />
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
