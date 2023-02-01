let initialData = {
  name: "",
  city: "",
};
const myReducer = (state = initialData, action) => {
  if (action.type === "NAME") {
    return (state = {
      ...state,
      name: action.payload,
    });
  } else if (action.type === "CITY"){
    return (state={
      ...state,
      city:action.payload,
    })
  }
  return state;
};
export default myReducer;
