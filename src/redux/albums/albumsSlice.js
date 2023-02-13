import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  albums: [
    {
      id: 1,
      title: 'Let It Be',
      authorId: '1',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/LetItBe.jpg/220px-LetItBe.jpg'
    },
    {
      id: 2,
      title: 'Hey Jude',
      authorId: '1',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Heyjudealbum.jpg/220px-Heyjudealbum.jpg'
    },
    {
      id: 3,
      title: 'In Trance',
      authorId: '2',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/InTranceCensored.jpg/220px-InTranceCensored.jpg'
    },
    {
      id: 4,
      title: 'Crazy World',
      authorId: '2',
      img: 'https://upload.wikimedia.org/wikipedia/en/f/f0/ScorpionsCrazyWorld.jpg'
    },
    {
      id: 5,
      title: 'The Great Summit',
      authorId: '3',
      img: 'https://upload.wikimedia.org/wikipedia/en/e/e2/The_Great_Summit.jpg'
    },
    {
      id: 6,
      title: 'Satchmo In Style',
      authorId: '3',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ubSCk1ihyveg2J2pz2PDTpSfVE_mizEcw5-M7LYmmMaKwAuWivlKpmpbDmSHShi-kpA&usqp=CAU'
    },

  ]
}

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {}
})

export default albumsSlice.reducer