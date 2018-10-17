import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

class NewSurveyButton extends Component {
  componentDidMount () {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'))
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'))
  }
  render () {
    return (
      <React.Fragment>
        <div className='fixed-action-btn'>
          <Link to='/surveys/new' id='newSurvey'
            className='tooltipped btn-floating btn-large waves-effect red accent-2'
            data-position='top'
            data-tooltip='Create new survey'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default NewSurveyButton
