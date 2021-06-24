import { Component } from "react";
import { Nav, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import SingleBookCommon from '../../common/SingleBookCommon';
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
    this.handleGetBooksByKeys();
  }

  handleGetBooksByKeys = (key = '') => {
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
    this.handleGetBooksByKeys(selectedKey);
  }

  renderSingleProduct = () => {
    let res = [];
    _.forEach(this.state.data, function(item) {
      let html = (
        <Col lg={3} sm={6}>
            <SingleBookCommon book={item}/>
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
                {t('book.recommended')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="popular" onSelect={this.onSelectKey}>
              {t('book.popular')}
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