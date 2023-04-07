import { useState } from "react";
function Counter(){
    const [state,setState] = useState(0);
    const handelAdd = ()=>{
        setState((prev)=>{
           return prev == 10 ? prev : prev+1;
        })
    }
    const handelSub = ()=>{
        setState((prev)=>{
           
          return prev==0 ? prev : prev-1;
          
        })
    }
    return (
        <div>
            <h1>Counter - {state}</h1>
            <button disabled={state ==10 ? true : false} onClick={handelAdd}>ADD</button>
            <button disabled={state == 0 ? true : false} onClick={handelSub}>SUB</button>
        </div>
    )
}

export default Counter;