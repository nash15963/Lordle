import React from 'react'
import member from '../img/member.png'
import '../css/login.css'

const Login = () => {
    const loginPage = 
        <form>
            <input type="text" placeholder='account'/>
            <input type="password" placeholder='password'/>
         </form>
    const signUp = 
        <form>
            <input type="text" placeholder='account'/>
            <input type="password" placeholder='password'/>
        </form>

  return (
    <div className='login'>
        <img src={member} alt="member" />
        <div className="member_page">
            <div className="member_bar">
                <p>sign Up</p>
                <p>sign In</p>
                <p>X</p>
            </div>
            
        </div>
    </div>
  )
}

export default Login