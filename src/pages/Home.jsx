import React, { Component, Fragment } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import OnSale from '../components/Home/OnSale'
import FeaturedBook from '../components/Home/FeaturedBook'

export default class Home extends Component {

  render() {
    let t = this.context.t

    return (
      <Fragment>
        <div className='home fadeIn mt-5'>
          <Jumbotron>
          <div className="float-left"><h2>{t('on_sale')}</h2></div>
          <div className="float-right">
            <Button href="/shop">
              View All
              <i class="fas fa-arrow-right ml-1"></i>
            </Button>
            </div>
          <div class="clearfix"></div>
          <OnSale/>
          </Jumbotron>

          <Jumbotron>
          <h2 className="text-center">{t('featured_books')}</h2>
          <FeaturedBook/>
          </Jumbotron>
        </div>
      </Fragment>
    );
  }

}

Home.contextTypes = {
  t: PropTypes.func
}