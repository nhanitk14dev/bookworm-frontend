import { Component } from "react";
import { Nav, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import SingleProductCommon from '../../common/SingleProductCommon';
import { bookService } from '../../services';
import _ from 'lodash';

class FeaturedBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.onSelectKey = this.onSelectKey.bind(this);
  }

  componentDidMount() {
    this.handleGetProductsByKeys();
  }

  handleGetProductsByKeys = (key = '') => {
    bookService.getBooksByRecommendedOrPopular(key)
      .then(res => {
        if (res) {
          this.setState({
            data: res.data
          });
        }
      });
  }

  onSelectKey(selectedKey) {
    this.handleGetProductsByKeys(selectedKey);
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
    const books = this.state.data;

    return (
      <div className="featured-book">
        <div className="tab-container">
          <Nav variant="pills" className="justify-content-center" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link href="#" onSelect={this.onSelectKey} >
                {t('product.recommended')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="popular" onSelect={this.onSelectKey}>
              {t('product.popular')}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Row>
          { books.length ? this.renderSingleProduct() : '' }
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