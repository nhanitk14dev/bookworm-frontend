import { Component } from 'react'
import { Jumbotron, Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

class CustomerReviews extends Component {

  render() {
    let t = this.context.t

    return (
      <div className="box-add-review">
        <Jumbotron>
          <div>
            <h3 className="title-b">{t('product.customer_reviews')}
            <small> (Filtered by 5 start)</small>
            </h3>
          </div>
          <div className="content">
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