import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys()
  }

  renderSurveys () {
    return this.props.surveys.map(survey => {
      return (
        <div className='card blue-grey darken-1' key={survey._id._id}>
          <div className='card-content white-text'>
            <span className='card-title'>{survey._id.title}</span>
            <p>
              {survey._id.body}
            </p>
            <p className='right'>
              Sent On: {new Date(survey._id.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            <a>Yes: {survey.yesCount}</a>
            <a>No: {survey.noCount}</a>
          </div>
        </div>
      )
    })
  }
  render () {
    return (
      this.renderSurveys()
    )
  }
}

function mapStateToProps ({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
