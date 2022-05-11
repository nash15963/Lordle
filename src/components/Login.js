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
    const [sign, setSign] = useState(loginPage)
    const handleSignin =()=>{
        setSign(loginPage)
        setMemberBarStyle('member-click')
    }
    const handleSignup =()=>{
        setSign(signupPage)
        setMemberBarStyle('member-none-click')
    }
    const [memberBarStyle, setMemberBarStyle] = useState('member-click')
    
  return (
    <div className='login'>
        <img src={member} alt="member" onClick={openLogin}/>
        <div className={memberPage}>
            <div className="member_bar">
                <p onClick={handleSignin} className={memberBarStyle === 'member-none-click' ?'member-click' :'member-none-click'}>sign In</p>
                <p onClick={handleSignup} className={memberBarStyle === 'member-click' ?'member-click' :'member-none-click'}>sign Up</p>
                <p onClick={() => window.location.reload(false)}>X</p>
            </div>
            {/* {sign} */}
        </div>
    </div>
  )
}

export default Login