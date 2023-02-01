import myStore from "./ReduxStore/Store";
import { useState } from "react";
import { useSelector } from "react-redux";

function Result() {
  let data = useSelector((store) => {
    return store ;
  });
  // const[state,setState]= useState("")

  // myStore.subscribe(()=>{
  //     setState(myStore.getState().name)
  // })
  return (
    <div>
      <h1>Result Component</h1>
      
      <dl>
        <dt>User Name</dt>
        <dd style={{color:"red",fontWeight:"900"}}>{data.name}</dd>
        <dt>City</dt>
        <dd  style={{color:"green",fontWeight:"900"}}>{data.city}</dd>
      </dl>
    </div>
  );
}
export default Result;
