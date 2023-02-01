import './App.css';
import Nav from './components/State_API/Nav';
// import Profile from './components/State_API/Profile';
// import Account from './components/State_API/Account/Account';
// import Post from './components/State_API/Users/Post';
import Input from './components/Redux/Input';
import Result from './components/Redux/Result';
import City from './components/Redux/City';

import Profilenew from './components/State_API/LifeCycle/Profilenew';
import CounterTittle from './components/Counter-tittle/CounterTittle';
import Timer from './components/Timer App/Timer';
import Form from './components/Form/Form';
import ControlledForm from './components/Form/ControlledForm';
// import ProductForm from './components/IA-PS-form/ProductForm';
import { useState } from 'react';
// import Jewelery from './components/Route-II/Jewelery';
function App() {
  // const[showProfile,setProfile] = useState(true);
  return (
    <div className="App">
      <Input/>
      <City/>
      <Result/>
      {/* <Jewelery/> */}
      {/* <ProductForm/> */}
      {/* <ControlledForm/> */}
      {/* <Form/> */}
      {/* <Timer/> */}
      {/* <CounterTittle/> */}
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
