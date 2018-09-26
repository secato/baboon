import React, { Component } from 'react'
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class CheckoutForm extends Component {
  constructor (props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit () {
    try {
      let { token, error } = await this.props.stripe.createToken({ name: 'Name' })
      if (error) throw error

      this.props.handleToken(token) // coming from action creator
      this.setState({ complete: true })
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <label htmlFor='first_name'>Card number</label>
              <CardNumberElement />
              {/* <input placeholder='Placeholder' id='first_name' type='text' className='validate' /> */}
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <CardExpiryElement />
              <label>Expiration Date</label>
            </div>
            <div className='input-field col s6'>
              <CardCVCElement />
              <label>CVC</label>
            </div>
          </div>
        </form>
        <button className='btn waves-effect waves-light' onClick={this.submit}>Send</button>
      </div>
    )
  }
}

export default connect(null, actions)(injectStripe(CheckoutForm))
