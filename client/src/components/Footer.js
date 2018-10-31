import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer blue-grey darken-3'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>About</h5>
            <p className='grey-text text-lighten-4'>Baboon is a survey email tool, developed to learn and understand a fullstack app with React, Redux, Node, MongoDB, Stripe, Passport and Sendgrid.</p>

          </div>
          <div className='col l3 s12'>
       
          </div>
          <div className='col l3 s12'>
            <h5 className='white-text'>Contact</h5>
            <ul>
              <li><a className='white-text' href='https://github.com/secato'>Github</a></li>
              <li><a className='white-text' href='mailto:contact@felipesecato.com'>Email</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          Design made with <a className='orange-text text-lighten-3' href='http://materializecss.com'>Materialize</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
