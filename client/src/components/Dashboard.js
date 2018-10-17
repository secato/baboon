import React, { Component } from 'react'
import SurveyList from './Survey/SurveyList'

class Dashboard extends Component {
  componentDidMount () {
    this.props.updateBreadCrumb([
      { path: '/', name: 'Home' },
      { path: '/surveys', name: 'Surveys' }
    ])
  }
  render () {
    return (
      <div className='row'>
        <h5>Survey List</h5>
        <blockquote>Click on a survey for more options</blockquote>
        <SurveyList />
      </div>
    )
  }
}

export default Dashboard
