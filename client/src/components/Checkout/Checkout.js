import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Checkout extends Component {
  componentDidMount () {
    this.props.updateBreadCrumb([
      { path: '/', name: 'Home' },
      { path: '/billing', name: 'Billing' }
    ])
  }
  render () {
    return (
      <div className='row'>
        <h5>Checkout Form</h5>
        <strong className='red-text'>Actually it don't really charge you, you can enter a fake number like 4242 4242 4242 4242.</strong>
        <blockquote>Charge $5 for 5 credits - 1 credit equals one survey</blockquote>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    )
  }
}

export default Checkout
