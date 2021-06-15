import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';

import OnSale from './partials/OnSale'
import FeaturedBook from './partials/FeaturedBook'


class Product extends Component {

  render() {
    let t = this.context.t

    return <div className='home fadeIn mt-5'> 
      <Jumbotron>
      <h2>{t('on_sale')}</h2>
      <OnSale/>
      </Jumbotron>

      <Jumbotron>
      <h2 className="text-center">{t('featured_books')}</h2>
      <FeaturedBook/>
      </Jumbotron>
    </div>
  }

}

Product.contextTypes = {
  t: PropTypes.func
}

export default Product;