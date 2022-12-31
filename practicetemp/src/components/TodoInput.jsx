import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../Redux_Pipeline/Todo/todoAction";
import { v4 as uuid } from "uuid";

function TodoInput() {
  const [inputState, setInputState] = useState({
    title: "",
    status: false,
    id: "",
  });
  const dispatch = useDispatch();

  const handleValuedInput = (e) => {
    setInputState({ ...inputState, title: e.target.value });
  };
  const handleSubmit = () => {
    addTodoAction({ ...inputState, id: uuid() }, dispatch);
  };

  return (
    <div style={{}}>
      <input
        style={{ padding: "10px 30px", textAlign: "center", fontSize: "24px" }}
        type="text"
        placeholder="Enter Todo..."
        onChange={handleValuedInput}
      />
      <button
        style={{
          padding: "12px 30px",
          backgroundColor: "#28B463",
          color: "#fff",
          fontSize: "24px",
          border: "none",
        }}
        onClick={handleSubmit}
      >
        ADD
      </button>
    </div>
  );
}
export default TodoInput;
