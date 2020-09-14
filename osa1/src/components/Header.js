import React from 'react'

const Header = props => {
  const { title } = props

  return (
    <div className="page-header">
      <h1>{title}</h1>
    </div>
  )
}

export default Header 
