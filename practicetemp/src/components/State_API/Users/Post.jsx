import { useState } from "react"
function Post(){
    const[posts,setposts]=useState([])
    const getPost=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then()
    }
    return(
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit blanditiis molestias minima illo, atque ipsam praesentium possimus facilis tenetur officia quisquam quam labore neque dolor reprehenderit cum illum sint eum?
            Consequuntur sapiente est cumque nobis nostrum, amet neque dolorem. Quod neque perspiciatis illo, consequatur modi expedita libero dolore. Eum odit iste magni necessitatibus distinctio porro maxime? Odit voluptates distinctio vel?
            Assumenda omnis consequuntur impedit! Cum nesciunt aperiam minus .
            Similique officia fugit maiores? Voluptas, officia! Nesciunt culpa dignissimos totam assumenda animi saepe? Illo aspernatur exercitationem, accusamus eius sed animi deserunt facere ipsa sunt molestiae rem commodi alias vitae architecto!</p>
            <button onClick={getPost}>Get Posts</button>
            <ul>
              {posts.length > 0 } && posts.map((posts)=>{
                return <l>{post.title}</li>
              }) 
            </ul>
        </div>
    )
}