import "./App.css";
import  { Green ,Red,Teal} from "./components/HOC/Red"
import Higherordercomp from "./components/HOC/Highordercomp";
import Counter from "./components/Counter/Counter";
function App() {
  return <div className="App">
    <Counter/>
    {/* <h1>Higher Order Component</h1>
    <Red cmp={Higherordercomp}/>
     <Green cmp = {Higherordercomp}/> */}
     {/* <Teal><Higherordercomp/></Teal> */}
  </div>;
}

export default App;
