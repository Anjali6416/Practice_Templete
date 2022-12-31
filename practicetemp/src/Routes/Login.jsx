import { useState } from "react";
import { json } from "react-router-dom";

function Login() {
  const [inputstate, setInputstate] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    setInputstate({ ...inputstate, [e.target.name]: e.target.value });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    getData();
  };
   const getData =async()=>{
    const data=await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers: {"content-type":"application/json"},
        body:JSON.stringify(inputstate)
    })
      const res= await data.json();
      sessionStorage.setItem("loginifo",JSON.stringify(res));
   }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" name="email" onChange={handleinput} />
        <input type="password" name="password" onChange={handleinput} />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Login;
