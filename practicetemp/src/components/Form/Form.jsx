import { useRef } from "react";
function Form(){
    const nameref=useRef(null)
    const passwordref=useRef(null)
    const emailref=useRef(null);

    var formstyle={
        width:"300px",
        padding:"20px",
        margin:"50px auto",
        boxShadow:"0 0 10px black",
    }
    const submitData=()=>{
     console.log(nameref.current.value,passwordref.current.value,emailref.current.value)
    }
    return(
        <div style={formstyle}>
            <form action="">
                <h1>Uncontrolled Form</h1>
                <h3>Register Form</h3>
                <div>
                    <input type="text" placeholder="enter name" ref={nameref} />
                </div><br />
                <div>
                    <input type="password" placeholder="enter password" ref={passwordref} />
                </div><br />
                <div>
                    <input type="text" placeholder="enter email" ref={emailref} />
                </div><br />
                <div>
                    <input type="button" value="Register" onClick={submitData}/>
                </div>
            </form>
        </div>
    )
}
export default Form;