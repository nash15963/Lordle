import React ,{ useState } from 'react'

const Question = () => {

  const [introduce, setIntroduce] = useState('question-closed')
  const openInformation =()=>{
    setIntroduce('question-open')
  }
  const closeInformation =()=>{
    setIntroduce('question-closed')
  }
     
  return (
    <>
    <div className='ques_botton' onClick={openInformation}>?</div>
    <div className={introduce}>
    <h2>HOW TO PLAY</h2>  
    <span onClick={closeInformation}>X</span>
    <p>Guess the WORDLE in six tries.</p>
    <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
    <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
    <p> github </p>
    <p> facebook </p>
    <p> email </p>
     
    </div>
    </>
  )
}

export default Question