import React,{ useContext } from 'react'
import { AppContex } from '../App'

function Key(props) {
    // console.log('props.bigKey ',props.bigKey )  undefine
    const {board, setBoard} = useContext(AppContex)
    const selectLetter =()=>{
        const newBoard =[...board]
        console.log(newBoard)
        newBoard[0][0] = props.keyVal
        setBoard(newBoard)
    }
  return (
    <div className='key' id={props.bigKey && 'big'} onClick={selectLetter}>
        {props.keyVal}
    </div>  //改成button???
  )
}

export default Key

