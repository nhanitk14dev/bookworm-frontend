import { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slide1 from '../../../assets/images/products/product1-250x250.jpg';
import slide2 from '../../../assets/images/products/product2-250x250.jpg';
import slide3 from '../../../assets/images/products/product3-250x250.jpg';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const contentCarousel = [{ img: slide1 }, { img: slide2 }, { img: slide3 }];

class OnSale extends Component {

  state = {
    responsiveCarousel: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  }

  renderCarousel = () => {
    let res = [];
    _.forEach(contentCarousel, (item, index) => {
      let html = (<div key={index} className="single-product">
          <div className="product-f-image">
            <img src={item.img} alt="item" className="item"/>
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
            <h2><Link to="/product/book-tom-and-jerry">Tom and Jerry - 2015</Link></h2>
            <p>Author Name: David</p>
            <div className="product-carousel-price">
                <ins>$700.00</ins> <del>$100.00</del>
            </div> 
          </div>
        </div>);
      res.push(html);
    });
    return res;
  };

  render() {
    return (<div>
        <div className="home-onsale">
          <div className="product-carousel">
            <OwlCarousel className='owl-theme' 
              loop
              margin={10}
              nav
              autoplay={true}
              responsiveClass={true}
              lazyLoad={true}
              responsive={this.state.responsiveCarousel}>
              {this.renderCarousel()}
            </OwlCarousel>
          </div>
          
        </div>
      </div>);
  }
}

export default OnSale;