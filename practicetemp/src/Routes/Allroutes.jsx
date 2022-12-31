import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";
import Todo from "./Todo";
import Todoitem from "./Todoitem";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/todo"
          element={
            <PrivateRoutes>
              <Todo />
            </PrivateRoutes>
          }
        />
        <Route
          path="/todo/:id"
          element={
            <PrivateRoutes>
              <Todoitem />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
}
export default Allroutes;
