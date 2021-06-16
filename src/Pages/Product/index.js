import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import BreadCrumb from '../../Layout/BreadCrumb';
import images1 from '../../assets/images/products/product3-250x250.jpg';
import InputSpinner from 'react-bootstrap-input-spinner'
import WriteReview from './partials/WriteReview';
import CustomerReviews from './partials/CustomerReviews';

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

    return (
      <Fragment>
        <div id="product-details-page" className='fadeIn mt-5'>
          <BreadCrumb
            level1="Category Name"
            level2='book-tom-and-jerry'
            path="/shop"
          />
          <Row>
            <Col lg={7} md={12}>
              <div className="product-info">
                <div className="product-f-image">
                  <img src={images1} alt="placeholder" className="img-thumbnail"/>
                  <div className="mt-2 text-center">By (author) <strong>Nhan David</strong></div>
                </div>
                <div className="content">
                  <h3 className="title-b">Book Title</h3>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam tristique, diam in consequat iaculis, 
                    est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. 
                    Quisque volutpat nulla risus, id maximus ex aliquet ut
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} md={12}>
              <div className="add-cart">
                <Card>
                  <Card.Header>
                    <del>$49.00</del>
                    <ins className="price">$30.00</ins>
                    </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Quantity
                    </Card.Text>
                    <InputSpinner
                      type={'real'}
                      max={10}
                      min={1}
                      step={1}
                      value={1}
                      onChange={num=>console.log(num)}
                      variant={'dark'}
                      size="md"
                    />
                    <Button variant="primary" size="lg" block className="mt-3">
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={7} md={12}>
              <CustomerReviews/>
            </Col>
            <Col lg={5} md={12}>
              <WriteReview/>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }

}

Product.contextTypes = {
  t: PropTypes.func
}


// withRouter will set match, location and history to Component props whenever route changes
export default withRouter(Product);