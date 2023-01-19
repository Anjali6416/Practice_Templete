import { useState } from "react";
function Profilenew({img,name,gender}){
    const[state,setState] = useState({
        image:"https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
        name:"Charls",
        gender:"male",

    })
    return(
        <div>
        <img src={img} alt="" width={"50%"} />
        <h3>{name}</h3>
        <p>{gender}</p>
        <button>change user</button>
        </div>
    )
}
export default Profilenew;