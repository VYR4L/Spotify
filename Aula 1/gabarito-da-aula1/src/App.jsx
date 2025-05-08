import React from 'react'
import Header from './components/Header.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Artists from '../pages/Artists.jsx'
import Artist from '../pages/Artist.jsx'
import Home from '../pages/Home.jsx'
import Song from '../pages/Song.jsx'
import Songs from '../pages/Songs.jsx'


function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/song/:id" element={<Song />} />
    </Routes>

    </BrowserRouter>
  )
  
}
export default App
