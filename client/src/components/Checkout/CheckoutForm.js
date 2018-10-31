import React, { Component } from 'react'
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe, CardElement, } from 'react-stripe-elements'
import { connect } from 'react-redux'
import * as actions from '../../actions'

const style = {
  base: {
    color: '#303238',
    fontSize: '18px',
    color: "#32325d",
    fontSmoothing: 'antialiased',
    '::placeholder': {
      color: '#ccc',
    },
  },
  invalid: {
    color: '#e5424d',
    ':focus': {
      color: '#303238',
    },
  },
};

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit() {
    try {
      let { token, error } = await this.props.stripe.createToken({ name: 'Name' })
      if (error) throw error
      await this.props.handleToken(token) // coming from action creator
      this.setState({ complete: true })
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    if (this.state.complete) return <h2>Purchase Complete</h2>
    return (
      <div className="row">
        <div className="col s12 m6">
          <form className=''>
            <label htmlFor="">
              Card Details
              <div className="my-input">
                <CardElement style={style}/>
              </div>
            </label>
          </form>
          <br/>
          <br/>
          <button className='btn waves-effect waves-light' onClick={this.submit}>Show me the money</button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(injectStripe(CheckoutForm))
