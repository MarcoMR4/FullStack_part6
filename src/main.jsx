import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit' 
import { Provider } from 'react-redux'

import App from './App'
import noteReducer from './reducers/noteReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteFilter from './reducers/anecdoteFilterReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer, 
    anecdotes: anecdoteReducer, 
    filter: filterReducer, 
    anecdoteFilter1: anecdoteFilter
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
