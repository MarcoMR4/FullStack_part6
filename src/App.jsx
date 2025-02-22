import Notes from './components/Notes'
import NewNote from './components/NewNote'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import VisibilityFilter from './components/VisibilityFilter'
import Filter from './components/Filter'

import { useEffect } from 'react'
import noteService from './services/noteService'
import { setNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    noteService
      .getAll().then(notes => dispatch(setNotes(notes)))
  }, [])
 
  return (
    <div>
        <NewNote />
        <VisibilityFilter />
        <Notes />
        <br /><br /><br />
        <hr />
        <Filter />
        <AnecdoteList/> 
        <NewAnecdote />
    </div>
  )
}

export default App