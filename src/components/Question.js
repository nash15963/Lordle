import React from 'react'

const Question = () => {
    const closeInformation =()=>{
        let question = document.querySelector('.question')
        question.style = 'display:none'

    }
  return (
    <div className='question'>
      <h2>HOW TO PLAY</h2>  
      <span onClick={closeInformation}>X</span>
      <p>Guess the WORDLE in six tries.</p>
      <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
      <p> github </p>
      <p> facebook </p>
      <p> email </p>
    </div>
  )
}

export default Question