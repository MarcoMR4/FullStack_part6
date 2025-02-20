import Notes from './components/Notes'
import NewNote from './components/NewNote'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import VisibilityFilter from './components/VisibilityFilter'
import Filter from './components/Filter'

const App = () => {
 
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