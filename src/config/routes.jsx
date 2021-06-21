import React, { Component } from 'react'
import {
  // A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
  BrowserRouter,
  Route,
  // Switch Renders the first child <Route> or <Redirect> that matches the location.
  Switch
} from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import { connect } from 'react-redux'

class Routes extends Component {

  render() {
    // let isSignedIn = this.props.currentUser.isSignedIn

    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/product/:slug" component={Product}/>
            <Route exact path="/cart" component={Cart}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default connect(
  null
)(Routes)