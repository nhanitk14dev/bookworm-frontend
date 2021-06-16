import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: {} 
    }
  }

  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    let slug = this.props.match.params.slug
  }

  render() {
    let t = this.context.t

    return <div className='home fadeIn mt-5'> 
      <Jumbotron>
      <h2>Category Name</h2>
      </Jumbotron>
    </div>
  }

}

Product.contextTypes = {
  t: PropTypes.func
}


// withRouter will set match, location and history to Component props whenever route changes
export default withRouter(Product);