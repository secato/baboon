import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

export default () => (
  <StripeProvider apiKey='pk_test_OBnz0q4KpZ8owA96UDsL2F4z'>
    <div className='container'>
      <h1>React Stripe Elements Example</h1>
      <Elements>
        <CheckoutForm />
      </Elements>
    </div>
  </StripeProvider>
)
