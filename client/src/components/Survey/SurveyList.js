import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import M from 'materialize-css'

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys().then(() => {
      var elems = document.querySelectorAll('.collapsible')
      M.Collapsible.init(elems, {})
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.surveys.length !== this.props.surveys.length) {
      M.toast({ html: 'Survey list loaded' })
    }
  }

  renderSurveys () {
    return this.props.surveys.map(survey => {
      return (
        <li key={survey._id._id}>
          <div className='collapsible-header'><i className='material-icons'>filter_drama</i>{survey._id.title}</div>
          <div className='collapsible-body'>
            <span>{survey._id.body}</span>
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
          </div>
        </li>
      )
    })
  }
  render () {
    if (!this.props.surveys) {
      return (
        <div className='container'>
          <div className='container'>
            <div className='progress'>
              <div className='indeterminate' />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <ul className='collapsible'>
          {this.renderSurveys()}
        </ul>
      )
    }
  }
}

function mapStateToProps ({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
