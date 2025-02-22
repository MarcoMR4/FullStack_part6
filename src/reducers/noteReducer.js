import { createSlice, current } from '@reduxjs/toolkit'
import noteService from '../services/noteService'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    newNote(state, action) {
      state.push(action.payload)
    },
    toggleImportance: (state, action) => {
      const note = state.find(n => n.id === action.payload)
      if (note) {
        note.important = !note.important
      }
      console.log('State ',current(state))
    },
    appendNote(state, action) {
      state.push(action.payload)
    }, 
    setNotes(state, action) {
      return action.payload
    }
  },
})

export const { newNote, toggleImportance, appendNote, setNotes } = noteSlice.actions

export const toggleImportanceThunk = (id) => {
  return async (dispatch, getState) => {
    const state = getState()
    const note = state.notes.find(n => n.id === id)

    if (note) {
      const updatedNote = { ...note, important: !note.important }
      await noteService.changeImportant(id, updatedNote)
      dispatch(toggleImportance(id))
    }
  }
}

export default noteSlice.reducer
