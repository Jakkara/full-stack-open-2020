import React from 'react'
import Part from './Part'

const Content = props => {
  return props.parts.map(value => {
    return (
      <Part partName={value.name} partExerciseAmount={value.exercises} />
    )
  })
}

export default Content
