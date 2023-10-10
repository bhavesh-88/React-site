import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Classstatecount extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }
    constructor(params) {
        super()
        this.state = {
            count : 0
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=> this.setState({count : this.state.count + 1})}>{this.state.count} ADD</button>
      </div>
    )
  }
}
