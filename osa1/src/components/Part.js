import React from 'react'

const Part = props => {
  const { partName, partExerciseAmount } = props
  return (
    <p>{partName + " - " + partExerciseAmount}</p>
  )
}

export default Part 