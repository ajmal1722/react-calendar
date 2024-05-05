import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: 'events', 
    initialState: {
        value: [],
    },
    reducers: {
        addToEvents: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addToEvents } = eventSlice.actions;
export default eventSlice.reducer