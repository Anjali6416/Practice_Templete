import { useState,useEffect } from "react"
function CounterTittle(){
    const[state,setState]=useState(0);
    const update=()=>{
        setState(state+1);
       
    }
    useEffect(()=>{
        document.title=`Clicked${state}`
       
    })
    return (
        <div>
        <button style={{padding:"20px" , background:"teal"}} onClick={update}>Click Me : {state}</button>
        </div>
    )
   
}
export default CounterTittle