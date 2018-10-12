import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import M from 'materialize-css'

class Header extends Component {
  componentDidMount () {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav')
      M.Sidenav.init(elems)
    })
  }
  renderContent () {
    switch (this.props.auth) {
      case null:
        break
      case false:
        // return <li><a href='/auth/google'>Login</a></li>
        break
      default:

        return [
          <li key='1' style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
          <li key='2'><Link to='/billing' className='waves-effect waves-light'><i className='material-icons left'>attach_money</i>Add credit</Link></li>,
          <li key='3'><a href='/api/logout' className='waves-effect waves-light'><i className='material-icons right'>exit_to_app</i>Logout</a></li>
        ]
    }
  }

  render () {
    return (
      <nav className='blue-grey darken-4'>
        <div className='nav-wrapper container'><Link id='logo-container' to={this.props.auth ? '/surveys' : '/'} className='brand-logo'>Logo</Link>
          <a data-target='nav-mobile' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
          <ul className='right hide-on-med-and-down'>
            {this.renderContent()}
          </ul>
        </div>
        <ul id='nav-mobile' className='sidenav'>
          {this.renderContent()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
