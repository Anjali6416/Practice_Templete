import { Link } from "react-router-dom";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function Todo() {
  
  return (
    <div>
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
      <Link to={"/"}>Go to Home Page</Link>
    </div>
  );
}
export default Todo;
