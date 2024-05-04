import { createSlice } from '@reduxjs/toolkit'

export const dateSlice = createSlice ({
    name: 'date',
    initialState:{
        value: Date.now()
    }
})