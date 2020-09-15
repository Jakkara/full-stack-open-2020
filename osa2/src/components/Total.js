import React from 'react'

const Total = ({ parts }) => {

  const reducer = (accumulator, current) => accumulator + current.exercises

  const total = parts.reduce(reducer, 0)

  return (
    <div className="total-courses">
      <p>Total # of courses: {total}</p>
    </div>
  )
}


export default Total 
