import React ,{ useState } from 'react'
import member from '../img/member.png'
import '../css/login.css'

const Login = () => {
    const loginPage = 
    <div className='loginPage'>
        <form>
            <input type="text" placeholder='account'/>
            <input type="password" placeholder='password'/>
         </form>
    </div>
    const signUpPage = 
    <div className='signUpPage'>
        <form>
            <input type="text" placeholder='account'/>
            <input type="password" placeholder='password'/>
        </form>
    </div>
    const [form, setForm] = useState(loginPage)
    const toggleMemberPage =()=>{
        let member_page = document.querySelector(".member_page")
        member_page.style = 'display:block'
    }
  return (
    <div className='login'>
        <img src={member} alt="member" className='member_btn' onClick={toggleMemberPage}/>
        <div className="member_page">
            <div className="member_bar">
                <p>sign Up</p>
                <p>sign In</p>
                <p>X</p>
            </div>
            {form}
        </div>
    </div>
  )
}

export default Login