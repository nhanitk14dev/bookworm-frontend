import React, {Component} from 'react'
import { Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Home extends Component {

  render(){
    let t = this.context.t

    return <Jumbotron className='home fadeIn mt-5'>
      <h1>{t('home.title')}</h1>
      <p>{t('home.desc')}This is home page</p>
    </Jumbotron>
  }

}

Home.contextTypes = {
  t: PropTypes.func
}