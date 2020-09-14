import React, { Component } from 'react'

class Total extends Component {
  render() {
    return (
      <div className="total-courses">
        <p>Yhteensä {totalExercises(this.props.allExercises)} kurssia</p>
      </div>
    )
  }
}

function totalExercises(allExercises) {
  return allExercises.reduce(function (a, b) { return a + b }, 0)
}

export default Total 
