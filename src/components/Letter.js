import React,{ useContext, useEffect } from 'react'
import { AppContex } from '../App'

function Letter({letterPos,attempVal}) {
    const { board ,correctWord ,currAttempt,disabledLetters, setDisabledLetters} = useContext(AppContex)
    const letter = board[attempVal][letterPos]

    const correct  = correctWord.toUpperCase()[letterPos] === letter ;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = (currAttempt.attempt > attempVal && 
    (correct ? "correct" : almost ? "almost" : "error")).toString();

    useEffect(()=>{
      if(letter !== "" && !correct && !almost){   //輸入字母篩選條件 不為空 不正確 且長得不像
        // console.log(letter);
        setDisabledLetters((prev) => [...prev, letter]);
        // console.log(disabledLetters)   //null   //it should fix it !
      }
    },[currAttempt.attempt])
    // 如果橫向增加字母(副效果)
    // setDisabledLetters 增加已被選取屬性

    return (
    <div className='letter' id={letterState}>{letter}</div> //it got an error
  )
}

export default Letter