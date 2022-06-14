//import logo from './logo.svg';
import React, {useState} from 'react';
//import './App.css';





const App = () => {


  const state = useState();
  const[count,setCount] = useState(0);


const IncNum = () => {

  setCount(count+1);

  //console.log('clicked'+ count++)
}

  return(
    <>
    <h1> {count}</h1>
    <button onClick={IncNum}> click me</button>
    
    </>

  );

};


export default App;
