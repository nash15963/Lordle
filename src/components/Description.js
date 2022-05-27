import React from 'react'
import '../styl/Description.css'
import rightArrow from '../img/rightArrow.png'
import gitHubImg from '../img/gitHubImg.png'

const Description = () => {
    const connectGame =()=>{
        window.location.href ='./Game'
    }
    const handleGithub =()=>{
        window.open('https://github.com/nash15963/lordle')
    }
  return (
    <div className='description'>
        <div className='description-text'>
            <h4>HOW TO PLAY</h4>  
            <p>Guess the <span className='bold'>WORDLE</span> in six tries.</p>
            <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <hr />
            <div className='description-flex'>
                <div className='description-game'>
                <p className='bold'>Examples</p>
                <p className='letter-example'> <span className='letter correct'>W</span> <span className='letter'>E</span> <span className='letter'>A</span> <span className='letter'>R</span> <span className='letter'>Y</span> </p>
                <p>The letter <span className='bold'>W</span> is in the word and in the correct spot.</p>
                <p className='letter-example'> <span className='letter'>P</span> <span className='letter almost'>I</span> <span className='letter'>L</span> <span className='letter'>L</span> <span className='letter'>S</span> </p>
                <p>The letter <span className='bold'>I</span> is in the word but in the wrong spot.</p>
                <p className='letter-example'> <span className='letter'>V</span> <span className='letter'>A</span> <span className='letter'>G</span> <span className='letter error'>U</span> <span className='letter'>E</span> </p>
                <p>The letter <span className='bold'>U</span> is not in the word in any spot.</p>
                </div>
                <div className='description-flip'>
                    <img src={rightArrow} alt="rightArrow"  onClick={connectGame}/>
                    <img src={gitHubImg} alt="gitHubImg" onClick={handleGithub}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description
