import React, { Component } from 'react'

class Content extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name + " - " + this.props.exercises}</p>
      </div>
    )
  }
}

export default Content
