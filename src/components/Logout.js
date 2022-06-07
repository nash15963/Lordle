import React from 'react'
import logout_img from '../img/logout_img.png'

const Logout = () => {
    const handleLogout =()=>{
        localStorage.clear()
        window.location.href ='./'
    }
  return (
    <div>
        <img src={logout_img} alt="logout" className='logout_img' onClick={handleLogout}/>
    </div>
  )
}

export default Logout