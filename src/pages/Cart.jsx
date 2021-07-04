import { Component, Fragment } from 'react'
import {
  Table,
  Button,
  Card,
  Row,
  Col
} from 'react-bootstrap'
import PropTypes from 'prop-types';
import BreadCrumb from '../common/BreadCrumb';
import noImage from '../assets/images/no-image.png';
import { connect } from 'react-redux'

class Cart extends Component {

  renderCartItems = () => {
    let res = [];
    const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
    const { cartItems } = this.props.cartItems;
    cartItems.map((item) => {
      let html = (
        <tr>
          <td>
            <div className="float-left">
              <img 
              className="img-thumbnail"
              alt={item.book_title} 
              src={apiBaseURL + item.book_cover_photo || noImage} 
              />
            </div>
            <div className="float-right">
              <p>{item.book_title}</p>
              <div className="clearfix"></div>
              <p>{item.author_name}</p>
            </div>
          </td>
          <td>
          {item.discount ? (
            <div>
              <ins>${item.sub_price}</ins>
              <div className="clearfix"></div>
              <del>${item.book_price}</del>
            </div>
          ):(
            <ins>${item.book_price}</ins>
          )}
          </td>
          <td>{item.qty}</td>
          <td>
            ${item.discount ? (item.sub_price*item.qty).toFixed(2) : (item.book_price*item.qty).toFixed(2)}
          </td>
        </tr>
      );
      res.push(html);
    });
    return res;
  }


  render() {
    let t = this.context.t
    let totalCart = 0;
    const { cartItems } = this.props.cartItems;
    if (cartItems.length) {
      cartItems.map((item) => {
        totalCart += item.discount ? (item.sub_price * item.qty) : (item.book_price * item.qty);
      });
    }

    return (
      <Fragment>
        <div className='cart-page fadeIn mt-5'>
          <BreadCrumb
            level1={t('page.home')} 
            level2={t('page.cart')}
            path={"/"}
          />
          <div className="pl-3 pr-3">
            <div>
            { cartItems.length > 0 ? (
              <div>
                <h4>Your cart: {cartItems.length} items</h4>
                <Row>
                  <Col lg={8} md={12}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.renderCartItems()}
                      </tbody>
                    </Table>
                  </Col>
                  <Col lg={4} md={12}>
                    <Card className="text-center">
                      <Card.Header>Card Totals</Card.Header>
                      <Card.Body>
                        <h3 className="title-b">${totalCart.toFixed(2)}</h3>
                        <Button variant="primary">Place Order</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              ) : (
              <div>
                <h4>Cart is empty</h4>
              </div>
            )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

}

Cart.contextTypes = {
  t: PropTypes.func
}

const mapStatesToProps = (state) => {
  return {
    cartItems: state.carts,
  }
}

export default connect(mapStatesToProps)(Cart);