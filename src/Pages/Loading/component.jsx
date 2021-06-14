import React, {Component} from 'react'
import './stylesheet.scss'

export default class Loading extends Component {

  render(){
    let props = this.props

    return <div
      className='loading fadeIn'
      style={{maxWidth: props.maxWidth}} >
      {[...Array(props.linesCount)].map( (r, i) =>
        <div
          key={i}
          style={{animationDelay: i/2 +'s'}}
          className='loading-bar mt-4'></div>
      )}
    </div>
  }

}

// https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
Loading.defaultProps = {
  linesCount: 1,
  maxWidth: '100%'
}