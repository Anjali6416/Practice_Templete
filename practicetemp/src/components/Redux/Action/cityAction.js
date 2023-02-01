// import myStore from "../ReduxStore/Store"
export const cityAction=(cityData,dispatch)=>{
dispatch({
    type:"CITY",
    payload:cityData,
})
}