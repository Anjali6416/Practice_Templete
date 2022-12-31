import reduxStore from "../Redux_Pipeline/Store";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { isAuth } = useSelector((store) => store.loginInfo);

  if (isAuth) {
    return children;
  }

  return <Navigate to={"/login"} />;
}

export default PrivateRoute;
