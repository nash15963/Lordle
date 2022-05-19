import Board from './Board'
import Keyboard from './KeyBoard'
import Toast from './Toast'
// import Question from './Question'
// import Login from './components/Login'
// import NightMode from './NightMode'
import GameOver from './GameOver'
import 'animate.css';
import { boardDefault ,generateWordSet ,generateSavedAnswer } from '../Words'
import { createContext ,useEffect,useState } from 'react'



export const AppContex = createContext()
// const KeyBoardArray = 'access'

function Game() {
  const [localboard, setLocalboard] = useState(()=>{
    // const savedBoard = localStorage.getItem("userAnswer");
    const savedBoard = JSON.parse(localStorage.getItem("userAnswer"))
    return savedBoard || boardDefault;
  }) ;    //rerender*
  const [board, setBoard] = useState(localboard) 
  // const [currAttempt , setCurrAttempt] = useState({attempt:0 ,letterPos :0})  //物件的移動數字
  const [currAttempt , setCurrAttempt] = useState(()=>{
    const saveAttempt = JSON.parse(localStorage.getItem("localAttempt"))
    return saveAttempt || {attempt:0 ,letterPos :0} ;
  }) ;

  //get存取狀態 
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [todayAnswer, setTodayAnswer] = useState(()=>{
    const savedAnswer = localStorage.getItem("localAnswer");
    return savedAnswer || "";
  }) ;    //rerender*
  
  const [correctWord, setCorrectWord] = useState(todayAnswer);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });


  useEffect(()=>{
    if(todayAnswer !== ""){
      console.log(todayAnswer)
      generateSavedAnswer()
      .then((words)=>{
        setWordSet(words.wordSet);
      })
    }
    else{
      generateWordSet()
      .then((words)=>{
        setWordSet(words.wordSet);
        setCorrectWord(words.todaysWord)
      })
    }
  },[])



  //從Key.js移動過來
  const onSelectLetter =(keyVal)=>{
    if(currAttempt.letterPos>4) return ;  
    const newBoard =[...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    // console.log(currAttempt)
    // console.log(keyVal)

    setBoard(newBoard)
    setCurrAttempt({...currAttempt ,letterPos : currAttempt.letterPos+1})
    // localStorage.setItem('localAttempt',JSON.stringify(currAttempt));
    // console.log(currAttempt) //從App.js來
    // console.log(keyVal) //alphabet
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
    // console.log(currWord)
    // console.log(wordSet)
    if (wordSet.has(currWord)) {
      console.log(board)
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos :0 });  //往下一行，letterPos為0   set增加attempt
      console.log('hihi')
      localStorage.setItem('userAnswer',JSON.stringify(board));  //在local存取玩家作答
      localStorage.setItem('localAttempt',JSON.stringify({ attempt: currAttempt.attempt + 1, letterPos :0 }));

    } else { // failed the word , not in Dic
      // alert("Word not found");
      let row = document.querySelector(`.board .row:nth-child(${currAttempt.attempt+1})`)
      row.classList.toggle('foo')
      // add Toast Component 3 secs
      
    }
    if(currWord === correctWord){
      setGameOver({ gameOver: true, guessedWord: true });
      localStorage.clear()
      return ;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      localStorage.clear()
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
        <p className='title'>Lordle</p>
        {/* <NightMode toggleTheme={toggleTheme}  theme={theme} /> */}
        {/* <Login /> */}
      </header>
      
      <AppContex.Provider value={
        {board, setBoard ,currAttempt , setCurrAttempt,onSelectLetter,
          onDelete,onEnter,correctWord,disabledLetters, setDisabledLetters,
          gameOver, setGameOver}
      }>
      <div id ="game"><Toast/>
      <div id='board-container'><Board/></div>
      {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
      </AppContex.Provider>
      
    </div>
  );
}

export default Game;

