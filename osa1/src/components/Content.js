import React, { Component } from 'react'
import Part from './Part'

class Content extends Component {
  render() {
    return this.props.courseParts.map((value, index) => {
      return (
        <Part partName={value[0]} partExerciseAmount={value[1]} />
      )
    })
  }
}

export default Content
