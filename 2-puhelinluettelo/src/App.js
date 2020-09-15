import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = event => {
    setNameFilter(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const matchingNames = persons.filter(person => person.name === newName)
    if (matchingNames.length > 0) {
      alert(`${newName} is already in the phone book!`)
      return false
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const peopleToShow = nameFilter === '' ? persons : persons.filter(person => {
    const nameInLower = person.name.toLowerCase(),
      queryInLower = nameFilter.toLowerCase()
    return nameInLower.includes(queryInLower)
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <h3>Add a new entry</h3>
        <PersonForm
          name={newName}
          number={newNumber}
          onNameChange={handleNameChange}
          onNumberChange={handleNumberChange}
        />
        <button type="submit">Save entry</button>
      </form>
      <h3>Numbers</h3>
      <Filter value={nameFilter} onChange={handleFilterChange} />
      <Persons people={peopleToShow} />
    </div>
  )

}

export default App