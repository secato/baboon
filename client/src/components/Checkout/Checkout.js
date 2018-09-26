import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

export default props => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
      <div className='container'>
        <h3>$5 for 5 credits</h3>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  )
}
