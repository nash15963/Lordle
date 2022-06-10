import React ,{ useState } from 'react'

import { AiOutlineQuestion ,AiFillGithub ,AiOutlineClose } from 'react-icons/ai';

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
    <AiOutlineQuestion className='question' onClick={openInformation}/>
    <div className={introduce}>
    <div className='descriptioninGame'>
        <div className='description-textinGame'>
            <h4>HOW TO PLAY 
              <AiOutlineClose className='close_description' onClick={closeInformation}/>
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
                <AiFillGithub className='description-github' onClick={handleGithub}/>
                </p>
                </div>
            </div>
        </div>
    </div>     
    </div>
    </>
  )
}

export default Question
