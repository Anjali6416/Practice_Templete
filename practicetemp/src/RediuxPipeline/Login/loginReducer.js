const initstate={
    isAuth:false,
    token:""
}
const loginReducer= (state=initstate,{type,payload})=>{
  switch(type){
    case "LOGIN" : {
        return {...state,isAuth:payload.isAuth,token:payload.token}
    }
  }
}

export default loginReducer;