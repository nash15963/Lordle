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
  query, where
} from "firebase/firestore";



const Login = ({setMember}) => {
    
    // const login =()=>{

    // }
    // const signup = ()=>{

    // }
    const memberStatus = JSON.parse(localStorage.getItem("username"))
    if (memberStatus !== ''){
        window.location.href ='./Game'
    }
    const [usernameReg , setUsernameReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [usernameMessage , setUsernameMessage] = useState('')

    const handleSignup =async (e)=>{
        e.preventDefault()
        let usersCollectionRef = collection(db,usernameReg); 
        let usernameResult = await getDocs(usersCollectionRef)
        console.log(usernameResult)
        if (usernameResult.empty === false){
            console.log('有了')
            setUsernameMessage('這個名稱已有人使用')
        }
        else{
            await addDoc(usersCollectionRef, { password: passwordReg });
            setUsernameMessage('註冊成功')
            setMember(usernameReg)
            localStorage.setItem('username' ,usernameReg)
            window.location.href ='./Game'
        }
        
    }
    const handleLogin =async(e)=>{
        e.preventDefault() ;
        let usersCollectionRef = collection(db,username); 
        let usernameResult = await getDocs(usersCollectionRef)
        if(usernameResult.empty === true){
            console.log('您還未註冊')
        }
        else{
            usernameResult.forEach(doc => {
            console.log(doc.data().password);
            if(password === doc.data().password){
                console.log('登入成功')
                localStorage.setItem('username' ,username)
                setMember(username)
                window.location.href ='./Game'
            }
            else{
                console.log('密碼錯誤')
            }
            });
        }
    }

  return (
    <div>
        <h1>Lordle</h1>
        <p>play lordle everyday</p>
        <h3>log in</h3>
        <form action="">
            <p>
            name
            <input type="text" required onChange={(e)=>{
                setUsername(e.target.value)  
            }}/>
            </p>
            <p>
            password
            <input type="password" required onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            </p>
            <button onClick={handleLogin}>send</button>
        </form>
        <h3>sign up</h3>
        <form action="">
            <p>
            name
            <input type="text" required onChange={(e)=>{
                setUsernameReg(e.target.value)
                }}/>
            </p>
            <p>
            password
            <input type="password" required onChange={(e)=>{
                setPasswordReg(e.target.value)
                }}/>
            </p>
            <p>{usernameMessage}</p>
            <button onClick={handleSignup}>send</button>
        </form>
        
    </div>
  )
}

export default Login

// 首頁改成登入畫面
// 登入畫面後 遊戲頁需要出現hi xxxx
// 多一個右側選單 -> 包含 night hard (如果上面有單字的話出現通知欄詢問是否重新開始) easy-rank hard-rank  