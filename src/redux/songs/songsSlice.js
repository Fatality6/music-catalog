import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    songs: [
        {
            id: 1,
            title: 'Let It Be',
            album: [{
                albumId: 1,
                number: 1
            }],
        },
        {
            id: 2,
            title: 'I Me Mine',
            album: [{
                albumId: 1,
                number: 2
            }],
        },
        {
            id: 3,
            title: 'Dig A Pony',
            album: [{
                albumId: 1,
                number: 3
            }],
        },
        {
            id: 4,
            title: 'Rain',
            album: [{
                albumId: 2,
                number: 1
            }],
        },
        {
            id: 5,
            title: 'Paperback Writer',
            album: [{
                albumId: 2,
                number: 2
            }],
        },
        {
            id: 6,
            title: 'Revolution',
            album: [{
                albumId: 2,
                number: 3
            }],
        },
        {
            id: 7,
            title: 'Dark Lady',
            album: [{
                albumId: 3,
                number: 1
            }],
        },
        {
            id: 8,
            title: 'In Trance',
            album: [{
                albumId: 3,
                number: 2
            }],
        },
        {
            id: 9,
            title: `Life's Like a River`,
            album: [{
                albumId: 3,
                number: 3
            }],
        },
        {
            id: 10,
            title: `Tease Me Please Me`,
            album: [{
                albumId: 4,
                number: 1
            }],
        },
        {
            id: 11,
            title: `Don't Believe Her`,
            album: [{
                albumId: 4,
                number: 2
            }],
        },
        {
            id: 12,
            title: `Wind of Change`,
            album: [{
                albumId: 4,
                number: 3
            }],
        },
        {
            id: 13,
            title: `Do Nothing till You Hear from Me`,
            album: [{
                albumId: 5,
                number: 1
            }],
        },
        {
            id: 14,
            title: `Drop Me Off in Harlem`,
            album: [{
                albumId: 5,
                number: 2
            }],
        },
        {
            id: 15,
            title: `I'm Beginning to See the Light`,
            album: [{
                albumId: 5,
                number: 3
            }],
        },
        {
            id: 16,
            title: `You're Just in Love`,
            album: [{
                albumId: 6,
                number: 1
            }],
        },
        {
            id: 17,
            title: `When It's Sleepy Time Down South`,
            album: [{
                albumId: 6,
                number: 2
            }],
        },
        {
            id: 18,
            title: `The Whiffenpoof Song`,
            album: [{
                albumId: 6,
                number: 3
            }],
        },
    ],
    status: null
}

export const addSong = createAsyncThunk('songs/addSong', (newSong) => {
    const data = newSong
    return data
})

export const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {},
    extraReducers: {
        //add song
        [addSong.pending]: (state) => {
            state.status = null
        },

        [addSong.fulfilled]: (state, action) => {

            let newNumber = 1
            let songExists = false
            let songInAlbumExists = false

            // Check if the song with the same title already exists
            state.songs.forEach(song => {
                if (song.title === action.payload.values.title) {
                    songExists = true

                    // Check if the song with the same title and albumId already exists
                    song.album.forEach(album => {
                        if (album.albumId === action.payload.id) {
                            songInAlbumExists = true
                            alert("В этом альбомe уже существует такая песня")
                        }
                    })

                    // Add the album to the existing song
                    if (!songInAlbumExists) {
                        // Find the highest number in the same album
                        state.songs.forEach(song => {
                            song.album.forEach(album => {
                                if (album.albumId === action.payload.id && album.number >= newNumber) {
                                    newNumber = album.number + 1
                                }
                            })
                        })
                        song.album.push({ albumId: action.payload.id, number: newNumber })
                    }
                }
            })

            //Create new song
            if (!songExists) {
                // Find the highest number in the same album
                state.songs.forEach(song => {
                    song.album.forEach(album => {
                        if (album.albumId === action.payload.id && album.number >= newNumber) {
                            newNumber = album.number + 1
                        }
                    })
                })
                const newId = state.songs.length + 1
                const newSong = {
                    id: newId,
                    title: action.payload.values.title,
                    album: [{
                        albumId: action.payload.id,
                        number: newNumber
                    }],
                }
                state.songs.push(newSong)
            }
        },
        [addSong.rejected]: (state) => {
            state.status = 'ошибка'
        },
    }
})

export default songsSlice.reducer
