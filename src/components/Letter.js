import React,{ useContext } from 'react'
import { AppContex } from '../App'

function Letter({letterPos,attempVal}) {
    const {board, setBoard} = useContext(AppContex)
    const letter = board[attempVal][letterPos]
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter