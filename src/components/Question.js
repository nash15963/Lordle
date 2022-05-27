import React ,{ useState } from 'react'
import question from '../img/question.png'
import gitHubImg from '../img/gitHubImg.png'

const Question = () => {

  const [introduce, setIntroduce] = useState('question-closed')
  const openInformation =()=>{
    setIntroduce('question-open')
  }
  const closeInformation =()=>{
    setIntroduce('question-closed')
  }
  const handleGithub =()=>{
    window.open('https://github.com/nash15963/lordle')
  } 
  return (
    <>
    <img className='question' src={question} alt="question" onClick={openInformation}/>
    {/* <div className='ques_botton' onClick={openInformation}>?</div> */}
    <div className={introduce}>
    <div className='descriptioninGame'>
        <div className='description-textinGame'>
            <h4>HOW TO PLAY 
              <span className='close_description' onClick={closeInformation}>X</span> 
            </h4>  
            <p>Guess the <span className='bold'>WORLD</span> in six tries.</p>
            <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <hr />
            <div className='description-flex'>
                <div className='description-notice'>
                <p className='bold'>Examples</p>
                <p className='letter-example'> <span className='letter correct'>W</span> <span className='letter'>E</span> <span className='letter'>A</span> <span className='letter'>R</span> <span className='letter'>Y</span> </p>
                <p>The letter <span className='bold'>W</span> is in the word and in the correct spot.</p>
                <p className='letter-example'> <span className='letter'>P</span> <span className='letter almost'>I</span> <span className='letter'>L</span> <span className='letter'>L</span> <span className='letter'>S</span> </p>
                <p>The letter <span className='bold'>I</span> is in the word but in the wrong spot.</p>
                <p className='letter-example'> <span className='letter'>V</span> <span className='letter'>A</span> <span className='letter'>G</span> <span className='letter error'>U</span> <span className='letter'>E</span> </p>
                <p>The letter <span className='bold'>U</span> is not in the word in any spot.
                <img className='description-github' src={gitHubImg} alt="gitHubImg" onClick={handleGithub}/>
                </p>
                </div>
                {/* <div className='description-github'>
                    <img src={rightArrow} alt="rightArrow"  onClick={connectGame}/>
                    <img src={gitHubImg} alt="gitHubImg" onClick={handleGithub}/>
                </div> */}
            </div>
        </div>
    </div>
    {/* <h2>HOW TO PLAY</h2>  
    <span onClick={closeInformation}>X</span>
    <p>Guess the WORDLE in six tries.</p>
    <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
    <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
    <p> github </p>
    <p> facebook </p>
    <p> email </p> */}
     
    </div>
    </>
  )
}

export default Question
