import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import BreadCrumb from '../common/BreadCrumb';
import InputSpinner from 'react-bootstrap-input-spinner'
import WriteReview from '../components/Book/WriteReview';
import CustomerReviews from '../components/Book/CustomerReviews';
import { bookService } from '../services';
import { cartActions } from '../actions';
import { connect } from "react-redux";
import swal from 'sweetalert';

class Book extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: '',
      slug: '',
      createdNewReview: false
    }
    this.onClickaddToCart = this.onClickaddToCart.bind(this);
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

  onClickaddToCart = () => {
    const book = this.state.book;
    this.props.addToCart(book);
    this.showModalMessage('success');
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
    const book = this.state.book;
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
                        Quantity
                      </Card.Text>
                      <InputSpinner
                        type={'real'}
                        max={10}
                        min={1}
                        step={1}
                        value={1}
                        onChange={num=>console.log(num)}
                        size="md"
                        variant={'dark'}
                      />
                      <Button 
                        variant="primary"
                        size="lg"
                        block
                        className="mt-3"
                        onClick={this.onClickaddToCart}
                      >
                        Add to cart
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
    cartItems: state.carts.cartItems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: (item) => {
    dispatch(cartActions.addCart(item));
  }
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Book);