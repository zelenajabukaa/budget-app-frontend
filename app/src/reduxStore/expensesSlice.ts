import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type Expense = {
    description: string
    amount: number
    category: 'Miete' | 'Lebensmittel' | 'Transport' | 'Freizeit' | 'Handyrechnung' | 'Sonstiges'
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
        }
    }
})

export const { addExpense } = expensesSlice.actions

export default expensesSlice.reducer