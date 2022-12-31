import { Navigate } from "react-router-dom";
function PrivateRoutes({ children }) {
  const isAuth = true;
  if (isAuth) {
    return children;
  }
  return  <Navigate to={"/login"} />;
}
export default PrivateRoutes;
