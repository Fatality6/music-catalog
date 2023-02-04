import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    albums: [
                {
                    id:1,
                    title: 'Let It Be',
                    authorId: 1
                },
                {
                    id:2,
                    title: 'Hey Jude',
                    authorId: 1
                },
                {
                    id:3,
                    title: 'In Trance',
                    authorId: 2
                },
                {
                    id:4,
                    title: 'Crazy World',
                    authorId: 2
                },
                {
                    id:5,
                    title: 'The Great Summit',
                    authorId: 3
                },
                {
                    id:6,
                    title: 'Satchmo In Style',
                    authorId: 3
                },

    ]
}

export const albumsSlice = createSlice({
    name:'albums',
    initialState,
    reducers:{}
})

export default albumsSlice.reducer