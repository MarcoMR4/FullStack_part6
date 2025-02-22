import { createSlice } from '@reduxjs/toolkit'
import { sendNotification, hideNotification } from "./notificationReducer";
import anecdoteService from '../services/anecdoteService';
  
const anecodteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
      newAnecdote: (state, action) => {
        state.push(action.payload)
      },
      voteAnecdote: (state, action) => {
        const anecdote = state.find(s => s.id === action.payload)
        if(anecdote)
            anecdote.votes += 1
        state.sort((a,b) => b.votes - a.votes)
      }, 
      setAnecdotes(state, action) {
        return action.payload
      }
    },
})
  
export const { newAnecdote, voteAnecdote } = anecodteSlice.actions

export const addAnecdoteWithNotification = (content) => {
  return async (dispatch) => {
    try{
      const anecdotedAdded = await anecdoteService.createNew(content)
      console.log(anecdotedAdded)
      dispatch(anecodteSlice.actions.newAnecdote(anecdotedAdded))
      dispatch(sendNotification(`You added "${content}"`))
      setTimeout(() => {
          dispatch(hideNotification());
      }, 5000);
    }
    catch (error) {
      console.error("Failed to fetch anecdotes:", error);
    }
  }
}

export const voteAnecdoteWithNotification = (id, content) => {
  return async (dispatch, getState) => {
    try{
      const anecdote = getState().anecdotes.find(anecdote => anecdote.id === id)
      if(anecdote){
        anecdoteService.vote(id, content, anecdote.votes)

        dispatch(anecodteSlice.actions.voteAnecdote(id))
        dispatch(sendNotification(`You voted for "${content}"`))
        setTimeout(() => {
            dispatch(hideNotification());
        }, 5000);
      }
    }
    catch(error){
      console.error(error)
    }
  };
};

export const getAnecdotesThunk = () => {
  return async (dispatch, getState) => {
    try {
      const anecdotes = await anecdoteService.getAll(); 
      if (anecdotes) {
        dispatch(anecodteSlice.actions.setAnecdotes(anecdotes)); 
      }
    } 
    catch (error) {
      console.error("Failed to fetch anecdotes:", error);
    }
  }
}

export default anecodteSlice.reducer