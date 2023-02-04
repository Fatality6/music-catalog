import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Songs } from './pages/Songs/Songs'
import { Albums } from './pages/Albums/Albums'
import { Authors } from './pages/Authors/Authors';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Authors/>}></Route>
      <Route path='/albums' element={<Albums/>}></Route>
      <Route path='/songs' element={<Songs/>}></Route>
    </Routes>
  );
}

export default App
