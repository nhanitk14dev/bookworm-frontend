import { Link } from 'react-router-dom';
import noImage from '../assets/images/no-image.png';
import { PureComponent } from "react";
import PropTypes from 'prop-types';
import { cartActions } from '../actions';
import { connect } from "react-redux";
import swal from 'sweetalert';
const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

class SingleBookCommon extends PureComponent {

  constructor(props) {
    super(props)
    this.onClickaddToCart = this.onClickaddToCart.bind(this);
    this.state = {}
  }

  onClickaddToCart = () => {
    const { book } = this.props;
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
    let item = this.props.book;
    return (
      <div className="wrap-book-page">
      {
      	(
      		(item) &&
      		<div className="single-book">
				    <div className="book-f-image">
				      <img alt="item" className="item" src={apiBaseURL + item.book_cover_photo || noImage} />
				      <div className="book-hover">
				        <Link onClick={this.onClickaddToCart} className="add-to-cart-link" to="#">
				        <i className="fa fa-shopping-cart"></i>
				        </Link>
				        <Link className="view-details-link" target="_blank" rel="noopener noreferrer" to={`/book/${item.slug}`}> <i className="fa fa-eye"></i>
				        </Link>
				      </div>
				    </div>
				    <div className="info">
				      <h2>
				        <Link to={`/book/${item.slug}`}>{item.book_title} </Link> 
				      </h2>
				    </div>
				    <div className="book-carousel-price">
				      {(item.discount) ? (
					      <div className="book-price">
					        <del>${item.book_price}</del>
					        <ins>${(item.book_price) - (item.discount.discount_price)}</ins>
					      </div>
					    ) : (item.sub_price) ? (
					      <div className="book-price">
					      	<del>${item.book_price}</del>
					      	<ins>${(item.sub_price)}</ins>
					      </div>
				      ) : (
				      	<div className="book-price">
					        <ins>${item.book_price}</ins>
					      </div>
					    )}
				    </div>
			  	</div>
      	)
      }
			</div>
    );
  }
}

SingleBookCommon.contextTypes = {
  t: PropTypes.func
}

SingleBookCommon.defaultProps = {
  item: ''
};

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
)(SingleBookCommon);