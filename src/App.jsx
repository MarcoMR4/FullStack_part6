import Notes from './components/Notes'
import NewNote from './components/NewNote'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'

const App = () => {
  return (
    <div>
        <NewNote />
        <Notes />
        <br /><br /><br />
        <hr />
        <AnecdoteList/> 
        <NewAnecdote />
    </div>
  )
}

export default App