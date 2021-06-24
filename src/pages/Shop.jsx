import { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import SingleBookCommon from '../common/SingleBookCommon';
import ReactPaginate from 'react-paginate';
import Select from 'react-select'
import { bookService } from '../services';
import _ from 'lodash';

const options = [
  { value: 'a', label: 'Book A' },
  { value: 'b', label: 'Book B' },
  { value: 'c', label: 'Book C' }
]

const FilterComponent = () => (
  <Select options={options} />
)

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.handleGetBooks();
  }

  handleGetBooks = (page) => {
    bookService.getBooksService(page)
      .then(res => {
        if (res) {
          this.setState({
            data: res.data,
            pageCount: res.metaData.lastPage,
            perPage: res.metaData.perPage
          });
        }
      });
  }

  handlePageClick = (index) => {
    let page = index.selected + 1;
    this.handleGetBooks(page);
  }

  render() {
    let t = this.context.t
    const books = this.state.data;

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

              {books.length > 0 ? (
              <div className="list-books">
                <Row>
                  {books.map((item) => (
                    <Col lg={3} sm={6}>
                      <SingleBookCommon 
                        book={item}
                        key={item.id}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
              ) : (
                <h4>{t('book.no_book_at_shop')}</h4>
              )}

              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <ReactPaginate
                    previousLabel={'‹'}
                    nextLabel={'›'}
                    breakLabel={'...'}
                    pageCount={this.state.pageCount}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick.bind(this)}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                  />
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