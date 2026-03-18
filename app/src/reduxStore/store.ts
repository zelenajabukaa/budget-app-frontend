import { configureStore } from '@reduxjs/toolkit';
import earningsReducer from './earningsSlice.ts';
import expensesReducer from './expensesSlice.ts';

export const store = configureStore({
    reducer: {
        earnings: earningsReducer,
        expenses: expensesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;