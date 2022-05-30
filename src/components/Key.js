import React,{ useContext } from 'react'
import { AppContex } from './Game'

// currAttempt is an Object currAttempt.letterPos == 橫幅
// props.keyVal = what i typed

function Key(props) {
    // console.log('props.bigKey ',props.bigKey )  undefine
    const {onSelectLetter,onDelete,onEnter} = useContext(AppContex)
    const selectLetter =()=>{
      if(props.keyVal === 'ENTER'){
        onEnter()
      }else if(props.keyVal === 'DELETE'){
        onDelete()
      }
      else{
        onSelectLetter(props.keyVal)
      }
    }
  return (
    <button className='key' id={(props.bigKey ? 'big' :props.disabled && 'disabled').toString()} onClick={selectLetter}>
        {props.keyVal}
    </button> 
  )
}

export default Key

// what is [...](擴展運算符)
// var number = [1,2,3,4,5,6]
// console.log(...number) //1 2 3 4 5 6

