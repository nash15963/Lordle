import Board from './components/Board'
import KeyBoard from './components/KeyBoard'
import { boardDefault } from './Words'
import './App.css';
import { createContext ,useState } from 'react'

export const AppContex = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault) 
  return (
    <div className="App">
      <nav><h1>wordle</h1></nav>
      <AppContex.Provider value={{board, setBoard}}>
      <Board/>
      <KeyBoard/>
      </AppContex.Provider>
    </div>
  );
}

export default App;
