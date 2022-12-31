import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Redux_Pipeline/Login/loginAction";

function Login() {

  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const {isAuth} = useSelector((store) => store.loginInfo);
  
  const inpStyle = {
    fontSize: "20px",
    padding: "5px 10px",
    marginBottom: "20px",
  };

  const handleValuedInput = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputState),
      });
      let resData = await res.json();

      if (resData.token) {
        const user = { ...resData, isAuth: true };
        loginAction(user, dispatch);
        // localStorage.setItem("loginInfo", JSON.stringify(user));
        sessionStorage.setItem("loginInfo", JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    // const lsUserData = JSON.parse(localStorage.getItem("loginInfo"));
    const lsUserData = JSON.parse(sessionStorage.getItem("loginInfo"));
    if (lsUserData) {
      loginAction(lsUserData, dispatch);
    }
  }, [dispatch]);

  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form action="" style={{ fontSize: "20px" }} onSubmit={handleFormSubmit}>
        <label htmlFor="">Username: </label>
        <input
          style={inpStyle}
          type="text"
          placeholder="Email ..."
          name="email"
          onChange={handleValuedInput}
        />
        <br />

        <label htmlFor="">Password: </label>
        <input
          style={inpStyle}
          type="text"
          placeholder="Password ..."
          name="password"
          onChange={handleValuedInput}
        />
        <br />

        <input style={inpStyle} type="submit" value={"Login"} />
      </form>
      <Link to={"/"}>Go to Home Page</Link>
    </div>
  );
}
export default Login;
