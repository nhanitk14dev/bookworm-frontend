import React, { Component } from 'react'
import {
  Spinner,
  Button,
  ButtonToolbar,
  NavDropdown,
  Navbar,
  Nav
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class CHeader extends Component {
  renderBrand() {
    return <NavLink to='/'>
      <Navbar.Brand>
        <img
          src={logo}
          className="app-logo"
          alt="Brand" />
      </Navbar.Brand>
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/'>
          BOOKWORM
        </NavLink>
      </Navbar.Text>
    </NavLink>
  }
  renderLinks() {
    let t = this.context.t
    return <Nav className="mr-auto">
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/'>
          Home
        </NavLink>
      </Navbar.Text>
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/shop'>
          Shop
        </NavLink>
      </Navbar.Text>
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/about'>
          About
        </NavLink>
      </Navbar.Text>
      <Navbar.Text className='mr-3'>
        <NavLink
          to='/cart'>
          Cart (0)
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
CHeader.contextTypes = {
  t: PropTypes.func
}
const Header = connect(null)(CHeader)
export default withRouter(Header)