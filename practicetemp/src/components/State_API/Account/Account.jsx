import { useState } from "react";
function Account(){
      const [amount,setAmount]=useState(0)
   
      const addDeposit = ()=>{
    //     setAmount(amount+100)


    //   updater function
      setAmount((prev)=>prev+100)
      setAmount((prev)=>prev+100)
      }

    //   batching technique
    // setAmount(amount+100)
    // setAmount(amount+200)
   
    // both are async fun
    
      const reducewithdraw = ()=>{
        if(amount>0) setAmount(amount-100)
       
      }
return(
    <div>
   <h1>Current : {amount}</h1>
   <button onClick={addDeposit}>Deposit 100</button><button onClick={reducewithdraw}>Withdraw 100</button>
    </div>
)
}
export default Account; 