import './App.css';
import Nav from './components/State_API/Nav';
// import Profile from './components/State_API/Profile';
// import Account from './components/State_API/Account/Account';
// import Post from './components/State_API/Users/Post';
import Profilenew from './components/State_API/LifeCycle/Profilenew';
import CounterTittle from './components/Counter-tittle/CounterTittle';
import { useState } from 'react';
function App() {
  const[showProfile,setProfile] = useState(true);
  return (
    <div className="App">
      <CounterTittle/>
      {/* <Account/> */}
     {/* <Nav/> */}
     {/* <Profile/> */}
     {/* <Post/> */}
     {/* {showProfile ? <Profilenew/>: <div></div> } */}
    
     {/* <Profilenew img="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" name="Charls"
     gender="male"/>
     <Profilenew img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2i0HkyRE61YG7LsAu7jULNIvyHgWoIiOBp8vWA4iAqcPTkbOfWSWKL2Jl2zIKApLmuFA&usqp=CAU" name="naha"
     gender="female"/> */}
    </div>
  );
}

export default App;
