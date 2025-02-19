import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    newNote: (state, action) => {
      state.push({
        content: action.payload,
        important: false,
        id: Number((Math.random() * 1000000).toFixed(0)), 
      })
    },
    toggleImportance: (state, action) => {
      const note = state.find(n => n.id === action.payload)
      if (note) {
        note.important = !note.important
      }
    },
  },
})

export const { newNote, toggleImportance } = noteSlice.actions
export default noteSlice.reducer
