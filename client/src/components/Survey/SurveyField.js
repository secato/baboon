// SurveyField contains logic to render a single label and text input
import React from 'react'

export default ({ input, label, help, meta: { error, touched } }) => {
  return (
    <div className='row'>
      <div className='input-field'>
        {/* <input {...input} className='validate' /> */}
        {/* <label htmlFor={input.name} className='active'>{label} <span className='red-text text-lighten-2'>{touched && error}</span></label> */}
        <input {...input} id={input.name} type='text' />
        <label htmlFor={input.name}>{label}</label>
        {help ? <span className='helper-text'>{help}</span> : ''}
        <span className='red-text text-lighten-2'>{touched && error}</span>
      </div>
    </div>
  )
}
