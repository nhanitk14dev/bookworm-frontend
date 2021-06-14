import React, {Component} from 'react'
import { Jumbotron } from 'react-bootstrap';

import PropTypes from 'prop-types';

export default class Shop extends Component {

  render(){
    let t = this.context.t

    return <Jumbotron className='home fadeIn mt-5'>
      <h1>Shop page</h1>
      <p>This is Shop page</p>
    </Jumbotron>
  }

}

Shop.contextTypes = {
  t: PropTypes.func
}
