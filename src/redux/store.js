import { configureStore } from '@reduxjs/toolkit'
import albumsSlice from './albums/albumsSlice'
import songsSlice from './songs/songsSlice'
import authorsSlice from './authors/authorsSlice'



export const store = configureStore({
    reducer: {
        songs: songsSlice,
        albums: albumsSlice,
        authors: authorsSlice
    }
})