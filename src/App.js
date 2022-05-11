import Home from './components/Home'
import Game from './components/Game'
import './css/App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;