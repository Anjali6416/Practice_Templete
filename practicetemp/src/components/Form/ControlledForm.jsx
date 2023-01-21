import { useState } from "react";
function ControlledForm(){
   const[formdata,setFormdata]=useState({
      name:"",
      password:"",
      email:""
   })
    var formstyle={
        width:"300px",
        padding:"20px",
        margin:"50px auto",
        boxShadow:"0 0 10px black",
    }
    const submitData=()=>{
       console.log(formdata)
    }
    return(
        <div style={formstyle}>
            <form action="">
                <h1>Controlled Form</h1>
                <h3>Register Form</h3>
                <div>
                    <input type="text" placeholder="enter name" onChange={(event)=>{setFormdata({...formdata,name:event.target.value,})}}  />
                </div><br />
                <div>
                    <input type="password" placeholder="enter password" onChange={(event)=>{setFormdata({...formdata,password:event.target.value})}}/>
                </div><br />
                <div>
                    <input type="text" placeholder="enter email" onChange={(event)=>{setFormdata({...formdata,email:event.target.value})}}  />
                </div><br />
                <div>
                    <input type="button" value="Register" onClick={submitData}/>
                </div>
            </form>
        </div>
    )
}
export default ControlledForm;