import { Link } from 'react-router-dom';
import noImage from '../assets/images/no-image.png';
import { PureComponent } from "react";
import PropTypes from 'prop-types';
const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

class SingleProductCommon extends PureComponent {

  render() {
    let t = this.context.t
    let item = this.props.book;
    let srcImg = item.book_cover_photo ? apiBaseURL + item.book_cover_photo : noImage;

    return (
      <div className="single-product">
			  <div className="product-f-image">
			    <img alt="item" className="item" src={srcImg}/>
			    <div className="product-hover">
			      <Link to="/" className="add-to-cart-link">
			      	<i className="fa fa-shopping-cart"></i>
			      </Link>
			      <Link className="view-details-link" to="/product/book-tom-and-jerry" target="_blank" rel="noopener noreferrer">
			      	<i className="fa fa-eye"></i>
			      </Link>
			    </div>
			  </div>
			  <div className="info">
			    <h2><Link to="/product/book-tom-and-jerry">{item.book_title}</Link></h2>
			    <div>Author</div>
			    <div className="product-carousel-price">
			    	{item.discount ? (
						  <div>
						  	<ins>${(item.book_price) - (item.discount.discount_price)}</ins> 
                <del>${item.book_price}</del>
						  </div>
						) : (
						  <div><ins>${(item.book_price)}</ins></div>
						)}
			    </div> 
			  </div>
			</div>
    )
  }
}

SingleProductCommon.contextTypes = {
  t: PropTypes.func
}

export default SingleProductCommon;