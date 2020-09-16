import React, { useEffect, useState } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import noteService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    noteService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

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

    const matchingPerson = persons.find(person => person.name === newName)
    if (matchingPerson) {
      const result = window.confirm(
        `${newName} is already added to the phonebook. Would you like to replace their number with a new one?`
      )
      if (!result) {
        return false
      }
      const updateInfo = {
        ...matchingPerson,
        number: newNumber
      }
      noteService
        .update(matchingPerson.id, updateInfo)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
        })

    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      noteService
        .create(newPerson)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handlePersonDelete = event => {
    const targetId = parseInt(event.target.dataset.id)
    const selectedPerson = persons.find(person => person.id === targetId)
    const result = window.confirm(`Are you sure you want to remove ${selectedPerson.name}?`)
    if (result) {
      const filteredPersons = persons.filter(person => person.id !== targetId)
      noteService
        .destroy(targetId)
        .then(() => {
          setPersons(filteredPersons)
        })
    }
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
      <Persons people={peopleToShow} onDelete={handlePersonDelete} />
    </div>
  )

}

export default App
