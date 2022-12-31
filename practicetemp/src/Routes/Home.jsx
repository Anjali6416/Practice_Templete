import { Link } from "react-router-dom";
function Home (){
    return (
        <div>
       <h1>Home Page</h1>
       <Link to="/todo">Go to Todo</Link>
       <Link to="/login">Go to Login</Link>
        </div>
    )
}
export default Home;