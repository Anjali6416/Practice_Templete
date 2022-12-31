const loginAction = (data, dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: data,
  });
};

export default loginAction;
