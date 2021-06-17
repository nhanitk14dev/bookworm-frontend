import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BreadCrumb from '../../Layout/BreadCrumb';

export default class About extends React.Component {

  render() {
    let t = this.context.t
    return (
      <Fragment>
        <div id="about-page" className='fadeIn mt-5'>
          <BreadCrumb
            level1={t('page.home')} 
            level2={t('page.about')}
            path={"/"}
          />
          <div className="pl-4 pr-4">
            <h1 className="text-center">Wellcome to BookWorm</h1>
            <div className="intro">
              "Bookworm is an dependent New York bookstore and language school with locations in Manhattan and Booklyn. We specialize in travel books and language classes."
            </div>
            <Row>
              <Col md={6}>
                <h3>Our Story</h3>
                <p>
                  The name Bookworm was taken from the original name for New York international Airport,
                  Which was renamed JFK in December 1963.
                </p>
                <p>
                  Our Manhattan store has just moved to the West Village. OUr new location is 170th Avenue South,
                  at the corner of Perry Street.
                </p>
                <p>
                  From March 2008 through May 2016, the store was located in the Flatiron District.
                </p>
              </Col>
              <Col md={6}>
                <h3>Our Vision</h3>
                <p>
                  One of the last travel bookstores in the country, our Manhattan store carries a range of guidebooks
                  (all 10% off) to suit the needs and tastes of every traveler and budget.
                </p>
                <p>
                  We believe that a novel or travelogue can be just as valuable a key to place as any guidebooks, and
                  our well-read, well-travelled staff is happy to make reading recommendations for any traveler, book lover of gift giver
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }
}

About.contextTypes = {
  t: PropTypes.func
}