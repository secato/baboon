import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import M from 'materialize-css'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys().then(() => {
      var elems = document.querySelectorAll('.collapsible')
      M.Collapsible.init(elems, {})
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.surveys.length !== this.props.surveys.length) {
      M.toast({ html: 'Survey list loaded' })
    }
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <li key={survey._id._id} className="active">
          <div className='collapsible-header hvr-grow'><i className='material-icons'>question_answer</i>{survey._id.title}</div>
          <div className='collapsible-body'>
            <div className='card blue accent-2' key={survey._id._id}>
              <div className='card-content white-text'>
                <p className='right'>
                  Sent On: {new Date(survey._id.dateSent).toLocaleDateString()}
                </p>
                <span className='card-title'>{survey._id.title}</span>
                <hr className='rules'/>
                {survey._id.body}
              </div>
              <div className='card-action blue darken-2'>
                <a className='btn-flat white-text'>
                  <i className='material-icons left'>thumb_up</i>{survey.yesCount}
                </a>
                <a className='btn-flat white-text'>
                  <i className='material-icons left'>thumb_down</i>{survey.noCount}
                </a>

                <a className='btn-flat white-text right'>
                  Total: {survey.yesCount + survey.noCount}
                </a>

              </div>
            </div>
          </div>
        </li>
      )
    })
  }
  render() {
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

function mapStateToProps({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
