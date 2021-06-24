import { Link } from 'react-router-dom';
import noImage from '../assets/images/no-image.png';
import { PureComponent } from "react";
import PropTypes from 'prop-types';
const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

class SingleBookCommon extends PureComponent {

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
				        <Link to="/" className="add-to-cart-link">
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
				      {item.discount ? (
					      <div className="book-price">
					        <del>${item.book_price}</del>
					        <ins>${(item.book_price) - (item.discount.discount_price)}</ins>
					      </div>
					      ) : (
					      <div className="book-price">
					      	<ins>${(item.book_price)}</ins>
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

export default SingleBookCommon;