import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type Earning = {
    description: string;
    amount: number;
    category: 'Gehalt' | 'Geschenk' | 'Verkauf' | 'Sonstiges';
}

type EarningsState = {
    list: Earning[];
    isLoading: boolean;
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
        }
    }
})

export const { addEarning } = earningsSlice.actions

export default earningsSlice.reducer