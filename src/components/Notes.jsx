import { useDispatch, useSelector } from 'react-redux'
import { toggleImportance } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {note.content} 
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  return(
    <div>
       <ul>
          {notes.map(note =>
            <Note
              key={note.id}
              note={note}
              handleClick={() => 
                dispatch(toggleImportance(note.id))
              }
            />
          )}
        </ul>
    </div>
  )
}

export default Notes