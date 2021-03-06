import { Component } from 'react'
import {
  Jumbotron,
  Dropdown,
  DropdownButton,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { reviewService } from '../../services';
import ReactPaginate from 'react-paginate';
import moment from "moment";

class CustomerReviews extends Component {

  constructor(props) {
    super(props)
    this.handlePageClick = this.handlePageClick.bind(this);
    this.onSelectSort = this.onSelectSort.bind(this);
    this.onSelectperPage = this.onSelectperPage.bind(this);
    this.state = {
      reviews: [],
      metaDataReviews: [],
      page: 1,
      pageCount: 0,
      showingFrom: 0,
      showingTo: 0,
      totalReviews: 0,
      sortByKey: 'newest',
      sortByTitle: 'Sort by on date',
      perPage: 10,
      perPageTitle: 'Show 10',
    }
  }

  componentDidMount() {
    let bookId = this.props.bookId;
    this.handleGetReviews(bookId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.createdNewReview !== prevProps.createdNewReview) {
      // Change state and props from create form, call Api to update list.
      this.handleGetReviews(this.props.bookId);
    }
  }

  handleGetReviews = () => {
    const { page } = this.state;
    const filters = this.getRequestFilters();

    reviewService.getReviews(page, this.props.bookId, filters)
      .then(res => {
        if (res) {
          this.setState({
            reviews: res.reviews.data,
            pageCount: res.reviews.last_page,
            perPage: res.reviews.per_page,
            showingFrom: res.reviews.from ? res.reviews.from : 0,
            showingTo: res.reviews.to ? res.reviews.to : 0,
            totalReviews: res.reviews.total,
            metaDataReviews: res.metaData
          });
        }
      });
  }

  getRequestFilters() {
    const { page, sortByKey, perPage } = this.state;
    let params = {};

    if (page) params["page"] = page;
    if (sortByKey) params["sortByKey"] = sortByKey;
    if (perPage) params['perPage'] = perPage;

    return params;
  }

  handlePageClick(index) {
    this.setState({
        page: index.selected + 1
      },
      () => {
        this.handleGetReviews();
      }
    );
  }

  onSelectSort(eventKey, e) {
    this.setState({
        sortByKey: eventKey,
        sortByTitle: e.target.text
      },
      () => {
        this.handleGetReviews();
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
        this.handleGetReviews();
      }
    );
  }

  render() {
    let t = this.context.t
    const reviews = this.state.reviews;
    const metaDataReviews = this.state.metaDataReviews;

    return (
      <div id="customer-reviews">
        <Jumbotron>
          <div>
            <h3 className="title-b">{t('book.customer_reviews')}
            <small> (Filtered by 5 start)</small>
            </h3>
            <h2>{metaDataReviews.avg_rating_star} Star</h2>
            <div className="star-points">
              <span className="font-weight-bold mr-1">({this.state.totalReviews})</span>
              <span>5 star ({metaDataReviews.five_star})</span>
              <span className="border-right">4 star ({metaDataReviews.four_star})</span>
              <span className="border-right">3 star ({metaDataReviews.three_star})</span>
              <span className="border-right">2 star ({metaDataReviews.two_star})</span>
              <span>1 star ({metaDataReviews.one_star})</span>
            </div>
          </div>
          <div className="toolbar-sort clearfix">
            <div className="showing-total">Showing {this.state.showingFrom}-{this.state.showingTo} of {this.state.totalBooks} reviews</div>
            <div className="group-sort">
              <DropdownButton id="sort-sale" title="Sort by on date" variant="secondary" onSelect={this.onSelectSort}>
                <Dropdown.Item eventKey="newest" active={this.state.sortByKey === 'newest' ? 'active' : ''}>
                  Sort by date: newest to oldest
                </Dropdown.Item>
                <Dropdown.Item eventKey="oldest" active={this.state.sortByKey === 'oldest' ? 'active' : ''}>
                  Sort by date: oldest to newest
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="sort-records" variant="secondary" onSelect={this.onSelectperPage} title={this.state.perPageTitle}>
                <Dropdown.Item eventKey="5" active={this.state.perPage === '5' ? 'active' : ''}>
                  Show 5
                </Dropdown.Item>
                <Dropdown.Item eventKey="10" active={this.state.perPage === '10' ? 'active' : ''}>
                  Show 10
                </Dropdown.Item>
                <Dropdown.Item eventKey="15" active={this.state.perPage === '15' ? 'active' : ''}>
                  Show 15
                </Dropdown.Item>
                <Dropdown.Item eventKey="20" active={this.state.perPage === '20' ? 'active' : ''}>
                  Show 10
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          
          <div>
            {reviews.length > 0 ? (
            <div className="list-reviews">
              <Row>
                {reviews.map((item) => (
                  <div className="rv-item" key={item.id}>
                    <p className="clearfix">
                      <span className="rv-title">{item.review_title}</span>
                      <span className="rv-star">{item.rating_star} stars</span>
                    </p>
                    <p className="rv-content">
                      {item.review_detail}
                    </p>
                    <p className="rv-date">
                      {moment(item.review_date).format("LLL")}
                    </p>
                  </div>
                ))}
              </Row>

              <Row>
                  <Col md={{ span: 9, offset: 1 }}>
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
              <div>
                <h4>{t('book.no_reviews')}</h4>
              </div>
            )}
          </div>


        </Jumbotron>
      </div>
    );
  }
}

CustomerReviews.contextTypes = {
  t: PropTypes.func
}

// withRouter will set match, location and history to Component props whenever route changes
export default withRouter(CustomerReviews);