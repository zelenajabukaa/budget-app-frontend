import { configureStore } from '@reduxjs/toolkit';
import earningsReducer from './earningsSlice.ts';

export const store = configureStore({
    reducer: {
        earnings: earningsReducer
    }
})