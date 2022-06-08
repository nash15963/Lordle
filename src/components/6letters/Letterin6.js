import React,{ useContext, useEffect } from 'react'
import { AppContex } from './Gamein6'

function Letter({attempVal ,letterPos}) {
    

    const { board ,correctWord ,currAttempt, setDisabledLetters
      , setCorrectLetters , setAlmostLetters} = useContext(AppContex)
    const letter = board[attempVal][letterPos]

    const correct  = correctWord.toUpperCase()[letterPos] === letter ;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const letterState = (currAttempt.attempt > attempVal && 
    (correct ? "correct" : almost ? "almost" : "error")).toString();
    
    const typeState = (letter !== '' ? 'blackboard' : "letter")

    

    useEffect(()=>{
      const handleLetterState =()=>{
        if(letter !== "" && !correct && !almost){   //輸入字母篩選條件 不為空 不正確 且長得不像
          setDisabledLetters((prev) => [...prev, letter]);
          // console.log(disabledLetters)   //null   
        }
        if(letter !== "" && !almost && correct){
          setCorrectLetters((prev)=>[...prev ,letter]) ;
        }
        if(letter !== "" && almost && !correct){
          setAlmostLetters((prev)=>[...prev ,letter]) ;
        }
      }
      handleLetterState()
    },[currAttempt.attempt])
    // 如果橫向增加字母(副效果)
    // setDisabledLetters 增加已被選取屬性

    return (
    <div className={typeState} id={letterState} >{letter}</div> 
  )
}

export default Letter

