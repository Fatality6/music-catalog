import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authors: [
    {
      id: 1,
      title: 'The Beatles',
      description: 'The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsU2AZZPY05tRv3FdB9NmzVveuyAI2EaSSw&usqp=CAU'
    },
    {
      id: 2,
      title: 'Scorpions',
      description: 'Scorpions are a German rock band formed in Hanover in 1965 by guitarist Rudolf Schenker',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Scorpions_in_Melbourne%2C_Australia_17.10.2016.jpg/234px-Scorpions_in_Melbourne%2C_Australia_17.10.2016.jpg'

    },
    {
      id: 3,
      title: 'lui Armstrong',
      description: 'Louis Daniel Armstrong (August 4, 1901 – July 6, 1971), nicknamed "Satchmo", "Satch", and "Pops", was an American trumpeter and vocalist',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/220px-Louis_Armstrong_restored.jpg'
    },
  ]
}

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {}
})

export default authorsSlice.reducer