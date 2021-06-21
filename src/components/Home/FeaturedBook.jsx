import { Component } from "react";
import { Nav, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import images from '../../assets/images/products/product3-250x250.jpg';
import SingleProductCommon from '../../common/SingleProductCommon';

const product = {
  imgSrc: images,
  title: 'Book Cartoon Tom&Jerry',
  price: '650.00'
};

class FeaturedBook extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderSingleProduct = () => {
    return (<SingleProductCommon product={product}/>);
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
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
            <Col lg={3} sm={6}>{this.renderSingleProduct()}</Col>
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