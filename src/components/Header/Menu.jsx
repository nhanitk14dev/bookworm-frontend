import React, { Component } from 'react'
import {
  Navbar,
  Nav
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Menu extends Component {

  renderBrand() {
    return (
      <NavLink to='/'>
        <Navbar.Brand>
          <img src={logo} className="app-logo" alt="Brand"/>
        </Navbar.Brand>
        <Navbar.Text className='mr-3'>
          <NavLink
            to='/'>
            BOOKWORM
          </NavLink>
        </Navbar.Text>
      </NavLink>
    );
  }

  renderLinks() {
    const { cartItems } = this.props.cartItems;
    console.log(cartItems)
    let t = this.context.t
    return <Nav className="mr-auto">
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/'>
          {t('page.home')}
        </NavLink>
      </Navbar.Text>
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/shop'>
          {t('page.shop')}
        </NavLink>
      </Navbar.Text>
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/about'>
          {t('page.about')}
        </NavLink>
      </Navbar.Text>
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/cart'>
          <span className="mr-1">{t('page.cart')}</span>
          <span>({cartItems.length})</span>
        </NavLink>
      </Navbar.Text>
    </Nav>
  }
  render() {

    return <Navbar bg="dark" variant="dark" expand="lg" className='header'>
      {this.renderBrand()}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-link">
        {this.renderLinks()}
      </Navbar.Collapse>
    </Navbar>
  }
}
Menu.contextTypes = {
  t: PropTypes.func
}

const mapStatesToProps = (state) => {
  return {
    cartItems: state.carts,
  }
}

export default connect(mapStatesToProps)(Menu);