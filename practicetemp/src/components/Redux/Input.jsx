import { useState } from "react";
import {myAction} from "../Redux/Action/myAction"
function Input(){
    const[state,setState]=useState("");
    const sendDataToAction=()=>{
      myAction(state);   
    }
    return(
        <div style={{border:"2px solid red", padding:"40px",width:"400px",margin:"auto"}}>
            <h1>Input Component</h1>
         <input type="text" onChange={(e)=>setState(e.target.value)}/>
         
         <button onClick={sendDataToAction}>Send Data to Redux</button>
        </div>
    )
}

export default Input;