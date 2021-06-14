import React, {Component} from 'react'
import { Jumbotron } from 'react-bootstrap';

import PropTypes from 'prop-types';

export default class Cart extends Component {

  render(){
    let t = this.context.t

    return <Jumbotron className='home fadeIn mt-5'>
      <h1>Cart page</h1>
      <p>This is Cart page</p>
    </Jumbotron>
  }

}

Cart.contextTypes = {
  t: PropTypes.func
}
