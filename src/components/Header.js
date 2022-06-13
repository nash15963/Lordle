import React, { useState } from 'react'
import Question from './Question'
import NightMode from './NightMode'
import Rank from './Rank'
import Logout from './Logout'
import Profile from './Profile'
import { AiOutlineUser ,AiFillWarning } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const Header = ({theme , setTheme,member}) => {
  let navigate = useNavigate();
  const [mask , setMask] = useState('mask-closed')
  const [hard, setHard] = useState(()=>{
    const gamemode = localStorage.getItem("gamemode")
    return gamemode || 'Easy'
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
    if(location === '/Game'){
      localStorage.setItem('gamemode','Hard')
      localStorage.removeItem('userAnswer')
      localStorage.removeItem('localAnswer')
      localStorage.removeItem('localAttempt')
      setHard('Hard')
      // window.location.href ='./HardGame'
      navigate("/HardGame");
      
    }
    else if(location === '/HardGame'){
      localStorage.setItem('gamemode','Easy')
      localStorage.removeItem('userAnswer')
      localStorage.removeItem('localAnswer')
      localStorage.removeItem('localAttempt')
      setHard('Easy')
      // window.location.href ='./Game'
      navigate("/Game");
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
      {profile ? <Profile profile={profile} setProfile={setProfile} setMask={setMask}/> : ''}
      <Rank member={member} setMask={setMask}></Rank>
      <span className='hard_mode' 
      onClick={()=>{
        setHardSign('notification')
        setMask('mask')
      }}>{hard}</span>
      <div className={hardSign}>
        <div>
        <AiFillWarning/>
        <span>If you leave now, you will lose record ?</span>
        </div>
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
        <BsFillMoonFill className='night_img'/>
        <NightMode toggleTheme={toggleTheme}  theme={theme} />
      </div>
        <Logout setMask={setMask}/>
      </div>
    </header>
  )
}

export default Header