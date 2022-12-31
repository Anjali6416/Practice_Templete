import stl from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoAction,
  toggleTodoStatusAction,
} from "../Redux_Pipeline/Todo/todoAction";
import { Link } from "react-router-dom";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { MdOutlinePending } from "react-icons/md";

function TodoList() {
  const allTodos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteTodoAction(id, dispatch);
  };

  const handleToggle = (id) => {
    toggleTodoStatusAction(id, dispatch);
  };

  return (
    <div className={stl.container}>
      <table>
        <thead>
          <tr>
            <th>Tast</th>
            <th>Status</th>
            <th>Toggle Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allTodos.map(({ title, status, id }, i) => {
            return (
              <tr key={i}>
                <td>
                  <Link to={`/todo/${i + 1}`} className={stl.links}>
                    {title}
                  </Link>
                </td>
                <td>{status ? "Completed" : "Pending"}</td>
                <td>
                  <button
                    className={stl.toggleBtn}
                    onClick={() => {
                      handleToggle(id);
                    }}
                  >
                    {status ? "Done" : "Pending"}
                  </button>
                </td>
                <td>
                  <button
                    className={stl.deleteBtn}
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                    {/* <RiDeleteBinLine /> */}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TodoList;
