import React, { useContext } from 'react'
import { AppContex } from './Game'

function GameOver() {
    const {gameOver ,correctWord ,currAttempt} = useContext(AppContex) 
    const nextExam =()=>{
      window.location.reload(false);
    }
  return (
    <div className='gameOver'>
      <p className='statistic_close' onClick={nextExam}>x</p>
      <h3>STATISTICS</h3>
        <p>{gameOver.guessedWord? "You Correctly Guessed the Wordle": "You Failed to Guess the Word"}</p>
        <h3>Correct Word: {correctWord}</h3>
        {gameOver.guessedWord && (<p>You guessed in {currAttempt.attempt} attempts</p>)} 
        {/* guessedWord => 1.判斷有沒有猜出字，2.猜出字後告訴玩家猜了幾次 */}
    </div>
  )
}

export default GameOver
