import React, { Component } from 'react'

class Total extends Component {

  render() {
    return (
      <div className="total-courses">
        <p>Total # of courses: {totalExercises(this.props.courseParts)}</p>
      </div>
    )
  }
}

const totalExercises = parts => {
  let sum = 0
  parts.forEach(value => {
    sum += value.exercises
  })
  return sum
}

export default Total 
