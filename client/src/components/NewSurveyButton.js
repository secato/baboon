import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

class NewSurveyButton extends Component {
  componentDidMount () {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.tap-target')
      M.TapTarget.init(elems)
    })
  }
  render () {
    return (
      <React.Fragment>
        <div className='fixed-action-btn'>
          <Link to='/surveys/new' id='newSurvey' className='waves-effect waves-light btn btn-large btn-floating red accent-2'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
        <div className='tap-target' data-target='newSurvey'>
          <div className='tap-target-content'>
            <h5>Title</h5>
            <p>A bunch of text</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NewSurveyButton
