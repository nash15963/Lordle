import React from 'react'

const LoginEle = ({setUsername , setPassword ,handleLogin,
    setFlip,usernameMessage,setUsernameMessage ,btnMes}) => {
    const flipSignup =()=>{
    setFlip(false)
    }
    return (

        <div className='formDiv'>
            <h3>log in</h3>
                <form action="">
                    <p>
                    <input 
                        type="text" 
                        required 
                        onChange={(e)=>{
                            setUsernameMessage('')
                            setUsername(e.target.value)
                        }}
                        placeholder = 'type your Name // test account: ttt'
                    />
                    </p>
                    <p>
                    <input 
                        type="password" 
                        required 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder = 'type your Password // test password: ttt'
                    />
                    </p>
                    <button onClick={handleLogin}>
                        send
                    </button>
                    <p className='login_note'>{btnMes ? usernameMessage : <div id='loading'></div> }</p>
                    <p>You haven't played Lordle &nbsp;
                        <span 
                        onClick={flipSignup}>sing up
                        </span>
                    </p>
                </form>
        </div>
  )
}

export default LoginEle