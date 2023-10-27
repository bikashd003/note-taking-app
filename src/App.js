import React from 'react'
import './App.css'
import NoteArea from './Components/DisplayNote/NoteArea'
import CreateArea from './Components/CreateNote/CreateArea'

const App = () => {
  return (
  <>
  <div id="app">
    <CreateArea />
    <NoteArea />
  </div>
  </>
  )
}

export default App