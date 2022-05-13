import Home from './components/Home'
import Game from './components/Game'
import './styl/App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Discription from './components/Description'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Description' element={<Discription/>}/>
      <Route path="/Game" element={<Game />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;