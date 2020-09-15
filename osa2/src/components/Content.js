import React from 'react'
import Part from './Part'

const Content = props => {
  return props.parts.map(value => {
    return (
      <Part key={value.id} partName={value.name} partExerciseAmount={value.exercises} />
    )
  })
}

export default Content
