import React from 'react'

const LoginEle = ({setUsername , setPassword ,handleLogin,
    setFlip,usernameMessage,setUsernameMessage ,btnMes}) => {
    const flipSignup =()=>{
    setFlip(false)
    // setBtnMes(true)
    // setUsernameMessage(<div id="loading"></div>)
    // setBtnMes(<div id="loading"></div>)
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
                        placeholder = 'type your Name // test password: ttt'
                    />
                    </p>
                    {/* <button onClick={handleLogin}>send</button> */}
                    <button onClick={handleLogin}>
                        {/* <div id="loading"></div> */}
                        send
                        {/* {btnMes ? <div className="loading"></div> : 'send'} */}
                    </button>
                    <p className='login_note'>{btnMes ? usernameMessage : <div id='loading'></div> }</p>
                    <p>You haven't played Lordle &nbsp;
                        <span 
                        // style={{color :'red'}} 
                        onClick={flipSignup}>sing up
                        </span>
                    </p>
                </form>
        </div>
  )
}

export default LoginEle