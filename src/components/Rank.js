import React ,{ useState , useEffect} from 'react'
import Rank_img from '../img/rank.png'
import { db } from "../config";
import { query, orderBy, limit , collection, doc ,getDocs , onSnapshot, QuerySnapshot ,getDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';



const Rank = ({member}) => {
  const [rankClick, setRankClick] = useState('rank-closed')
  const [rankDict , setRankDict] = useState([])
  const [hardRankDict , setHardRankDict] = useState([])
  const [personPoint , setPersonPoint] = useState(0)
  const [personHardPoint , setPersonHardPoint] = useState(0)
  const toggleRank =()=>{
    setRankClick('rank-open')
    }

  const closedRank =()=>{
    setRankClick('rank-closed')
  }
  useEffect(()=>{
    // 全體簡單排行
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
    // 全體困難排行
    const orderHardRank = async () => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, orderBy("hard_points", "desc"), limit(3));
      const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
      setHardRankDict(querySnapshot.docs.map((doc) => ({ username:doc.id ,hard_points : doc.data().hard_points })));
      // console.log(rankDict)
    };
    orderHardRank()
    // 個人分數
    const personRank =async()=>{
      const memberTemp = localStorage.getItem("username")
      let docRef = doc(db, "users",memberTemp);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      setPersonPoint(docSnap.data().points)
    } 
    personRank()
    //個人難等級分數
    const personalHardRank =async()=>{
      const memberTemp = localStorage.getItem("username")
      let docRef = doc(db, "users",memberTemp);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      setPersonHardPoint(docSnap.data().hard_points)
    }
    personalHardRank()
  },[rankClick])

  return (
    <div className='rank'>
      <img src={Rank_img} alt="rank" className='rank_img' onClick={toggleRank}/>
      <div className={rankClick}>
        <div className='rank_title'>
          <h1>Rank</h1>
          <h1 onClick={closedRank}>x</h1>
        </div>
        <div className='rank_board'>
        <h4>Easy-mode rank</h4>
        <ol>
          {rankDict.map(
          (ele)=><li className='rank_list' key={ele.username}>
              <span className='rank_name'>name : </span>
              <span className='rank_username'>{ele.username}</span>
              <span className='rank_userpoints'>{ele.points}</span>
              <span className='rank_points'> points </span>
            </li>
        )}
        </ol>
        <h4>Hard-mode rank</h4>
        <ol>
          {hardRankDict.map(
          (ele)=><li className='rank_list' key={ele.username}>
              <span className='rank_name'>name : </span>
              <span className='rank_username'>{ele.username}</span>
              <span className='rank_userpoints'>{ele.hard_points}</span>
              <span className='rank_points'> points </span>
            </li>
        )}
        </ol>
        <h4>personal EASY point</h4>
        <p>You have {personPoint} points</p>
        <h4>personal HARD point</h4>
        <p>You have {personHardPoint} points</p>
        </div>

      </div>
    </div>
  )
}

export default Rank