import React ,{ useState , useEffect} from 'react'
import Rank_img from '../img/rank.png'
import { db } from "../config";
import { query, orderBy, limit , collection, doc ,getDocs , onSnapshot, QuerySnapshot ,getDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';



const Rank = ({member}) => {
  const [rankClick, setRankClick] = useState('rank-closed')
  const [rankDict , setRankDict] = useState([])
  const [personPoint , setPersonPoint] = useState(0)

  const toggleRank =()=>{
    setRankClick('rank-open')
    }

  const closedRank =()=>{
    setRankClick('rank-closed')
  }
  useEffect(()=>{
    const orderRank = async () => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, orderBy("points", "desc"), limit(3));
      const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
      setRankDict(querySnapshot.docs.map((doc) => ({ username:doc.id ,points : doc.data().points })));
      // console.log(rankDict)
    };
    orderRank()
    // 個人分數
    const personRank =async()=>{
      const memberTemp = localStorage.getItem("username")
      let docRef = doc(db, "users",memberTemp);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      setPersonPoint(docSnap.data().points)
    } 
    personRank()
  },[rankClick])

  return (
    <div>
      <img src={Rank_img} alt="rank" className='rank_img' onClick={toggleRank}/>
      <div className={rankClick}>
        <h1>Rank</h1>
        <span onClick={closedRank}>X</span>

        <div>
        <h4>easy-mode rank</h4>
        <ol>{rankDict.map(
          (ele)=><li className='rank_list' key={ele.username}>
            <span>name : </span>{ele.username}   {ele.points} <span> points </span></li>
        )}</ol>
        <h4>personal point</h4>
        <p>You have {personPoint} points</p>
        </div>

      </div>
    </div>
  )
}

export default Rank