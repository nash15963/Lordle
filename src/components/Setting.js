import React ,{ useState } from 'react'
import setting_png from '../img/setting.png'
import Question from './Question'
import NightMode from './NightMode'
import night_img from '../img/night_mode.png'

const Setting = () => {
  const [controll, setControll] = useState('setting-closed')

  const [theme, setTheme] = useState(()=>{
    const savednight = JSON.parse(localStorage.getItem("usernight"))
    return savednight || 'dark'})

  const openSetting =()=>{
      setControll('setting-open')
    }
    const closeISetting =()=>{
      setControll('setting-closed')
    }

  
    const toggleTheme = ()=>{
      const handleTheme =()=>{
        setTheme((curr)=>(curr ==='light'?"dark":"light"))
        localStorage.setItem('usernight',JSON.stringify(theme === 'light'?"dark":"light"));   
      }
      handleTheme()
    }
  return (
    <div>
      <img className='setting' src={setting_png} alt="setting" onClick={openSetting}/>
      <div className={controll}>
        <Question></Question>
        <div className='night_controller'>
        <img src={night_img} alt="night_img" />
        <NightMode toggleTheme={toggleTheme}   /> {/* //theme={theme} */}
        
        </div>
      </div>
    </div>
  )
}

export default Setting