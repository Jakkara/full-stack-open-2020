import React from 'react'

const PersonForm = props => {
  return (
    <div>
      Name: <input value={props.name} onChange={props.onNameChange} />
      <br />
      Phone number: <input type="tel" value={props.number} onChange={props.onNumberChange} />
    </div>
  )
}

export default PersonForm