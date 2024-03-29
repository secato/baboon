import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Landing extends Component {
  componentDidMount () {
    this.props.updateBreadCrumb([
      { path: '/', name: 'Home' }
    ])
  }
  render () {
    return (
      <React.Fragment>
        <div className='section no-pad-bot' id='index-banner'>
          <div className='container'>
            <h1 className='header center blue-grey-text text-darken-3'>BABOON</h1>
            <div className='row center'>
              <h5 className='header col s12 light'>A modern survey automation tool</h5>
            </div>
            <div className='row center'>
              {!this.props.auth ? <a href='/auth/google' id='download-button' className='red accent-2 btn-large waves-effect waves-light z-depth-2'><i className='material-icons left'>account_circle</i>Sign in with Google</a>
                : <Link to='/surveys' className='blue accent-2 btn-large waves-effect waves-light z-depth-2'><i className='material-icons left'>dashboard</i>Go to Dashboard</Link>
              }
            </div>
            <br />
          </div>
        </div>
        <div className='section'>
          <div className='row'>
            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center amber-text text-darken-2'><i className='material-icons'>email</i></h2>
                <h5 className='center'>Surveys</h5>
                <p className='light'>Send thousands surveys to your public until they get angry.</p>
              </div>
            </div>

            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center amber-text text-darken-2'><i className='material-icons'>question_answer</i></h2>
                <h5 className='center'>Collect Feedback</h5>
                <p className='light'>Collect a awesome feedback for complex yes/no questions.</p>
              </div>
            </div>

            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center amber-text text-darken-2'><i className='material-icons'>money_off</i></h2>
                <h5 className='center'>Priceless</h5>
                <p className='light'>Use for free every day and every night, we'll be together.</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </React.Fragment>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Landing)
