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



const Login = ({setMember}) => {
    
    // const login =()=>{

    // }
    // const signup = ()=>{

    // }
    const [usernameReg , setUsernameReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [usernameMessage , setUsernameMessage] = useState('')

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
                password:passwordReg,points:Number(0)});
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