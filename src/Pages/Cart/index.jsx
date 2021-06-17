import { Component, Fragment } from 'react'
import {
  Table,
  Button,
  Card,
  Row,
  Col
} from 'react-bootstrap'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import BreadCrumb from '../../Layout/BreadCrumb';
import images from '../../assets/images/products/product3-250x250.jpg';

class Cart extends Component {

  render() {
    let t = this.context.t

    return (
      <Fragment>
        <div className='cart-page fadeIn mt-5'>
          <BreadCrumb
            level1={t('page.home')} 
            level2={t('page.cart')}
            path={"/"}
          />
          <div className="pl-3 pr-3">
            <h4>Your cart: 3 items</h4>
            <Row>
              <Col lg={8} md={12}>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={images} alt="placeholder" width="150px" className="img-thumbnail"/>
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col lg={4} md={12}>
                <Card className="text-center">
                  <Card.Header>Card Totals</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <h3 className="title-b">$99.80</h3>
                    <Button variant="primary">Place Order</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }

}

Cart.contextTypes = {
  t: PropTypes.func
}

export default withRouter(Cart);