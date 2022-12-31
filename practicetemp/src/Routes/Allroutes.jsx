import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import SingleTodo from "./SingleTodo";
import Todo from "./Todo";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/todo"}
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
        <Route
          path={`/todo/:id`}
          element={
            <PrivateRoute>
              <SingleTodo />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
export default AllRoutes;
