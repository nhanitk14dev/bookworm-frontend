import React, {Component} from 'react'
import {
  // A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
  BrowserRouter,
  Route,
  // Switch Renders the first child <Route> or <Redirect> that matches the location.
  Switch } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../Pages/Home/'
import About from '../Pages/About/'
import Shop from '../Pages/Shop/'
import Cart from '../Pages/Cart/'
import {connect} from 'react-redux'

class Routes extends Component {

  render(){
    // let isSignedIn = this.props.currentUser.isSignedIn

    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/shop" component={Shop}/>
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