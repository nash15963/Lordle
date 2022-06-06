import React , { useState } from 'react'
// import Home from './components/Home'
import Game from './components/Game'
import Login from './components/Login'
import './styl/App2.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Discription from './components/Description'


function App() {
  const [member ,setMember] = useState('')
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path='/Description' element={<Discription/>}/> */}
      <Route path="/" element={<Login setMember={setMember}/>} />
      <Route path="/Game" element={<Game member={member}/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;