import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type Earning = {
    id: string
    description: string
    amount: number
    category: 'Gehalt' | 'Geschenk' | 'Verkauf' | 'Sonstiges' //these categories are also the ones that are displayed as the options in the forms
}

type EarningsState = {
    list: Earning[]
    isLoading: boolean
}

const initialState: EarningsState = {
    list: [],
    isLoading: false,
}

export const earningsSlice = createSlice({
    name:'earnings',
    initialState,

    reducers:{
        addEarning: (state, action:PayloadAction<Earning>) => {
            state.list.push(action.payload)
        },//pushes the payload (the new Earning) onto the list

        removeEarning: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },//searches for the right id and removes it from the list Array

        updateEarning: (state, action: PayloadAction<Earning>) => {
            const index = state.list.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.list[index] = action.payload
            }
        },//searches for the right id and only if the id exists it updates the values and it STAYS at the same place in the array
    }
})

export const { addEarning, removeEarning, updateEarning } = earningsSlice.actions

export default earningsSlice.reducer