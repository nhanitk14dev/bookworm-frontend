import React, { Component } from 'react'
import Header from './Header/'
import { connect } from 'react-redux'

class Layout extends Component {
  render() {
    // Understand about props.children https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx, e.g https://jsfiddle.net/od8sb94w/1/
    return <div>
      <Header/>
      <div className='container main-content'>
      {this.props.children}
      </div>
    </div>
  }
}
export default connect(null)(Layout)