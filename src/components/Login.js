import React, { useState } from 'react'
import member from '../img/member.png'


const Login = () => {
    const loginPage = 
        <form>
            <input type="text" placeholder='login...'/>
            <input type="password" placeholder='password'/>
            <button>send</button>
         </form>
    const signupPage = 
        <form>
            <input type="text" placeholder='signup...'/>
            <input type="password" placeholder='password'/>
            <button>send</button>
        </form>
    const [memberPage , setMemberPage] = useState('member_page_close')
    const openLogin =()=>{
        setMemberPage('member_page')
    }
   
  return (
    <div className='login'>
        <img src={member} alt="member" onClick={openLogin}/>
        <div className={memberPage}>
            <div className="member_bar">
                <p>sign Up</p>
                <p>sign In</p>
                <p onClick={() => window.location.reload(false)}>X</p>
            </div>
            {signupPage}
        </div>
    </div>
  )
}

export default Login