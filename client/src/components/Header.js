import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        break
      case false:
        return <ul className='right'><li><a href='/auth/google'>Login With Google</a></li></ul>
      default:
        return (
          <ul className='right'>
            <li>
              <Link to='/billing'>Add credit</Link>
            </li>
            <li>
              <a href='/api/logout'>Logout</a>
            </li>
          </ul>
        )
    }
  }

  render () {
    return (
      <nav>
        <div className='nav-wrapper blue darken-3'>
          <div className='container'>
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className='brand-logo'>
                            Emaily
            </Link>
            {/* <ul id="nav-mobile" className="right"> */}
            {this.renderContent()}
            {/* </ul> */}
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
