import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authors: [
                {
                    id:1,
                    title: 'The Beatles'
                },
                {
                    id:2,
                    title: 'Scorpions'
                },
                {
                    id:3,
                    title: 'lui Armstrong'
                },
    ]
}

export const authorsSlice = createSlice({
    name:'authors',
    initialState,
    reducers:{}
})

export default authorsSlice.reducer