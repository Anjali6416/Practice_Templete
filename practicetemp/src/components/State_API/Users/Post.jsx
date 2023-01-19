import { useState } from "react"
function Post(){
    const[posts,setPosts]=useState([])
    const getPost= async()=>{
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then((res)=>res.json())
        // .then()
        var res=await fetch("https://jsonplaceholder.typicode.com/posts");
        var data= await res.json();
        console.log(data);
        setPosts(data)
    }
    return(
        <div style={{margin:"auto" , width:"50%",boxShadow:"0 0 10px black", padding:"20px"}}>
          <h1>Users Posts Information</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit blanditiis molestias minima illo, atque ipsam praesentium possimus facilis tenetur officia quisquam quam labore neque dolor reprehenderit cum illum sint eum?
            Consequuntur sapiente est cumque nobis nostrum, amet neque dolorem. Quod neque perspiciatis illo, consequatur modi expedita libero dolore. Eum odit iste magni necessitatibus distinctio porro maxime? Odit voluptates distinctio vel?
            Assumenda omnis consequuntur impedit! Cum nesciunt aperiam minus .
            Similique officia fugit maiores? Voluptas, officia! Nesciunt culpa dignissimos totam assumenda animi saepe? Illo aspernatur exercitationem, accusamus eius sed animi deserunt facere ipsa sunt molestiae rem commodi alias vitae architecto!</p>
            <button onClick={getPost}>Get Posts</button>
            <ul style={{textAlign:"left"}}>
             {posts.length>0 && posts.map((posts)=>{
              return <li>{posts.title}</li>
             })}
            </ul>
        </div>
    )
}
export default Post;

