import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import './checkoutStyle.css'

class CheckoutForm extends Component {
  constructor (props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit (ev) {
    let { token } = await this.props.stripe.createToken({ name: 'Name' })
    // let response = await fetch('/charge', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'text/plain' },
    //   body: token.id
    // })

    // if (response.ok) this.setState({ complete: true })
  }

  render () {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <div className='example example4'>
        <form className='form' action=''>
          <fieldset>
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button onClick={this.submit}>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
