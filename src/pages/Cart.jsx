import { Component, Fragment } from 'react'
import {
  Table,
  Button,
  Card,
  Row,
  Col,
  InputGroup
} from 'react-bootstrap'
import PropTypes from 'prop-types';
import BreadCrumb from '../common/BreadCrumb';
import noImage from '../assets/images/no-image.png';
import { connect } from 'react-redux'
import { cartActions } from '../actions';
import { orderService } from '../services';
import swal from 'sweetalert';
import { MAX_QTY_ITEM } from "../config/constant";
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";

class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: null
    }
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    this.handlePlaceOder = this.handlePlaceOder.bind(this);
  }

  handleIncreaseQuantity = (e) => {
    let bookId = Number(e.target.getAttribute("dataId"));
    let translate = this.context.t
    const { cartItems } = this.props.cartItems;
    let isErrorMax = cartItems.find(function(i) {
      return i.id === bookId && i.qty + 1 > MAX_QTY_ITEM;
    });

    if (isErrorMax) {
      this.showModalMessage(translate('alert.error_max_qty'), false);
    } else {
      this.props.increaseQuantity(bookId);
    }
  }

  handleDecreaseQuantity = (e) => {
    let bookId = Number(e.target.getAttribute("dataId"));
    this.props.decreaseQuantity(bookId);
  }

  showModalMessage(msg = '', status = true) {
    if (status) {
      swal({
        text: msg,
        timer: 5000,
        icon: "success",
      });
    } else {
      swal({
        text: msg,
        timer: 5000,
        icon: "error",
      });
    }
  }

  handlePlaceOder = (e) => {
    e.preventDefault();
    const data = [];
    let { cartItems } = this.props.cartItems;

    if (cartItems.length) {
      debugger;
      cartItems.map((item) => {
        let i = {
          book_id: item.id,
          quantity: item.qty,
          price: item.discount ? item.sub_price : item.book_price
        }
        data.push(i);
      })

      orderService.createOrderService(data)
        .then(res => {
          if (res) {
            this.showModalMessage('Yours order have created sucessfully!!');
            this.props.destroyCart(cartItems);

            const timer = setTimeout(() => {
              this.setState({
                redirect: '/'
              });
            }, 5000);
            return () => clearTimeout(timer);

          } else {
            this.showModalMessage('Somethings wrong. Please try again!', false);
          }
        });
    }
  };

  renderCartItems = () => {
    let res = [];
    const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
    const { cartItems } = this.props.cartItems;
    cartItems.map((item) => {
      let html = (
        <tr>
          <td>
            <div className="group-book-img">
              <img 
              className="img-thumbnail"
              alt={item.book_title} 
              src={apiBaseURL + item.book_cover_photo || noImage} 
              />
              <div className="book-title">
                <Link className="view-details-link" target="_blank" rel="noopener noreferrer" to={`/book/${item.slug}`}>
                  <p>{item.book_title}</p>
                </Link>
                <div className="clearfix"></div>
                <p>{item.author_name}</p>
              </div>
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
          <td className="col-quantity">
            <span className="btn-change-qty" dataId={item.id} onClick={this.handleDecreaseQuantity}>-</span>
            <span>{item.qty}</span>
            <span className="btn-change-qty" dataId={item.id} onClick={this.handleIncreaseQuantity}>+</span>
          </td>
          <td className="total">
            ${item.discount ? (item.sub_price*item.qty).toFixed(2) : (item.book_price*item.qty).toFixed(2)}
          </td>
        </tr>
      );
      res.push(html);
    });
    return res;
  }


  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

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
                  <Col lg={9} md={12}>
                    <Table responsive="sm" bordered hover>
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
                  <Col lg={3} md={12}>
                    <Card className="text-center">
                      <Card.Header>Card Totals</Card.Header>
                      <Card.Body>
                        <h3 className="title-b">${totalCart.toFixed(2)}</h3>
                        <Button variant="primary" onClick={this.handlePlaceOder}>Place Order</Button>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  increaseQuantity: (bookId) => {
    dispatch(cartActions.increaseQuantity(bookId));
  },
  decreaseQuantity: (bookId) => {
    dispatch(cartActions.decreaseQuantity(bookId));
  },
  destroyCart: (cart) => {
    dispatch(cartActions.destroyCart(cart));
  }
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Cart);