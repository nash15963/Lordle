import React from 'react'

const SignupEle = ({setUsernameReg,setPasswordReg,setFlip,
    handleSignup,usernameMessage,setUsernameMessage,btnMes}) => {
    
    const flipLogin =()=>{
        setFlip(true)  
    }
  return (
    <div className='formDiv'>
        <div>
            <h3>sign up</h3>
                <form action="">
                    <p>
                    <input 
                        type="text" 
                        required 
                        placeholder = 'type your Name '
                        onChange={(e)=>{
                            setUsernameMessage('')
                            setUsernameReg(e.target.value)
                        }}
                    />
                    </p>
                    <p>
                    <input 
                        type="password" 
                        required 
                        onChange={(e)=>{setPasswordReg(e.target.value)}}
                        placeholder = 'type your Password'
                    />
                    </p>
                    <button onClick={handleSignup}>send</button>
                    {btnMes ? <p>{usernameMessage}</p> : <div id='loading'></div> }
                    <p className='login_note'>You have played Lordle &nbsp;
                        <span 
                            // style={{color :'red'}} 
                            onClick={flipLogin}>log in 
                        </span>
                        </p>
                </form>
        </div>
    </div>
  )
}

export default SignupEle