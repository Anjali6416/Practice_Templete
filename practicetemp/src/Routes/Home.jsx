import { Link } from "react-router-dom";
function Home() {
 
  return (
    <div>
      <h1>Home Comp</h1>
      <h2>
        <Link  to={"/todo"}>Go to Todo</Link>{" "}
      </h2>
      <h2>
        <Link  to={"/login"}>Go to Login Page</Link>{" "}
      </h2>
    </div>
  );
}
export default Home;
