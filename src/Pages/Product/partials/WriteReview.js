import { Component } from 'react'
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

class WriteReview extends Component {

  render() {
    let t = this.context.t

    return (
      <div className="box-add-review">
        <Card>
          <Card.Header>
            <h3 className="title-b">{t('product.write_reviews')}</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Add a title</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Details please! Yours review help other shoppers</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Select a rating start</Form.Label>
                <Form.Control max="5" min="1" type="number" placeholder="1"/>
              </Form.Group>
            </Form>
            <Button variant="primary" size="lg" block className="mt-3">
              Submit Review
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

}

WriteReview.contextTypes = {
  t: PropTypes.func
}

// withRouter will set match, location and history to Component props whenever route changes
export default withRouter(WriteReview);