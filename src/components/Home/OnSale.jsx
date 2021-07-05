import { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import _ from 'lodash';
import { bookService } from '../../services';
import SingleBookCommon from '../../common/SingleBookCommon';

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
    const discountBooks = this.state.data;
    let res = [];
    _.map(discountBooks, (item, index) => {
      let html = (
        <div key={item.id}>
          <SingleBookCommon 
            book={item}
          />
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
            navText={[
              '<i class="fas fa-arrow-circle-left"></i>',
              '<i class="fas fa-arrow-circle-right"></i>'
            ]}
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