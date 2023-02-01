import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"

function Jewelery (){
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res)=>res.json())
        .then((jdata)=>{console.log("sdf",jdata)
        setData(jdata);
    })
    },[])
    return (
        <div>
            <h2>Jewelery Component</h2>
           
                {
                 data.length > 0 ? <ul>{
                    data.map ((ele,index)=>{
                        return
                        <li key = {index+1}>{ele.title}</li>
                       
                    })
                }
                 </ul> : <div> <h3>.....Loading...</h3></div>   
                }
            
        </div>
    )
}
export default Jewelery;