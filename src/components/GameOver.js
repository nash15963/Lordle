import React, { useContext } from 'react'
import { AppContex } from './Game'
import Clock from './Clock'

function GameOver() {
    const {gameOver ,correctWord ,currAttempt ,playedCount,winCount} = useContext(AppContex) 
    let url = window.location.href ;
    console.log(url)
    const nextExam =()=>{
      localStorage.setItem('commercial' ,false)
      navigator.clipboard.writeText(url);
      window.location.reload(false);
    }
    let winGame = 
    <div>
      <h1>You Win !</h1>
      <h3>Correct Word: {correctWord}</h3>
      {gameOver.guessedWord && (<p className='guess_attemp'>You guessed in {currAttempt.attempt} attempts</p>)} 
    </div> ;
    let loseGame = 
    <div>
      <h1>You losed</h1>
      <h3>Correct Word: {correctWord}</h3>
    </div> ;
    let waitGame = 
    <div>
      <h2>Wait for minutes</h2>
      <h2>or</h2>
      <h2>share Lordle</h2>
    </div> ;
  return (
    <div className='gameOver'>
      {gameOver.gameOver && gameOver.guessedWord ? winGame:(gameOver.gameOver === true && gameOver.guessedWord === false ?loseGame :waitGame)}
      <div className='gameover_statistic'>
      <div className='played_view'>
      <h2 className='played_number'>{playedCount}</h2>
      <p className='played_mark'>played</p>
      </div>
     
      <div className="win_view">
      <h2 className='win_number'>{winCount}</h2>
      <p className='win_mark'>win</p>
      </div>
      </div>
      <div className="gameover_next">
      <div className='gameover_clock'>
        <p>Next Lordle</p>
        <span><Clock/></span>
      </div>
      <div className='gameover_share'>
        <button onClick={nextExam}>Share</button>
      </div>
      </div>
      <p className='gameover_note'>share the link for more puzzles</p>
      {/* guessedWord => 1.判斷有沒有猜出字，2.猜出字後告訴玩家猜了幾次 */}
    </div>
  )
}

export default GameOver
