export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";
// const initState = {
//   todos: [],
// };
const initState = [];

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return [...state, payload];
      // return { ...state, todos: [...state.todos, payload] };
    }
    case DELETE_TODO: {
      return state.filter(({ id }) => {
        return id !== payload;
      });
      // return {
      //   ...state,
      //   todos: state.todos.filter(({ id }) => {
      //     return id !== payload;
      //   }),
      // };
    }
    case TOGGLE_STATUS: {
      return state.map((ele) => {
        if (ele.id === payload) {
          ele.status = !ele.status;
        }
        return ele;
      });

      // return {
      //   ...state,
      //   todos: state.todos.map((ele) => {
      //     if (ele.id === payload) {
      //       ele.status = !ele.status;
      //     }
      //     return ele;
      //   }),
      // };
    }

    default:
      return state;
  }
};

export default todoReducer;
