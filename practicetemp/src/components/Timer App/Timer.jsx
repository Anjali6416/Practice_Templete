import { useState,useRef } from "react";
function Timer(){

    const[timer,setTimer]=useState(0)
  const ref1=useRef();
   let inter;
    const startTimer=()=>{
    ref1.current=setInterval(()=>{
          setTimer((prev)=>prev+1)
        },1000)
    }
    const stopTimer=()=>{
        clearInterval(ref1.current);
    }
    return(
        <div>
            <h1>Timer is {timer}</h1>
            <button onClick={startTimer}>Start</button>&nbsp;
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}
export default Timer;