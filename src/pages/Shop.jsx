import { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Row, Col, Form, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import images from '../assets/images/products/product3-250x250.jpg';
import SingleBookCommon from '../common/SingleBookCommon';
import ReactPaginate from 'react-paginate';
import Select from 'react-select'

const product = {
  imgSrc: images,
  title: 'Book Cartoon Tom&Jerry',
  price: '650.00'
};

const options = [
  { value: 'a', label: 'Book A' },
  { value: 'b', label: 'Book B' },
  { value: 'c', label: 'Book C' }
]

const FilterComponent = () => (
  <Select options={options} />
)

class Shop extends Component {

  renderProductsWithPaging = () => {
    let html = [];
    for (let i = 1; i <= 4; i++) {
      html.push(
        <Row key={i}>
          <Col lg={3} md={6} sm={12}><SingleBookCommon product={product}/></Col>
          <Col lg={3} md={6} sm={12}><SingleBookCommon product={product}/></Col>
          <Col lg={3} md={6} sm={12}><SingleBookCommon product={product}/></Col>
          <Col lg={3} md={6} sm={12}><SingleBookCommon product={product}/></Col>
        </Row>
      );
    }

    return html;
  }

  renderPagination = () => {
    return (
      <Pagination>
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
    );
  }

  render() {
    let t = this.context.t

    return (
      <Fragment>
        <div className="shop-page">
          <Row>
            <Col lg={2} md={12}>
              <div className="sidebar-filter">
               <h4>Filter By</h4>
                <Form>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <FilterComponent/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <FilterComponent/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Rating Review</Form.Label>
                    <Form.Control as="select">
                      <option>1 star</option>
                      <option>2 star</option>
                      <option>3 star</option>
                      <option>4 star</option>
                      <option>5 star</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col lg={10} md={12}>
              <div className="toolbar-sort clearfix">
                <div className="showing-total">Showing 1-12 of 100 books</div>
                <div className="group-sort">
                  <DropdownButton id="sort-sale" title="Sort by on sale" variant="secondary">
                    <Dropdown.Item href="#/action">Sort by on sale</Dropdown.Item>
                    <Dropdown.Item href="#/action">Sort by on popularity</Dropdown.Item>
                    <Dropdown.Item href="#/action">Sort by price: low to high</Dropdown.Item>
                    <Dropdown.Item href="#/action">Sort by price: high to low</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton id="sort-records" title="Show 20" variant="secondary">
                    <Dropdown.Item href="#/action">Show 20</Dropdown.Item>
                    <Dropdown.Item href="#/action">Show 50</Dropdown.Item>
                    <Dropdown.Item href="#/action">Show 100</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              
              {this.renderProductsWithPaging()}

              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  {this.renderPagination()}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }

}

Shop.contextTypes = {
  t: PropTypes.func
}

export default Shop;