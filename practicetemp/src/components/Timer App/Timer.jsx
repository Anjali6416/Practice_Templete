import { useState } from "react";
function Timer(){
    const[timer,setTimer]=useState(0)
    const startTimer=()=>{
        setInterval(()=>{
          setTimer(timer+1)
        },1000)
    }
    return(
        <div>
            <h1>Timer is {timer}</h1>
            <button onClick={startTimer}>Start</button>&nbsp;
            <button>Stop</button>
        </div>
    )
}
export default Timer;