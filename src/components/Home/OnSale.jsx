import { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { bookService } from '../../services';

class OnSale extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    };
  }

  componentDidMount() {
    bookService.getDiscountBooks()
      .then(res => {
        if (res) {
          this.setState({
            data: res.discount_books
          });
        }
      });
  }

  renderCarousel = () => {
    const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
    const discountBooks = this.state.data;
    let res = [];
    _.map(discountBooks, (item, index) => {
      let html = (
        <div className="single-book" key={item.id}>
          <div className="book-f-image">
            <img alt="item" className="item" src={apiBaseURL + item.book_cover_photo}/>
            <div className="book-hover">
              <Link to="/" className="add-to-cart-link">
                <i className="fa fa-shopping-cart"></i> 
              </Link>
              <Link className="view-details-link" target="_blank" rel="noopener noreferrer" to={`/book/${item.slug}`}>
                <i className="fa fa-eye"></i>
              </Link>
            </div>
          </div>
          <div className="info">
            <h2><Link to={`/book/${item.slug}`}>{item.book_title}</Link></h2>
            <p>Author Name: David</p>
            <div className="book-carousel-price">
                <ins>${(item.book_price) - (item.discount.discount_price)}</ins> 
                <del>${item.book_price}</del>
            </div> 
          </div>
        </div>
      );
      res.push(html);
    });
    return res;
  };

  render() {
    return (
      <div className="home-onsale">
        <div className="book-carousel">
        { this.state.data.length > 0 ?  
          <OwlCarousel className='owl-theme' 
            loop
            margin={10}
            nav
            dots={false}
            autoplay={true}
            responsiveClass={true}
            lazyLoad={true}
            responsive={this.state.responsiveCarousel}>
            {this.renderCarousel()}
          </OwlCarousel>
          :""}
        </div>      
      </div>
    );
  }
}

export default OnSale;