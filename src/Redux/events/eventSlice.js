import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: 'events', 
    initialState: {
        value: [],
    },
    reducers: {
        addToEvents: (state, action) => {
            state.value.push(action.payload)
        },
        removeFromEvents: (state, action) => {
            const index = action.payload;
            state.value.splice(index, 1);
        }
    }
})

export const { addToEvents, removeFromEvents } = eventSlice.actions;
export default eventSlice.reducer