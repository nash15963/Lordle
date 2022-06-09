import React ,{ useState , useEffect} from 'react'
import { db } from "../config";
import { query, orderBy, limit , collection, doc ,getDocs , onSnapshot, QuerySnapshot ,getDoc } from "firebase/firestore"; 

const Profile = ({profile,setProfile}) => {
    const [personData, setPersonData] = useState({})
    const [personBool ,setPersonBool] = useState(true)
    const [personDataMes, setPersonDataMes] = useState('')
    const [level, setLevel] = useState('')
    let member = localStorage.getItem('username')

    useEffect(()=>{
        const handleEasyPersonalData =async()=>{
            let docRef = doc(db, "users",member);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setPersonBool(true)
                console.log("Document data:", docSnap.data());
                setPersonData({
                    total : docSnap.data().total ,
                    win : docSnap.data().points ,
                    fail :docSnap.data().fail,
                    hard_total : docSnap.data().hard_total ,
                    hard_win : docSnap.data().hard_points ,
                    hard_fail :docSnap.data().hard_fail

                })
            }
            else{
                setPersonBool(false)
                setPersonDataMes('oops ! Reload the page')
            }
        }
        handleEasyPersonalData()
        const handleLevel =()=>{
            if(personData.total >29){
                setLevel('Golden Player')
            }
            else if(30 > personData.total >20){
                setLevel("Silver Player")
            }
            else{
                setLevel('Rookie Player')
            }
        }
        handleLevel()
    },[profile])
    
  return (
      <>
      {personBool ?
    <div className='profile'>
        <h1>Personal Points <span onClick={()=>{setProfile(false)}}>x</span> </h1>
        <h2>Hi ! {member}</h2>
        <h3>Easy Mode</h3>
        <p> <span>Total :</span> <span>{personData.total}</span> </p>
        <p> <span>Win :</span> <span>{personData.win}</span> </p>
        <p> <span>Lose :</span> <span>{personData.fail}</span> </p>
        <h3>Hard Mode</h3>
        <p> <span>Total :</span> <span>{personData.hard_total}</span> </p>
        <p> <span>Win :</span> <span>{personData.hard_win}</span> </p>
        <p> <span>Lose :</span> <span>{personData.hard_fail}</span> </p>
        <h2>{level}</h2>
    </div>
        :
        {personDataMes}
      }
      </>
  )
}

export default Profile