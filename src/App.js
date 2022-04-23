import Board from './components/Board'
import Keyboard from './components/KeyBoard'
import { boardDefault ,generateWordSet } from './Words'
import './App.css';
import { createContext ,useEffect,useState } from 'react'
import GameOver from './components/GameOver'

export const AppContex = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault) 
  const [currAttempt , setCurrAttempt] = useState({attempt:0 ,letterPos :0})  //物件的移動數字
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  // const correctWord = 'RIGHT' ;

  useEffect(()=>{
    generateWordSet()
    .then((words)=>{
      // console.log('words from new set()',words)
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord)
    })
  },[])

  //從Key.js移動過來
  const onSelectLetter =(keyVal)=>{
    if(currAttempt.letterPos>4) return ;  //這段很詭異ㄟ??? // it means dont forword
    const newBoard =[...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrAttempt({...currAttempt ,letterPos : currAttempt.letterPos+1})
    // console.log(currAttempt) //從App.js來
    // console.log(keyVal) //鍵盤上的字
    // console.log({attempt :currAttempt.attempt})
  }
  const onDelete =()=>{
    if(currAttempt.letterPos===0)return ;
    const newBoard =[...board] //newBoard可以用board替換(拷貝資料問題)
    newBoard[currAttempt.attempt][currAttempt.letterPos-1] = ''
    setBoard(newBoard)
    setCurrAttempt({...currAttempt ,letterPos : currAttempt.letterPos-1})
    // console.log(newBoard) //words.js做的matrix 
  }
  const onEnter =()=>{
    // console.log('ok') //form Key.js
    if(currAttempt.letterPos!==5) return ;
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += (board[currAttempt.attempt][i]).toLowerCase();
    }
    currWord = currWord + '\r'  //換行後的字串
    console.log(currWord)
    // console.log(wordSet)
    if (wordSet.has(currWord)) {  //如果字串不存在於12000字中則不繼續給提示
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos :0 });  //往下一行，letterPos為0
    } else {
      alert("Word not found");
    }
    if(currWord === correctWord){
      setGameOver({ gameOver: true, guessedWord: true });
      return ;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  }
  return (
    <div className="App">
      <header>
        <div className='question'></div>
        <h1>Lordle</h1>
        <div className='login'></div>
        <div className='select'></div>
      
      </header>
      <AppContex.Provider value={
        {board, setBoard ,currAttempt , setCurrAttempt,onSelectLetter,
          onDelete,onEnter,correctWord,disabledLetters, setDisabledLetters,
          gameOver, setGameOver}
      }>
      <div className="game">
      <Board/>
      {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
      </AppContex.Provider>
    </div>
  );
}

export default App;
