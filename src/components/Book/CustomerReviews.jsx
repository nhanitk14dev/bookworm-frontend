import { Component } from 'react'
import { Jumbotron, Dropdown, DropdownButton, Row, Col, Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

class CustomerReviews extends Component {

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
      <div id="customer-reviews">
        <Jumbotron>
          <div>
            <h3 className="title-b">{t('book.customer_reviews')}
            <small> (Filtered by 5 start)</small>
            </h3>
            <h2>4.6 Star</h2>
            <div className="star-points">
              <span className="font-weight-bold mr-1">(3,315)</span>
              <span>5 star (200)</span>
              <span className="border-right">4 star (100)</span>
              <span className="border-right">3 star (20)</span>
              <span className="border-right">2 star (5)</span>
              <span>1 star (0)</span>
            </div>
          </div>
          <div className="toolbar-sort clearfix">
            <div className="showing-total">Showing 1-12 of 3012 reviews</div>
            <div className="group-sort">
              <DropdownButton id="sort-sale" title="Sort by on sale" variant="secondary">
                <Dropdown.Item href="#/action">Sort by date: newest to oldest</Dropdown.Item>
                <Dropdown.Item href="#/action">Sort by date: oldest to newest</Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="sort-records" title="Show 20" variant="secondary">
                <Dropdown.Item href="#/action">Show 20</Dropdown.Item>
                <Dropdown.Item href="#/action">Show 50</Dropdown.Item>
                <Dropdown.Item href="#/action">Show 100</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="list-reviews">
            <div className="rv-item">
              <p className="clearfix">
                <span className="rv-title">Amazing Story! You will love it</span>
                <span className="rv-star">5 stars</span>
              </p>
              <p className="rv-content">
                Review content. The name Bookworm was taken from the original name for New York international Airport,
                Which was renamed JFK
              </p>
              <p className="rv-date">Jun 17, 2021</p>
            </div>
            <div className="rv-item">
              <p className="clearfix">
                <span className="rv-title">Amazing Story! You will love it</span>
                <span className="rv-star">5 stars</span>
              </p>
              <p className="rv-content">
                Review content. The name Bookworm was taken from the original name for New York international Airport,
                Which was renamed JFK
              </p>
              <p className="rv-date">Jun 17, 2021</p>
            </div>
            <div className="rv-item">
              <p className="clearfix">
                <span className="rv-title">Amazing Story! You will love it</span>
                <span className="rv-star">5 stars</span>
              </p>
              <p className="rv-content">
                Review content. The name Bookworm was taken from the original name for New York international Airport,
                Which was renamed JFK
              </p>
              <p className="rv-date">Jun 17, 2021</p>
            </div>
            <div className="rv-item">
              <p className="clearfix">
                <span className="rv-title">Amazing Story! You will love it</span>
                <span className="rv-star">5 stars</span>
              </p>
              <p className="rv-content">
                Review content. The name Bookworm was taken from the original name for New York international Airport,
                Which was renamed JFK
              </p>
              <p className="rv-date">Jun 17, 2021</p>
            </div>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  {this.renderPagination()}
                </Col>
              </Row>
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