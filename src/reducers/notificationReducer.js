import { createSlice, current } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification', 
    initialState: '',
    reducers: {
        sendNotification: (state, action) => action.payload, 
        hideNotification: () => "" 
      }
})

export const {sendNotification, hideNotification} = notificationSlice.actions
export default notificationSlice.reducer