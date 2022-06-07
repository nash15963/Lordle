import React, { useState } from 'react'
import night_img from '../img/night_mode.png'
import Question from './Question'
import NightMode from './NightMode'
import Rank from './Rank'
import Logout from './Logout'

const Header = ({theme , setTheme,member}) => {
  const [hard, setHard] = useState('Hard')
  const toggleTheme = ()=>{
      const handleTheme =()=>{
        setTheme((curr)=>(curr ==='light'?"dark":"light"))
        localStorage.setItem('usernight',JSON.stringify(theme === 'light'?"dark":"light"));   
      }
      handleTheme()
  }
  const changeInHard =()=>{
    let location =window.location.pathname
    console.log(location)
    if(location === '/Game'){
      window.location.href ='./HardGame'
      setHard('Easy')
    }
    else if(location === '/HardGame'){
      window.location.href ='./'
      setHard('Hard')
    }
  }
  return (
    <header>

        
        <Rank member={member}></Rank>
        <span onClick={changeInHard}>{hard}</span>
        <Question></Question>
        <div className='night_controller'>
        <img src={night_img} alt="night_img" />
        <NightMode toggleTheme={toggleTheme}  theme={theme} />
        </div>
        <Logout/>
    </header>
  )
}

export default Header