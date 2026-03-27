import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {ExpenseCategory} from "../types.ts";

export type Expense = {
    id: string
    description?: string
    amount: number
    category: ExpenseCategory // also the categories in the forms
}

type ExpensesState = {
    list: Expense[]
    isLoading: boolean
}

const initialState: ExpensesState = {
    list: [],
    isLoading: false,
}

export const expensesSlice = createSlice({
    name:'expenses',
    initialState,

    reducers:{
        addExpense: (state, action:PayloadAction<Expense>) => {
            state.list.push(action.payload)
        },
        removeExpense: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        updateExpense: (state, action: PayloadAction<Expense>) => {
            const index = state.list.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.list[index] = action.payload
            }
        },
    }
})

export const { addExpense, removeExpense, updateExpense } = expensesSlice.actions

export default expensesSlice.reducer