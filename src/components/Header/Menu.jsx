import React, { Component } from 'react'
import {
  Navbar,
  Nav
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

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
          {t('page.cart')} (0)
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

export default withRouter(Menu)