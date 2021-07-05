import { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import SingleBookCommon from '../common/SingleBookCommon';
import ReactPaginate from 'react-paginate';
import Select from 'react-select'
import { bookService, categoryService, authorService } from '../services';
import _ from 'lodash';

const ratingReviewoptions = [
  { value: 'all', label: 'All' },
  { value: '1', label: '1 Star' },
  { value: '2', label: '2 Star' },
  { value: '3', label: '3 Star' },
  { value: '4', label: '4 Star' },
  { value: '5', label: '5 Star' }
];

class Shop extends Component {

  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.onSelectSort = this.onSelectSort.bind(this);
    this.onSelectperPage = this.onSelectperPage.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onSelectAuthor = this.onSelectAuthor.bind(this);
    this.onSelectRatingReview = this.onSelectRatingReview.bind(this);

    this.state = {
      data: [],
      page: 1,
      sortByKey: 'sale',
      sortByTitle: 'Sort by on sale',
      perPage: '8',
      perPageTitle: 'Show 8',
      fCategory: '',
      fRating: '',
      fAuthor: '',
      SelectCategoryOptions: [],
      SelectAuthorOptions: []
    };
  }

  componentDidMount() {
    this.handleGetBooks();
    this.handleGetCategories();
    this.handleGetAuthors();
  }

  handleGetAuthors = () => {
    authorService.getAuthors()
      .then(res => {
        if (res) {
          const options = [
            { value: 'all', label: 'All Authors' }
          ];
          _.forEach(res.data, function(i) {
            options.push({ value: i.id, label: i.author_name });
          });
          this.setState({
            SelectAuthorOptions: options
          });
        }
      });
  }

  handleGetCategories = () => {
    categoryService.getCategories()
      .then(res => {
        if (res) {
          const options = [
            { value: 'all', label: 'All Categories' }
          ];
          _.forEach(res.data, function(i) {
            options.push({ value: i.id, label: i.category_name });
          });

          this.setState({
            SelectCategoryOptions: options
          });
        }
      });
  }

  handleGetBooks = () => {

    const { page } = this.state;
    const filters = this.getRequestFilters();

    bookService.getBooksService(page, filters)
      .then(res => {
        if (res) {
          this.setState({
            data: res.data,
            pageCount: res.last_page,
            perPage: res.per_page,
            showingFrom: res.from ? res.from : 0,
            showingTo: res.to ? res.to : 0,
            totalBooks: res.total
          });
        }
      });
  }

  getRequestFilters() {
    const { page, sortByKey, perPage, fCategory, fAuthor, fRating } = this.state;
    let params = {};
    if (page) {
      params["page"] = page;
    }

    if (sortByKey) {
      params["sortByKey"] = sortByKey;
    }

    if (perPage) {
      params['perPage'] = perPage;
    }

    if (fCategory) params['fCategory'] = fCategory;
    if (fAuthor) params['fAuthor'] = fAuthor;
    if (fRating) params['fRating'] = fRating;

    return params;
  }

  onSelectSort(eventKey, e) {
    this.setState({
        sortByKey: eventKey,
        sortByTitle: e.target.text
      },
      () => {
        this.handleGetBooks();
      }
    );
  }

  onSelectperPage(eventKey, e) {
    this.setState({
        page: 1, // reset go to page 1
        perPage: eventKey,
        perPageTitle: e.target.text
      },
      () => {
        this.handleGetBooks();
      }
    );
  }

  onSelectCategory(e) {
    this.setState({
        page: 1,
        fCategory: e.value,
      },
      () => {
        this.handleGetBooks();
      }
    );
  }

  onSelectAuthor(e) {
    this.setState({
        page: 1,
        fAuthor: e.value,
      },
      () => {
        this.handleGetBooks();
      }
    );
  }

  onSelectRatingReview(e) {
    this.setState({
        page: 1,
        fRating: e.value
      },
      () => {
        this.handleGetBooks();
      }
    );
  }

  handlePageClick(index) {
    this.setState({
        page: index.selected + 1
      },
      () => {
        this.handleGetBooks();
      }
    );
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
                    <Form.Label>{t('category')}</Form.Label>
                    <Select onChange={this.onSelectCategory} options={this.state.SelectCategoryOptions}/> 
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>{t('author')}</Form.Label>
                    <Select onChange={this.onSelectAuthor} options={this.state.SelectAuthorOptions} /> 
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>{t('rating_review')}</Form.Label>
                    <Select onChange={this.onSelectRatingReview} options={ratingReviewoptions}/> 
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col lg={10} md={12}>
              <div className="toolbar-sort clearfix">
                <div className="showing-total">
                  Showing {this.state.showingFrom}-{this.state.showingTo} of {this.state.totalBooks} books
                </div>
                <div className="group-sort">
                  <DropdownButton id="sort-sale" variant="secondary" onSelect={this.onSelectSort} title={this.state.sortByTitle}>
                    <Dropdown.Item eventKey="sale" active={this.state.sortByKey === 'sale' ? 'active' : ''}>
                      Sort by on sale
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="popular" active={this.state.sortByKey === 'popular' ? 'active' : ''}>
                      Sort by on popularity
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="lowPrice" active={this.state.sortByKey === 'lowPrice' ? 'active' : ''}>
                      Sort by price: low to high
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="highPrice" active={this.state.sortByKey === 'highPrice' ? 'active' : ''}>
                      Sort by price: high to low
                    </Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton id="sort-records" variant="secondary" onSelect={this.onSelectperPage} title={this.state.perPageTitle}>
                    <Dropdown.Item eventKey="4" active={this.state.perPage === '4' ? 'active' : ''}>
                      Show 4
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="8" active={this.state.perPage === '8' ? 'active' : ''}>
                      Show 8
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="12" active={this.state.perPage === '12' ? 'active' : ''}>
                      Show 12
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="16" active={this.state.perPage === '16' ? 'active' : ''}>
                      Show 16
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>

              {books.length > 0 ? (
              <div className="list-books">
                <Row>
                  {books.map((item) => (
                    <Col lg={3} sm={6} key={item.id}>
                      <SingleBookCommon
                        book={item}
                      />
                    </Col>
                  ))}
                </Row>

                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <ReactPaginate
                      breakLabel={'...'}
                      pageCount={this.state.pageCount}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={'pagination'}
                      activeClassName={'active'}
                    />
                  </Col>
                </Row>

              </div>
              ) : (
                <h4>{t('book.no_book_at_shop')}</h4>
              )}
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