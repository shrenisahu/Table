import React,{useState} from 'react';
import './App.css';
import Left from './Left';
import Right from './Right';
function App() {
  const[showTable,setShowTable]=useState(1);
  const Show=()=>{
    setShowTable(2)
    console.log("oooo",showTable)
  }

  const Show2=()=>{
    setShowTable(3)
    console.log("oooo3",showTable)
  }
  return (
    <div className="main-div">
    
    <div className="div-left">
      <Right showTable={showTable} Show={Show} />
    </div>


    <div className="left">

    <hr className="div-right"> 
  </hr>
<Left showTable={showTable} Show={Show} Show2={Show2}/>


    </div>
    </div>
  );
}

export default App;
