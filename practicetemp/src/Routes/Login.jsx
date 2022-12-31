import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginAction from "../RediuxPipeline/Login/loginAction";

function Login() {
  const [inputstate, setInputstate] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleinput = (e) => {
    setInputstate({ ...inputstate, [e.target.name]: e.target.value });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    getData();
  };
  const getData = async () => {
    const data = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inputstate),
    });
    const res = await data.json();
    let dataobj = { isAuth: true, token: res.token };
    loginAction(dataobj, dispatch);
    sessionStorage.setItem("loginifo", JSON.stringify(dataobj));
  };
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
