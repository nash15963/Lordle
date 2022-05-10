import React from 'react'

const NightMode = (props) => {
  return (
    <label  className='switch'>

        <input type="checkbox" onChange={props.toggleTheme} checked={props.theme==='light'}/>
        <span className="slider round"></span>

    </label >
  )
}

export default NightMode