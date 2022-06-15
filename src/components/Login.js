import React , { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { db } from "../config";
import { collection,doc,getDoc,setDoc } from "firebase/firestore";
import LoginEle from './LoginEle'
import SignupEle from './SignupEle'
import { useNavigate } from "react-router-dom";


const Login = ({setMember}) => {
    let navigate = useNavigate();
    const [usernameReg , setUsernameReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')
    const [username , setUsername] = useState('ttt')
    const [password , setPassword] = useState('ttt')
    const [usernameMessage , setUsernameMessage] = useState('')
    const [flip , setFlip] = useState(true)
    const [btnMes , setBtnMes] = useState(true)
  // 模擬會員登入掛上session 
    const preventLoginJump =()=>{
      let handleSession = localStorage.getItem('username')
      return handleSession || ''
    }
    let memberStatus =  preventLoginJump()

    useEffect(()=>{
      if(memberStatus){
        // window.location.href ='./Game'
        navigate("/Game");
      }
    },[])

    const handleSignup =async (e)=>{
        e.preventDefault()
        setBtnMes(false)
        if(usernameReg === '' || passwordReg===''){
          setBtnMes(true)
          setUsernameMessage('請確認輸入帳號或密碼')
        }
        else{
        let docRef = doc(db, "users",usernameReg);
        const docSnap = await getDoc(docRef);
        try{
          if (docSnap.exists()) {
              setBtnMes(true)
              // console.log("Document data:", docSnap.data());
              setUsernameMessage('這個名稱已有人使用')} 
          else {
              console.log("No such document!");
              let usersCollectionRef = collection(db,'users');
              await setDoc(doc(usersCollectionRef,usernameReg), {
                  password:passwordReg,
                  points:Number(0),
                  hard_points:Number(0),
                  total:Number(0),
                  hard_total:Number(0),
                  fail:Number(0),
                  hard_fail:Number(0)
                });
              setBtnMes(true)  
              setUsernameMessage('註冊成功')
              localStorage.setItem('username' ,usernameReg)
              // window.location.href ='./Game'
              navigate("/Game");
            }
        }
        catch(error){
          setBtnMes(true)
          console.log('error')
          setUsernameMessage('停滯時間過長，請重新整理網頁')
        }
        }
    }

    const handleLogin =async(e)=>{
        e.preventDefault() ;
        setBtnMes(false)
        if(username === '' || password ===''){
          setBtnMes(true)
          setUsernameMessage('請確認輸入帳號或密碼')
        }
        else{
        let docRef = doc(db, "users",username);
        const docSnap = await getDoc(docRef);
        try{
          if (docSnap.exists()) {
              setBtnMes(true)
            if(docSnap.data().password === password){
                setUsernameMessage('登入成功')
                localStorage.setItem('username' ,username)
                // window.location.href ='./Game'
                navigate("/Game");
            }
            else{
              setBtnMes(true)
              setUsernameMessage('密碼錯誤')
            }
          } 
          else {
            setBtnMes(true)
            setUsernameMessage('未註冊或帳號錯誤')
          }
        }
        catch(error){
          console.log('error')
          setBtnMes(true)
          setUsernameMessage('請登出會員或重新整理頁面')
        }
      }
    }
    
    

  return (
    <div className='login'>
        <div className='loginDiv'>
        <div class="outBlock">
            <div class="textBlock" data-content="LORDLE">
            LORDLE
            </div>
        </div>
        <h3 className='second_slogan'>play lordle everyday</h3>
        {flip ?
        <LoginEle 
        setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin} password={password} username={username}
        setFlip={setFlip} usernameMessage={usernameMessage} setUsernameMessage={setUsernameMessage} btnMes={btnMes}/> 
        :
        <SignupEle setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} handleSignup={handleSignup} 
        setFlip={setFlip} usernameMessage={usernameMessage} setUsernameMessage={setUsernameMessage} btnMes={btnMes}/>
        }
        </div>

    </div>
  )
}

export default Login
