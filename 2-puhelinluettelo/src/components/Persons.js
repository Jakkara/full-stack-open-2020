import React from 'react'

const Persons = ({ people, onDelete }) => {
  return (
    <ul>
      {people.map(person => {
        return (
          <li key={person.id}>
            {person.name} : {person.number}
            <button data-id= {person.id} onClick={onDelete}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default Persons
