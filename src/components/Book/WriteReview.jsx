import { Component } from 'react'
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { reviewService } from '../../services';
import swal from 'sweetalert';

class WriteReview extends Component {

  constructor(props) {
    super(props)
    this.state = {
      validated: "false",
      reviewTitle: '',
      reviewDetail: '',
      ratingStar: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    let bookId = this.props.bookId;
    const formData = {
      review_title: this.state.reviewTitle,
      review_detail: this.state.reviewDetail,
      rating_star: this.state.ratingStar
    }

    reviewService.createReview(this.props.bookId, formData).then(res => {
      if (res) {
        this.showModalMessage('Yours review have updated sucessfully!!');
        this.props.updatedListReviews(true);
      } else {
        this.showModalMessage('Somethings wrong. Please try again!', false);
      }
    });
  };

  showModalMessage(msg = '', status = true) {
    if (status) {
      swal({
        text: msg,
        timer: 3000,
        icon: "success",
      });
    } else {
      swal({
        text: msg,
        timer: 3000,
        icon: "error",
      });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    let t = this.context.t
    const { reviewTitle, reviewDetail, ratingStar } = this.state;
    return (
      <div className="box-add-review">
        <Card>
          <Card.Header>
            <h3 className="title-b">{t('book.write_reviews')}</h3>
          </Card.Header>
          <Card.Body>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Add a title</Form.Label>
                <Form.Control
                  required
                  feedback="You must agree before submitting."
                  type="text"
                  placeholder="Title"
                  name="reviewTitle"
                  minLength="2"
                  maxLength="120"
                  value={reviewTitle}
                  onChange={this.handleInputChange}
                />
                <Form.Control.Feedback type="invalid">Please add some words</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Details please! Yours review help other shoppers</Form.Label>
                <Form.Control
                  as="textarea"
                  name="reviewDetail"
                  value={reviewDetail}
                  rows={3}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Select a rating start</Form.Label>
                <Form.Control
                  max="5"
                  min="1"
                  type="number"
                  placeholder="1"
                  name="ratingStar"
                  value={ratingStar}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Button type="submit" variant="primary" size="lg" block className="mt-3">
                Submit Review
              </Button>
            </Form>
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