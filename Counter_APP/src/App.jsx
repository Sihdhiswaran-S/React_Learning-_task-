import React from 'react'
import { useState } from 'react'

function App() {
  const [ increament , setIncreament] = useState(0);
  function increamentf(){
    setIncreament(increament + 1);
  }
  function decreamentf(){
    if(increament > 0){
      setIncreament(increament - 1);
    }
    else{
      return alert("atleast value 1 is required");
    }
  }
  function reset(){
    setIncreament(0);
  }
  return (
    <div style={{display : "flex" , justifyContent : "center" , gap : "10px", backgroundColor: " white" , flexDirection : "column" , alignItems : "center" , marginTop : "25%"}}>
   {/* // <center> */}
    <div>
      <p style={{ color : " black   "}}>{increament}</p>
    </div>
    <div style={{ display : "flex" , justifyContent : "center" , gap : "10px", }}>
      <button style={{backgroundColor: " blue", color :'white' , height: "40px" , width: "80px"}} onClick = {increamentf}>increment </button>
      <button style={{backgroundColor: " blue" , color :'white' , height: "40px" , width: "80px"}} onClick = {decreamentf}>decrement </button>
      <button style={{backgroundColor: " blue", color :'white' , height: "40px" , width: "80px"}} onClick={reset}>RESET</button>
    </div>
    {/* </center> */}
    </div>
  )
}
export default App
