import Board from './Board'
import Keyboard from './KeyBoard'
// import Question from './Question'
// import Login from './components/Login'
// import NightMode from './NightMode'
import GameOver from './GameOver'
import 'animate.css';
import { boardDefault ,generateWordSet } from '../Words'
import { createContext ,useEffect,useState } from 'react'



export const AppContex = createContext()
// const KeyBoardArray = 'access'

function Game() {
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
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord)
    })
  },[])

  //從Key.js移動過來
  const onSelectLetter =(keyVal)=>{
    if(currAttempt.letterPos>4) return ;  
    const newBoard =[...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal

    setBoard(newBoard)
    setCurrAttempt({...currAttempt ,letterPos : currAttempt.letterPos+1})
    console.log(currAttempt) //從App.js來
    console.log(keyVal) //鍵盤上的字
    console.log({attempt :currAttempt.attempt})
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
    // console.log(currWord)
    // console.log(wordSet)
    if (wordSet.has(currWord)) {
      console.log(board)
      localStorage.setItem('userAnswer',JSON.stringify(board));  //在local存取玩家作答
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos :0 });  //往下一行，letterPos為0
    } else {
      // alert("Word not found");
      let row = document.querySelector(`.board .row:nth-child(${currAttempt.attempt+1})`)
      row.classList.toggle('foo')
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
  
  const [theme, setTheme] = useState('dark')
  const toggleTheme = ()=>{
    setTheme((curr)=>(curr ==='light'?"dark":"light"))
  }



  return (
    <div className="App" id={theme}>
      <header>
        {/* <Question /> */}
        <div className='title'>Lordle</div>
        {/* <NightMode toggleTheme={toggleTheme}  theme={theme} /> */}
        {/* <Login /> */}
      </header>
      
      <AppContex.Provider value={
        {board, setBoard ,currAttempt , setCurrAttempt,onSelectLetter,
          onDelete,onEnter,correctWord,disabledLetters, setDisabledLetters,
          gameOver, setGameOver}
      }>
      <div id ="game">
      <div id='board-container'><Board/></div>
      {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
      </AppContex.Provider>
      
    </div>
  );
}

export default Game;
