import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className='fixed-action-btn'>
      <Link to='/surveys/new' className='btn btn-floating btn-large waves-effect'>
        <i className='large material-icons'>add</i>
      </Link>
    </div>
  )
}
