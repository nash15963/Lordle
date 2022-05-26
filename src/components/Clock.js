import { useState, useEffect } from 'react';

const Clock = () => {
    const [minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(5);
    useEffect(()=>{
        console.log('---time---start---')
        // localStorage.setItem('commercial' ,'yes')
        let countDownInterval = setInterval(()=>{
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countDownInterval)
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
            ? <p>haha</p>
            : <p> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
    </div>
  )
}

export default Clock

// 設計重點 大 乾淨