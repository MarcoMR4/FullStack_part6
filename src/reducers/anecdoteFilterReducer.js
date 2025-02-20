import { createSlice } from "@reduxjs/toolkit"

const anecdoteFilter = createSlice({
    name: 'filter', 
    initialState: '',
    reducers: {
        setFilter: (state, action) => action.payload 
    }
})


export const { setFilter } = anecdoteFilter.actions
export default anecdoteFilter.reducer