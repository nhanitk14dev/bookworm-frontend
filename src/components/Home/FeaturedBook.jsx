import { Component } from "react";
import { Nav, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import images from '../../assets/images/products/product3-250x250.jpg';
import SingleProductCommon from '../../common/SingleProductCommon';
import { bookService } from '../../services';
import _ from 'lodash';

class FeaturedBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    bookService.getRecommendedBooks()
      .then(res => {
        if (res) {
          this.setState({
            data: res.recommended_books
          });
        }
      });
  }

  renderSingleProduct = () => {
    let res = [];
    _.forEach(this.state.data, function(item) {
      let html = (
        <Col lg={3} sm={6}>
            <SingleProductCommon book={item}/>
        </Col>
      )
      res.push(html);
    });
    return res;
  };

  render() {
    let t = this.context.t;

    return (
      <div className="featured-book">
        <div className="tab-container">
          <Nav variant="pills" className="justify-content-center" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link href="#">{t('product.recommended')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">{t('product.popular')}</Nav.Link>
            </Nav.Item>
          </Nav>
          <Row>
          { this.state.data.length ? this.renderSingleProduct() : '' }
          </Row>
        </div>
      </div>
    );
  }
}

FeaturedBook.contextTypes = {
  t: PropTypes.func
}

export default FeaturedBook;