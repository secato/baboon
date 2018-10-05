// SurveyField contains logic to render a single label and text input
import React from 'react'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='input-field'>
      <input {...input} className='validate' />

      <label htmlFor={input.name} className='active'>{label} <span className='red-text text-lighten-2'>{touched && error}</span></label>
    </div>
  )
}
