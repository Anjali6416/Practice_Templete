import { useState } from "react";

function Higherordercomp (){
    const [count,Setcount]=useState(0);

    const updatecount=()=>{
        Setcount((prev)=>prev+1);
    }
    return(
        <div>
            
            <h2>{count}</h2>
             <button onClick={updatecount}>Update Count</button>
        </div>
    )
}
export default Higherordercomp;