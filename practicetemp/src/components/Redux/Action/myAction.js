import myStore from "../ReduxStore/Store"
export const myAction=(data)=>{
myStore.dispatch({
    type:"NAME",
    payload:data,
});
}
