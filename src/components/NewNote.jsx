import { useDispatch } from 'react-redux'
import { newNote } from '../reducers/noteReducer'
import noteService from '../services/noteService'

const NewNote = () => {
  const dispatch = useDispatch()

  const createNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    const newCreatedNote = await noteService.createNew(content)
    dispatch(newNote(newCreatedNote))
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