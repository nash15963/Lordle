import React, { useContext } from 'react'
import { AppContex } from './Game'
import Clock from './Clock'

function GameOver() {
    const {gameOver ,correctWord ,currAttempt ,playedCount,winCount} = useContext(AppContex) 
    console.log(gameOver)
    const nextExam =()=>{
      localStorage.setItem('commercial' ,false)
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
      <h1>"You losed"</h1>
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
      {/* <p className='statistic_close' onClick={nextExam}>x</p> */}
      {/* <p className='statistic_close'>x</p> */}
      {gameOver.gameOver && gameOver.guessedWord ? winGame:(gameOver.gameOver === true && gameOver.guessedWord === false ?loseGame :waitGame)}
      {/* {commercial ? waitGame : (gameOver.gameOver && gameOver.guessedWord ? winGame : loseGame)} */}
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
        <span><Clock/></span>
      </div>
      <div className='gameover_share'>
        <p onClick={nextExam}>Share</p>
      </div>
      </div>
      <p className='gameover_note'>share the link for more puzzles</p>
      {/* guessedWord => 1.判斷有沒有猜出字，2.猜出字後告訴玩家猜了幾次 */}
    </div>
  )
}

export default GameOver
