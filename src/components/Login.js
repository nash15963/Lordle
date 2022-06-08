import React , { useState } from 'react'
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

    const handleSignup =async (e)=>{
        e.preventDefault()
        let docRef = doc(db, "users",usernameReg);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUsernameMessage('這個名稱已有人使用')
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            let usersCollectionRef = collection(db,'users');
            await setDoc(doc(usersCollectionRef,usernameReg), {
                password:passwordReg,points:Number(0),hard_points:Number(0)});
            setUsernameMessage('註冊成功')
            localStorage.setItem('username' ,usernameReg)
            window.location.href ='./Game'
          }
    }
    const handleLogin =async(e)=>{
        e.preventDefault() ;
        let docRef = doc(db, "users",username);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            if(docSnap.data().password === password){
                setUsernameMessage('登入成功')
                localStorage.setItem('username' ,username)
                window.location.href ='./Game'
            }
            else{
                setUsernameMessage('密碼錯誤')
            }
          } else {
            // doc.data() will be undefined in this case
            setUsernameMessage('未註冊或帳號錯誤')
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
        setFlip={setFlip} usernameMessage={usernameMessage} setUsernameMessage={setUsernameMessage} /> 
        :
        <SignupEle setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} handleSignup={handleSignup} 
        setFlip={setFlip} usernameMessage={usernameMessage} setUsernameMessage={setUsernameMessage}/>}
        </div>
    </div>
  )
}

export default Login
