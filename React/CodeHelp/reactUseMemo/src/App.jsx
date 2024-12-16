
import { useMemo, useState } from 'react';
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [input,setInput]= useState(0);
 

  function handleClick(){
    setCount((prev)=>prev+1);
  }
  function doubleNum(input){
    for(let i =0; i<=100000000; i++){}
    return input*2;
  }
  let doubleValue = useMemo(()=> doubleNum(input),[input])
  

  return (
    <>
      <div>
        <h1>count : {count}</h1>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />
      <div>
        <input type="number"
        placeholder='Enter the number'
        value={input}
        onChange={(e)=>{setInput(e.target.value)}} />
        <h1>double :  {doubleValue}</h1>
      </div>
    </>
  )
}

export default App
