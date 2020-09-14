import React, { Component } from 'react'
import Part from './Part'

class Content extends Component {
  render() {
    return this.props.parts.map(value => {
      return (
        <Part partName={value.name} partExerciseAmount={value.exercises} />
      )
    })
  }
}

export default Content
