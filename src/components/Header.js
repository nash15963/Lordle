import React, { useState } from 'react'
import night_img from '../img/night_mode.png'
import Question from './Question'
import NightMode from './NightMode'
import Rank from './Rank'
import Logout from './Logout'
import profile_png from '../img/profile.jpg'
import Profile from './Profile'

import { AiOutlineUser } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';

const Header = ({theme , setTheme,member}) => {
  const [mask , setMask] = useState('mask-closed')
  const [hard, setHard] = useState(()=>{
    const gamemode = localStorage.getItem("gamemode")
    return gamemode || 'Hard'
  })
  const [hardSign , setHardSign] = useState('notification_close')
  const [profile , setProfile] = useState(false)
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
      localStorage.setItem('gamemode','Easy')
      localStorage.removeItem('userAnswer')
      localStorage.removeItem('localAnswer')
      localStorage.removeItem('localAttempt')
      setHard('Easy')
      window.location.href ='./HardGame'
      
    }
    else if(location === '/HardGame'){
      localStorage.setItem('gamemode','Hard')
      localStorage.removeItem('userAnswer')
      localStorage.removeItem('localAnswer')
      localStorage.removeItem('localAttempt')
      setHard('Hard')
      window.location.href ='./Game'
      
    }
  }
  return (
    <header>

        <div className={mask}></div>
        <div className='title'>Lordle</div>
      <div className='func_bar'>
        <AiOutlineUser 
          className='profile_img' 
          onClick={()=>{
          setProfile(true)
          setMask('mask')
        }}/>
        {/* <img src={profile_png} alt="profile_png" 
          className='profile_img' 
          onClick={()=>{
          setProfile(true)
          setMask('mask')
        }}/> */}
        {profile ? <Profile profile={profile} setProfile={setProfile} setMask={setMask}/> : ''}

        <Rank member={member} setMask={setMask}></Rank>
        <span className='hard_mode' onClick={()=>{
          setHardSign('notification')
          setMask('mask')
        }}>{hard}</span>
        <div className={hardSign}>
          <p>If you leave now, you will lose record ?</p>
          <div className='button_controll'>
            <button onClick={changeInHard}>yes</button>
            <button onClick={()=>{
              setHardSign('notification_close')
              setMask('mask-closed')
            }}>no</button>
          </div>
        </div>
        <Question></Question>
        <div className='night_controller'>
        {/* <img src={night_img} alt="night_img" /> */}
        <BsFillMoonFill className='night_img'/>

        <NightMode toggleTheme={toggleTheme}  theme={theme} />
        </div>
        <Logout setMask={setMask}/>
      </div>
    </header>
  )
}

export default Header