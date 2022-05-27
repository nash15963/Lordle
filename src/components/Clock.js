import { useState, useEffect } from 'react';

const Clock = () => {
    const [minutes, setMinutes ] = useState(5);
    const [seconds, setSeconds ] =  useState(1);
    const refreshGame =()=>{
        localStorage.setItem('commercial' ,false)
        window.location.reload(false);
    }

    useEffect(()=>{
        // console.log('---time---start---')
        localStorage.setItem('commercial' ,true)
        let countDownInterval = setInterval(()=>{
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countDownInterval)
                    refreshGame()
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        },1000)
        return ()=> {
            clearInterval(countDownInterval);
          };
    })
  return (
    <div>
        { minutes === 0 && seconds === 0
            ? <p onClick={refreshGame}>Refresh</p>
            : <h3> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h3> 
        }
    </div>
  )
}

export default Clock

// 設計重點 大 乾淨