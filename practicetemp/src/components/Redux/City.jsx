import { useState } from "react";
import { cityAction } from "./Action/cityAction";
import { useDispatch } from "react-redux";
function City(){
    const dispatch=useDispatch()
    const[city,setCity]=useState("")
    const sendDataToCityAction=()=>{
    cityAction(city,dispatch);
    }
    return(
        <div style={{border:"2px solid Green", padding:"40px",width:"400px",margin:"auto"}}>
            <h1>City Component</h1>
            <input type="text" onChange={(e)=>{setCity(e.target.value);}} />
            <button onClick={sendDataToCityAction}>Store City</button>
        </div>
    )
}
export default City;