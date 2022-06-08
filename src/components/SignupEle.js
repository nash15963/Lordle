import React from 'react'

const SignupEle = ({setUsernameReg,setPasswordReg,setFlip,
    handleSignup,usernameMessage,setUsernameMessage}) => {
    
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
                    />
                    </p>
                    <p>{usernameMessage}</p>
                    <button onClick={handleSignup}>send</button>
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