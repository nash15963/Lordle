import React, { useContext } from 'react'
import { AppContex } from './Game'

function GameOver() {
    const {gameOver ,correctWord ,currAttempt ,playedCount,winCount} = useContext(AppContex) 
    const nextExam =()=>{
      window.location.reload(false);
    }
  return (
    <div className='gameOver'>
      <p className='statistic_close' onClick={nextExam}>x</p>
      <h2>{gameOver.guessedWord? "You Win !": "You losed"}</h2>
      <h3>Correct Word: {correctWord}</h3>
      {gameOver.guessedWord && (<p className='guess_attemp'>You guessed in {currAttempt.attempt} attempts</p>)} 
      
      <div className='gameover_statistic'>
      <div className='played_view'>
      <p className='played_number'>{playedCount}</p>
      <p className='played_mark'>played</p>
      </div>
     
      <div className="win_view">
      <p className='win_number'>{winCount}</p>
      <p className='win_mark'>win</p>
      </div>
      </div>
      <div className="gameover_next">
      <div className='gameover_clock'>
        <p>Next Lordle</p>
        <span>clock</span>
      </div>
      <div className='gameover_share'>
        <p>Share</p>
      </div>
      </div>
      <p className='gameover_note'>share the link for more puzzles</p>
      {/* guessedWord => 1.判斷有沒有猜出字，2.猜出字後告訴玩家猜了幾次 */}
    </div>
  )
}

export default GameOver
