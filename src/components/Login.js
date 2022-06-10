import React , { useEffect, useState } from 'react'
import { db } from "../config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  query, where,setDoc
} from "firebase/firestore";
import LoginEle from './LoginEle'
import SignupEle from './SignupEle'


const Login = ({setMember}) => {
    const [usernameReg , setUsernameReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

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
      if(memberStatus !== ''){
        window.location.href ='./Game'
      }
    },[])

    const handleSignup =async (e)=>{
        e.preventDefault()
        setBtnMes(false)
        let docRef = doc(db, "users",usernameReg);
        const docSnap = await getDoc(docRef);
        try{
        if (docSnap.exists()) {
            setBtnMes(true)
            console.log("Document data:", docSnap.data());
            setUsernameMessage('這個名稱已有人使用')
          } else {
            // doc.data() will be undefined in this case
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
            window.location.href ='./Game'
          }
        }
        catch(error){
          setBtnMes(true)
          console.log('error')
          setUsernameMessage('停滯時間過長，請重新整理網頁')
        }
    }

    const handleLogin =async(e)=>{
        e.preventDefault() ;
        setBtnMes(false)
        let docRef = doc(db, "users",username);
        const docSnap = await getDoc(docRef);
        try
        {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setBtnMes(true)
            if(docSnap.data().password === password){
                setUsernameMessage('登入成功')
                localStorage.setItem('username' ,username)
                window.location.href ='./Game'
            }
            else{
              setBtnMes(true)
              setUsernameMessage('密碼錯誤')
            }
          } else {
            // doc.data() will be undefined in this case
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
        setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin} 
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
