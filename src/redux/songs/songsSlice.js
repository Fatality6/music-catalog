import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  songs: [
    {
      id: 1,
      title: 'Let It Be',
      src: 'https://muztune.me/file/M2YwOWI5ZmEyNTgyYzY1YzNhYWNlNWEzODE4OTI1OGV8bG9hZA.mp3',
      album: [{
        albumId: 1,
        number: 1
      }],
    },
    {
      id: 2,
      title: 'I Me Mine',
      src: 'https://backingtrackx.com/pesni/9152/the_beatles_i_me_mine.mp3',
      album: [{
        albumId: 1,
        number: 2
      }],
    },
    {
      id: 3,
      title: 'Dig A Pony',
      src: 'https://backingtrackx.com/minusovka/233803/beatles/dig_a_pony.mp3',
      album: [{
        albumId: 1,
        number: 3
      }],
    },
    {
      id: 4,
      title: 'Rain',
      src: 'https://backingtrackx.com/minusovka/91936/beatles_the/rain.mp3',
      album: [{
        albumId: 2,
        number: 1
      }],
    },
    {
      id: 5,
      title: 'Paperback Writer',
      src: 'https://jesusful.com/wp-content/uploads/music/2022/07/The_Beatles_-_Paperback_Writer_(Jesusful.com).mp3',
      album: [{
        albumId: 2,
        number: 2
      }],
    },
    {
      id: 6,
      title: 'Revolution',
      src: 'https://jesusful.com/wp-content/uploads/music/2022/07/The_Beatles_-_Hey_Jude_(Jesusful.com).mp3',
      album: [{
        albumId: 2,
        number: 3
      }],
    },
    {
      id: 7,
      title: 'Dark Lady',
      src: 'https://muztune.me/file/YzgyZGU5MzY5ZGFmMDk2MGMzZjJjMDliYjY1NGY0M2R8bG9hZA.mp3',
      album: [{
        albumId: 3,
        number: 1
      }],
    },
    {
      id: 8,
      title: 'In Trance',
      src: 'https://muztune.me/file/ODFiNzllMDZmZjEyN2Q4YTQ2YzI1NWZlNjNmMjQxZTl8bG9hZA.mp3',
      album: [{
        albumId: 3,
        number: 2
      }],
    },
    {
      id: 9,
      title: `Life's Like a River`,
      src: 'https://muztune.me/file/OWU5NzE4N2NlNzEyMWVkZjZhZmE4ZTBlMWZmZWE5YjN8bG9hZA.mp3',
      album: [{
        albumId: 3,
        number: 3
      }],
    },
    {
      id: 10,
      title: `Tease Me Please Me`,
      src: 'https://muztune.me/file/ZTc5NTFkZDU2YTE3ZDkxMGNmYzI0NDY5MDEyNjBkNDl8bG9hZA.mp3',
      album: [{
        albumId: 4,
        number: 1
      }],
    },
    {
      id: 11,
      title: `Don't Believe Her`,
      src: 'https://mp3xi.net/mp3/ZDFhOWMzNjRmMjAzYWRhYzM4YjNhMjFkYjg5M2Y3Y2Z8bG9hZA.mp3',
      album: [{
        albumId: 4,
        number: 2
      }],
    },
    {
      id: 12,
      title: `Wind of Change`,
      src: 'https://muztune.me/file/NjU2ZWUwNmMzOGRiZGQ1Yjk2MjY2NDYwNzE2MDZmOGR8bG9hZA.mp3',
      album: [{
        albumId: 4,
        number: 3
      }],
    },
    {
      id: 13,
      title: `Do Nothing till You Hear from Me`,
      src: '',
      album: [{
        albumId: 5,
        number: 1
      }],
    },
    {
      id: 14,
      title: `Drop Me Off in Harlem`,
      src: '',
      album: [{
        albumId: 5,
        number: 2
      }],
    },
    {
      id: 15,
      title: `I'm Beginning to See the Light`,
      src: '',
      album: [{
        albumId: 5,
        number: 3
      }],
    },
    {
      id: 16,
      title: `You're Just in Love`,
      src: '',
      album: [{
        albumId: 6,
        number: 1
      }],
    },
    {
      id: 17,
      title: `When It's Sleepy Time Down South`,
      src: '',
      album: [{
        albumId: 6,
        number: 2
      }],
    },
    {
      id: 18,
      title: `The Whiffenpoof Song`,
      src: '',
      album: [{
        albumId: 6,
        number: 3
      }],
    },
  ],
  status: null
}

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSong(state, action) {

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
              state.status = 'В этом альбомe уже существует такая песня'
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
            state.status = 'Песня была добавлена, она уже есть в другом альбоме'
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
        state.status = 'Песня была добавлена'
      }

    }
  }
})

export const { addSong } = songsSlice.actions

export default songsSlice.reducer
