import { Link } from 'react-router-dom';
import noImage from '../../assets/images/no-image.png';
import { PureComponent } from "react";

class SingleProductCommon extends PureComponent {
  render() {

    let product = this.props.product;
    let srcImg = product && product.imgSrc ? (window.location.origin + product.imgSrc) : noImage;
    
    return (
      <div className="single-product">
		  <div className="product-f-image">
		    <img src={ srcImg } alt="item" className="item"/>
		    <div className="product-hover">
		      <Link to="/" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
		      <Link to="/" className="view-details-link"><i className="fa fa-link"></i> See details</Link>
		    </div>
		  </div>
		  <div className="info">
		    <h2><Link href="single-product.html">{product ? product.title : 'N/A'}</Link></h2>
		    <div>{product && product.author ? product.author : null}</div>
		    <div className="product-carousel-price">
		        <ins>${product ? product.price : 0}</ins> <del>{product ? product.discount_price : null}</del>
		    </div> 
		  </div>
		</div>
    );

  }
}

export default SingleProductCommon;