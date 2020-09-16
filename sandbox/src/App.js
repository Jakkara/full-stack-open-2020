import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteService
      .getAll()
      .then(notes => {
        setNotes(notes)
      })
  }
  useEffect(hook, [])

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(updatedNote => {
        setNotes(notes.map(note => note.id !== id ? note : updatedNote))
      })
      .catch(error => {
        alert('Faulty update')
        setNotes(notes.filter(note => note.id !== id))
      })
  }

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      import: Math.random() > 0.1,
      id: notes.length + 1
    }

    noteService
      .create(noteObject)
      .then(createdNote => {
        setNotes(notes.concat(createdNote))
        setNewNote('')
      })
  }

  const handleNoteChange = event => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => {
          return <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        })}
      </ul>
      <form onSubmit={addNote}>
        <input placeholder="A new note..." value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
