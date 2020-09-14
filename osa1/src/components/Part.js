import React, { Component } from 'react'

class Part extends Component {
  render() {
    return (
      <p>{this.props.partName + " - " + this.props.partExerciseAmount}</p>
    )
  }
}

export default Part 