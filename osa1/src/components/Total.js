import React from 'react'

const Total = props => {
  const { parts } = props

  const totalExercises = parts => {
    let sum = 0
    parts.forEach(value => {
      sum += value.exercises
    })
    return sum
  }

  return (
    <div className="total-courses">
      <p>Total # of courses: {totalExercises(parts)}</p>
    </div>
  )
}


export default Total 
