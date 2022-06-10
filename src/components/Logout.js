import React ,{ useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai';

const Logout = ({setMask}) => {
  const [logoutSign , setLogoutSign] = useState('logout_close')
    const handleLogout =()=>{
        localStorage.clear()
        window.location.href ='./'
    }
  return (
    <>
      <AiOutlineLogout
        className='logout_img' 
        onClick={()=>{
          setLogoutSign('logout_sign')
          setMask('mask')
        }}/>
      <div className={logoutSign}>
        <p>Do you want to leave the Game ?</p>
        <div className='button_controll'>
          <button onClick={handleLogout}>yes</button>
          <button onClick={()=>{
            setLogoutSign('notification_close')
            setMask('mask-closed')
          }}>no</button>
        </div>
      </div>
    </>
  )
}

export default Logout