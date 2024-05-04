import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './events/eventSlice'

export default configureStore({
    reducer: {
        events: eventReducer
    }
})