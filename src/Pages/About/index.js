import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';
export default class About extends Component {

  render() {
    let t = this.context.t
    return <Jumbotron className='home fadeIn mt-5'>
      <h1>About page</h1>
      <p>This is About page</p>
    </Jumbotron>
  }
}

About.contextTypes = {
  t: PropTypes.func
}