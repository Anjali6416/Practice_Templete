import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS } from "./todoReducer";

export const addTodoAction = (task, dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: task,
  });
};

export const deleteTodoAction = (id, dispatch) => {
    dispatch({
        type: DELETE_TODO,
        payload: id,
    })
}
export const toggleTodoStatusAction = (id, dispatch) => {
    dispatch({
        type: TOGGLE_STATUS,
        payload: id,
    })
}
