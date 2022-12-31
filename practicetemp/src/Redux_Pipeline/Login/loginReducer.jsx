export const LOGIN = "LOGIN";

const initState = {
  token: "",
  isAuth: false,
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return { ...state, token: payload.token, isAuth: payload.isAuth };
    }
    default:
      return state;
  }
};
export default loginReducer;
