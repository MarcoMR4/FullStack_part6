import { configureStore } from '@reduxjs/toolkit'

import noteService from './services/noteService'
import noteReducer, { setNotes } from './reducers/noteReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteFilter from './reducers/anecdoteFilterReducer'
import notificationSlice from './reducers/notificationReducer'


noteService.getAll().then(notes =>
    store.dispatch(setNotes(notes))
  )

const store = configureStore({
    reducer: {
      notes: noteReducer, 
      anecdotes: anecdoteReducer, 
      filter: filterReducer, 
      anecdoteFilter1: anecdoteFilter,
      notification: notificationSlice
    },
})

export default store