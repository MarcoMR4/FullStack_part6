import { useDispatch } from 'react-redux'
import { newNote } from '../reducers/noteReducer'

const NewNote = () => {
  const dispatch = useDispatch()

  const createNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(newNote(content))
  }

  return (
    <div>
      <h2>Notes</h2>
      <form onSubmit={createNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </div>
    
  )
}

export default NewNote