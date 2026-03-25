import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type Earning = {
    id: string
    description: string
    amount: number
    category: 'Gehalt' | 'Geschenk' | 'Verkauf' | 'Sonstiges'
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
        },
        removeEarning: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        updateEarning: (state, action: PayloadAction<Earning>) => {
            const index = state.list.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.list[index] = action.payload
            }
        },
    }
})

export const { addEarning, removeEarning, updateEarning } = earningsSlice.actions

export default earningsSlice.reducer