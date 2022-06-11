import React , { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
// import { Link } from 'react-router-dom'
import Game from './components/5letters/Game'
import Gamein6 from './components/6letters/Gamein6'
import Login from './components/Login'
import './styl/App2.css'


function App() {
  const [member ,setMember] = useState('')
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setMember={setMember}/>} />
      <Route path="/Game" element={<Game member={member}/>} />
      <Route path="/HardGame" element={<Gamein6 member={member}/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

// 1.網頁進行重新渲染
// 2.err page
