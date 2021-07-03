import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BreadCrumb from '../common/BreadCrumb';
import InputSpinner from 'react-bootstrap-input-spinner'
import WriteReview from '../components/Book/WriteReview';
import CustomerReviews from '../components/Book/CustomerReviews';
import { bookService } from '../services';
import { cartActions } from '../actions';
import { connect } from "react-redux";
import swal from 'sweetalert';
import { MAX_QTY_ITEM } from "../config/constant";

class Book extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: '',
      slug: '',
      qty: 1,
      createdNewReview: false,
    }
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    this.displaySingleBookBySlug(slug);
  }

  displaySingleBookBySlug = (slug) => {
    bookService.getSingleBookBySlug(slug)
      .then(res => {
        if (res) {
          this.setState({
            book: res.data,
            slug: slug
          });
        }
      });
  }

  handleUpdatedListReviews = (status) => {
    if (status) {
      this.setState({
        createdNewReview: !this.state.createdNewReview
      });
    }
  }

  handleQuantityChange = (value) => {
    this.setState({
      qty: value
    })
  }

  handleUpdateCartQty = () => {

    let { book, qty } = this.state;
    let { cartItems } = this.props.cartItems;
    let translate = this.context.t

    // Only allow a maximum of number quantity for each item
    let isErrorMax = cartItems.find(function(i) {
      return i.id === book.id && i.qty + qty > MAX_QTY_ITEM;
    });

    if (isErrorMax) {
      this.showModalMessage(translate('alert.error_max_qty'), false);
      console.log(isErrorMax);
    } else {
      this.props.updateCartQty(book, qty);
      this.showModalMessage(translate('alert.add_cart_success'));
    }
  }

  showModalMessage(msg = '', status = true) {
    if (status) {
      swal({
        text: msg,
        timer: 3000,
        icon: "success",
      });
    } else {
      swal({
        text: msg,
        timer: 3000,
        icon: "error",
      });
    }
  }

  render() {
    let t = this.context.t
    const { book, qty } = this.state;
    const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

    return (
      <Fragment>
        <div id="book-details-page" className='fadeIn mt-5'>
          <BreadCrumb
            path="/shop"
            level1={book ? book.category_name : 'N/A'}
            level2={book ? book.book_title : this.state.slug}
            />
          {book && (
            <div>
            <Row>
              <Col lg={7} md={12}>
                <div className="book-info">
                  <div className="book-f-image">
                    <img alt="placeholder" className="img-thumbnail" src={apiBaseURL + book.book_cover_photo}/>
                    <div className="mt-2 text-center">
                     By (author) <strong>{book ? book.author_name : 'N/A'}</strong>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="title-b">{book.book_title}</h3>
                    <div>
                      {book.book_summary}
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={12}>
                <div className="add-cart">
                  <Card>
                    <Card.Header>
                      {book.discount ? (
                        <div className="book-price">
                          <del>${book.book_price}</del>
                          <ins>${(book.book_price) - (book.discount.discount_price)}</ins>
                        </div>
                        ) : (
                        <div className="book-price">
                          <ins>${(book.book_price)}</ins>
                        </div>
                      )}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {t('cart.quantity')}
                      </Card.Text>
                      <InputSpinner
                        name="qty"
                        type={'real'}
                        max={8}
                        min={1}
                        step={1}
                        value={qty}
                        onChange={this.handleQuantityChange}
                        size="md"
                        variant={'dark'}
                      />
                      <Button 
                        variant="primary"
                        size="lg"
                        block
                        className="mt-3"
                        onClick={this.handleUpdateCartQty}
                      >
                      {t('button.add_to_cart')}
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={7} md={12}>
                <CustomerReviews bookId={book.id} createdNewReview={this.state.createdNewReview}/>
              </Col>
              <Col lg={5} md={12}>
                <WriteReview 
                bookId={book.id}
                updatedListReviews={this.handleUpdatedListReviews}
                />
              </Col>
            </Row>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

Book.contextTypes = {
  t: PropTypes.func
}

const mapStatesToProps = (state) => {
  return {
    cartItems: state.carts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateCartQty: (book, qty) => {
    dispatch(cartActions.addOrUpdateCart(book, qty));
  }
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Book);