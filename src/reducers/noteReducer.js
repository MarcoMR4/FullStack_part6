import { createSlice, current } from '@reduxjs/toolkit'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [
    {
      content: 'reducer defines how redux store works',
      important: true,
      id: 1,
    },
    {
      content: 'state of store can contain any data',
      important: false,
      id: 2,
    }
  ],
  reducers: {
    newNote: (state, action) => {
      state.push({
        content: action.payload,
        important: false,
        id: Number((Math.random() * 1000000).toFixed(0)), 
      })
      console.log('El state ',current(state))
    },
    toggleImportance: (state, action) => {
      const note = state.find(n => n.id === action.payload)
      if (note) {
        note.important = !note.important
      }
      console.log('State ',current(state))
    },
  },
})

export const { newNote, toggleImportance } = noteSlice.actions
export default noteSlice.reducer
