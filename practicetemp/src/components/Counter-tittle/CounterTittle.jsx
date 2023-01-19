import { useState,useEffect } from "react"
function CounterTittle(){
    const[state,setState]=useState(0);
    const update=()=>{
        setState(state+1);
    }
    return (
        <div>
        <button onClick={update}>Clicked Me : {state}</button>
        </div>
    )
}
export default CounterTittle